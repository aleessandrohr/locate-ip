import React from 'react';

import Header from './components/Header';
import IP from './components/IP';

import { Container } from './styles/styles';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return(
    <Container>
      <Header />
      <IP />
      <GlobalStyles />
    </Container>
  );
}

export default App;
