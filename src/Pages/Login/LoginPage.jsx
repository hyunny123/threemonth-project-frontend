import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router";
import { LOGIN_URI } from "./AuthData";
import LoginSignIn from "./LoginSignIn";

const LoginPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (localStorage.getItem("prevpath")) {
      if (localStorage.getItem("token")) {
        window.location = `${localStorage.getItem("prevpath")}`;
      }
    }
  }, [pathname, navigate]);

  return (
    <LoginPageWrapper>
      <LoginPageWidth>
        {/* <LoginPageNotion>
          현재는 카카오 로그인만을 지원합니다. <br /> 추후 추가될 예정입니다.
        </LoginPageNotion> */}
        <LoginSignIn />
        <LoginSocailWrappr>
          <LoginPageSocialTitle>소셜 로그인</LoginPageSocialTitle>
          <LoginPageKakaoWrapper>
            <LoginPageKakaoTitle>카카오 로그인</LoginPageKakaoTitle>
            <a href={LOGIN_URI}>
              <LoginPageKakaoBtn />
            </a>
          </LoginPageKakaoWrapper>
        </LoginSocailWrappr>
      </LoginPageWidth>
    </LoginPageWrapper>
  );
};

export default LoginPage;

const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

const LoginPageWidth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  min-height: 500px;
  margin: 100px auto;
  background: #f1e6d1;
  padding: 50px 20px;
`;

const LoginPageKakaoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 160px;
  margin: 20px;
`;

const LoginSocailWrappr = styled.div`
  /* margin-top: 20px; */
`;
const LoginPageSocialTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  /* margin-bottom: 0.5rem; */
  margin: rem;
`;

const LoginPageKakaoTitle = styled.p``;
const LoginPageKakaoBtn = styled.img.attrs((props) => ({
  src: "/images/kakao_login_medium.png",
  alt: "카카오 로그인 버튼",
}))`
  margin-top: 20px;
`;

const LoginPageNotion = styled.p`
  align-items: flex-end;
  font-size: 18px;
  margin-top: 50px;
  text-align: center;
`;
