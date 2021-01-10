import React, { useState, useEffect, memo } from "react";

import { Container, Title, Response } from "./styles";

interface Data {
  info?: {
    ip: string;
    city: string;
    region: string;
    country_capital: string;
    country_name: string;
    latitude: number;
    longitude: number;
    timezone: string;
    org: string;
    postal: string;
  };
  error?: boolean;
}

const IP: React.FC = () => {
  const [ip, setIp] = useState("");
  const [data, setData] = useState<Data>();

  const SearchIp = (e: React.FormEvent) => {
    e.preventDefault()
    fetch(`https://ipapi.co/${ip}/json/`).then(async (response) => {
      if (response.status === 404) {
        setData({ error: true });
        return;
      }

      const info = await response.json();
      setData({
        info,
      });
    });
  }

  useEffect(() => {
    fetch("https://ipapi.co/json/").then(async (response) => {
      if (response.status === 404) {
        setData({ error: true });
        return;
      }

      const info = await response.json();
      setData({
        info,
      });
    });
  }, []);

  return (
    <Container>
      <div>
        <Title>
          <h1>Localizar IP</h1>
          <form onSubmit={SearchIp}>
            <input
              type="search"
              className="search"
              placeholder="Digite o IP"
              onChange={(e) => setIp(e.target.value)}
            />
            <input type="submit" className="submit" value="Localizar" />
          </form>
        </Title>
        { data?.info && !data?.error &&
        <Response>
          <div>
            <h1>
              IPv6:
            </h1>
            <p>
              {data.info.ip}
            </p>
          </div>
          <div>
            <h1>
              País:
            </h1>
            <p>
              {data.info.country_name}
            </p>
          </div>
          <div>
            <h1>
              Estado:
            </h1>
            <p>
              {data.info.region}
            </p>
          </div>
          <div>
            <h1>
              Cidade:
            </h1>
            <p>
              {data.info.city}
            </p>
          </div>
          <div>
            <h1>
              Postal:
            </h1>
            <p>
              {data.info.postal}
            </p>
          </div>
          <div>
            <h1>
              Latitude:
            </h1>
            <p>
              {data.info.latitude}
            </p>
          </div>
          <div>
            <h1>
              Longitude:
            </h1>
            <p>
              {data.info.longitude}
            </p>
          </div>
          <div>
            <h1>
              Fuso Horário:
            </h1>
            <p>
              {data.info.timezone}
            </p>
          </div>
          <div>
            <h1>
              Provedor:
            </h1>
            <p>
              {data.info.org}
            </p>
          </div>
        </Response>
        }
      </div>
    </Container>
  );
};

export default memo(IP);
