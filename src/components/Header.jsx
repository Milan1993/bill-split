import React from 'react';
import styled from "styled-components";
import { ReactComponent as ReactLogo } from "../images/stopwatch.svg";

const HeaderContainer = styled.header`
  background: linear-gradient(to right, #318f94 0, #5ec58c 100%);
`;

const Nav = styled.nav`
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  color: white;
  gap: 10px;
  min-height: 70px;
  align-items: center;
`;

const Logo = styled(ReactLogo)`
  width: 35px;
  fill: white;
  vertical-align: middle;
`;
const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <div>
          <Logo />
        </div>
        <div>Search</div>
        <div>Notifications</div>
        <div>Profile circle</div>
        <div>Localisation</div>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
