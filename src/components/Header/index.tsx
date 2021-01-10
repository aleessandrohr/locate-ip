import React from "react";

import { Container } from "./styles";

interface NavData {
  type: string;
  mobile: boolean;
}

const Header: React.FC = () => {
  let state = false;

  const toggle = () => {
    const navItems = document.getElementById("items-mobile");

    if (!state) {
      if (navItems) {
        navItems.style.maxHeight = "100px";
        state = true;
      }
    } else {
      if (navItems) {
        navItems.style.maxHeight = "0";
        state = false;
      }
    }
  };

  const Nav: React.FC<NavData> = ({ type, mobile }) => {
    return (
      <nav className={type}>
        <div className="primary">
          <a href="/">Localizador IP</a>
          {mobile && (
            <button onClick={toggle}>
              <span>
                <i className="fas fa-bars" />
              </span>
            </button>
          )}
        </div>
        <div className="items" id={`items-${type}`}>
          <ul>
            <li>
              <a href="/">
                <i className="fas fa-home"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/alessandrohenriqueramos/localizar-ip"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

  return (
    <Container>
      <Nav type="desktop" mobile={false} />
      <Nav type="mobile" mobile={true} />
    </Container>
  );
};

export default Header;
