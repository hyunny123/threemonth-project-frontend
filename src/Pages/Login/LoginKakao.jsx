import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { REST_API_KEY, REDIRECT_URI } from "./AuthData";
import styled from "styled-components";
import { API } from "../../config";

const KakaoLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const authCode = location.search.split("=")[1];
  const { KAKAOLOGIN } = API;
  const kakaoAccessUri = `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${authCode}`;

  useEffect(() => {
    fetch("https://kauth.kakao.com/oauth/token", {
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: kakaoAccessUri,
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          alert("통신을 다시 시도해주십시오.");
        }
      })
      .then((data) => {
        sendToken(data.access_token);
      });
  });

  const sendToken = (kakaoAccessToken) => {
    fetch(`${KAKAOLOGIN}`, {
      method: "POST",
      headers: {
        Authorization: kakaoAccessToken,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        sessionStorage.setItem("token", res.jwt.access);
        sessionStorage.setItem("nickname", res.nickname);
        navigate("/loginpage");
      });
  };

  return <KaKaoLogin>로그인중입니다</KaKaoLogin>;
};

export default KakaoLogin;

const KaKaoLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;
