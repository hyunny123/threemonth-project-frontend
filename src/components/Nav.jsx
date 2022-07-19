import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <NavContainer>
      <Wrapper>
        <NavItem>
          <Link to="/">
            <Logo src="/images/title-logo.png" alt="homepage-logo" />
          </Link>
        </NavItem>
        <NavMenu>
          <Menu>Notice</Menu>
          <Menu>Form</Menu>
          <Menu>QnA</Menu>
          <MenuLogin
            onClick={() => {
              navigate("/kakaologin");
            }}
            src="./images/kakao_login_medium.png"
          />
        </NavMenu>
      </Wrapper>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  margin: 0 auto;
  background-color: #f1e6d1;
`;
const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  width: 100%;
`;
const Logo = styled.img`
  width: 180px;
  height: 90px;
  transform: rotate(0.3deg);
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
`;
const Menu = styled.span`
  padding: 0px 30px;
  cursor: pointer;
  font-size: 2em;
  color: #331211;
`;

const MenuLogin = styled.img`
  padding: 10px;
`;
