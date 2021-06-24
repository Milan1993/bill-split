import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Search from "./Search";
import Avatar from "./Avatar";

const Nav = styled.nav`
  max-width: 1300px;
  margin: 0 auto;
  min-height: 70px;
  display: flex;
  align-items: center;

  ul {
    margin: 0;
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    color: white;
    list-style: none;

    .search { margin-left: auto; }
  }
`;

const Header = () => {
  return (
    <header style={{ background: 'linear-gradient(to right, #318f94 0, #5ec58c 100%)'}}>
      <Nav>
        <ul>
          <li>
            <Logo />
          </li>
          <li className="search">
            <Search />
          </li>
          <li><Avatar/></li>
        </ul>
      </Nav>
    </header>
  );
};

export default Header;
