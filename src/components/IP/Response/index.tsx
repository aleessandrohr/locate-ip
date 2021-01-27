import React from "react";
import { IpData } from "../../../@types/IpData";

import { Container } from "./styles";

interface Props {
  data?: IpData;
}

const Response: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      {data?.version && data?.ip && (
        <div>
          <h1>{data.version}:</h1>
          <span>{data.ip}</span>
        </div>
      )}
      {data?.country_name && (
        <div>
          <h1>País:</h1>
          <span>{data.country_name}</span>
        </div>
      )}
      {data?.city && (
        <div>
          <h1>Estado:</h1>
          <span>{data.city}</span>
        </div>
      )}
      {data?.postal && (
        <div>
          <h1>Postal:</h1>
          <span>{data.postal}</span>
        </div>
      )}
      {data?.latitude && (
        <div>
          <h1>Latitude:</h1>
          <span>{data.latitude}</span>
        </div>
      )}
      {data?.longitude && (
        <div>
          <h1>Longitude:</h1>
          <span>{data.longitude}</span>
        </div>
      )}
      {data?.timezone && (
        <div>
          <h1>Fuso Horário:</h1>
          <span>{data.timezone}</span>
        </div>
      )}
      {data?.org && (
        <div>
          <h1>Provedor:</h1>
          <span>{data.org}</span>
        </div>
      )}
    </Container>
  );
};

export default Response;
