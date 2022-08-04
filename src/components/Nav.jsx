import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { USER_TOKEN, USER_NICKNAME } from "../config";
import { LOGIN_URI } from "../Pages/Login/AuthData";

const Nav = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const goLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("nickname");
    window.location.reload();
  };

  const myPageNotice =
    "마이페이지는 현재 준비중에 있습니다. 신청하신 폼은 Form 탭 내부 리스트에서 확인하실 수 있습니다.";

  return (
    <NavContainer>
      <Wrapper>
        <NavItem>
          <Link to="/">
            <Logo src="/images/title-logo.png" alt="homepage-logo" />
          </Link>
        </NavItem>
        <NavMenu>
          <Menu onClick={() => alert("준비중인 페이지입니다")}>Notice</Menu>
          <Menu
            onClick={() => {
              navigate("/formlist");
            }}
          >
            Form
          </Menu>
          <Menu onClick={() => alert("준비중인 페이지입니다")}>QnA</Menu>
          {USER_TOKEN ? (
            <Menu onClick={() => alert(`${myPageNotice}`)}>
              {USER_NICKNAME}님
            </Menu>
          ) : (
            <a href={LOGIN_URI}>
              <MenuLogin src="./images/kakao_login_medium.png" />
            </a>
          )}
          {USER_TOKEN && <Menu onClick={goLogout}>Logout</Menu>}
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
  height: 110px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.bgColor};
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
  transform: rotate(1deg);
`;

const NavMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 60px;
  align-items: center;
  padding: 0px 50px;
  box-sizing: border-box;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  cursor: pointer;
  font-size: 1.2em;
  color: ${({ theme }) => theme.fontColor};
`;

const MenuLogin = styled.img`
  width: 100px;
  padding: 10px;
`;
