import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    min-height: 100%;
    background-image: url('https://images.pexels.com/photos/240834/pexels-photo-240834.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-size: cover;
    background-position: center;
  }


  @media (max-width: 768px) {
     html {
       font-size: 14px;
    }
  }

  @media (max-width: 320px) {
     html {
       font-size: 12px;
    }
  }

  @media (max-width: 280px) {
     html {
       font-size: 10px;
    }
  }
`;
