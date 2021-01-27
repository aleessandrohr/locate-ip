import React, { useState, memo } from "react";
import { useFetch } from "../../hooks/useFetch";
import { IpData } from "../../@types/IpData";

import Loading from "../Loading/index";
import Response from "./Response/index";

import { Container, Background, Search } from "./styles";

const IP: React.FC = () => {
  const [ip, setIp] = useState("");
  const [url, setUrl] = useState("https://ipapi.co/json/");

  const { data, error } = useFetch<IpData>(url);

  const SearchIp = (e: React.FormEvent) => {
    e.preventDefault();
    const validatedIp = ip.replace(/\s/g, "");
    setUrl(`https://ipapi.co/${validatedIp}/json/`);
  };

  return (
    <Container>
      <Background>
        <Search>
          <h1>Localizar IP</h1>
          <form onSubmit={SearchIp}>
            <input
              type="search"
              className="search"
              placeholder="Digite o IP"
              value={ip}
              onChange={(e) => setIp(e.target.value)}
            />
            <input type="submit" className="submit" value="Localizar" />
          </form>
        </Search>
        {!data && !error ? <Loading /> : <Response data={data} />}
      </Background>
    </Container>
  );
};

export default memo(IP);
