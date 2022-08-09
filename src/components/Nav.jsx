import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { USER_TOKEN, USER_NICKNAME } from "../config";

const Nav = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const goLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("nickname");
    localStorage.removeItem("prevpath");
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
            <Menu
              onClick={() => {
                localStorage.setItem("prevpath", pathname);
                navigate("loginpage");
              }}
            >
              login
            </Menu>
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
  @media screen and (max-width: 855px) {
    width: 90%;
    justify-content: center;
  }
  @media screen and (max-width: 735px) {
    width: 90%;
    justify-content: center;
  }
  @media screen and (max-width: 640px) {
    width: 90%;
  }
  @media screen and (max-width: 320px) {
    width: 90%;
  }
`;

const NavItem = styled.div`
  width: 100%;
`;
const Logo = styled.img`
  width: 180px;
  height: 90px;
  transform: rotate(1deg);
  @media screen and (max-width: 735px) {
    width: 150px;
    height: 70px;
  }
  @media screen and (max-width: 710px) {
    width: 120px;
    height: 55px;
  }
  @media screen and (max-width: 515px) {
    width: 80px;
    height: 40px;
  }
  @media screen and (max-width: 340px) {
    width: 50px;
    height: 25px;
  }
`;

const NavMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 60px;
  align-items: center;
  padding: 0px 50px;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    padding: 0px 20px;
  }
  @media screen and (max-width: 700px) {
    padding: 0px 10px;
  }
  @media screen and (max-width: 640px) {
    padding: 0px 0px;
  }
  @media screen and (max-width: 320px) {
    padding: 0px 0px;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  font-size: 1.2em;
  color: ${({ theme }) => theme.fontColor};
  cursor: pointer;
  @media screen and (max-width: 2560px) {
    font-size: 1.5em;
  }
  @media screen and (max-width: 1400px) {
    font-size: 1.2em;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.1em;
  }
  @media screen and (max-width: 640px) {
    width: 80px;
  }
  @media screen and (max-width: 515px) {
    width: 60px;
    font-size: 1em;
  }
  @media screen and (max-width: 390px) {
    width: 50px;
    font-size: 0.8em;
  }
  @media screen and (max-width: 320px) {
    width: 50px;
    font-size: 0.7em;
  }
`;

// const MenuLogin = styled.img`
//   width: 100px;
//   padding: 10px;
//   @media screen and (max-width: 515px) {
//     width: 60px;
//     padding: 5px;
//   }
//   @media screen and (max-width: 320px) {
//     width: 50px;
//     padding: 0px;
//   }
// `;
