import React from "react";

import IP from "./components/IP";

import { Container, Background } from "./styles/styles";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <Container>
      <Background>
        <IP />
      </Background>
      <GlobalStyles />
    </Container>
  );
};

export default App;
