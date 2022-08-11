import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const NotValidBtn = () => {
  const navigate = useNavigate();
  return (
    <NotValidWrap>
      404 Not Found
      <NotValidButton
        onClick={() => {
          navigate(-1);
        }}
      >
        비정상적인 접근입니다.
        <br /> Click Here!
      </NotValidButton>
    </NotValidWrap>
  );
};

export default NotValidBtn;
const NotValidWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  font-size: 30px;
  color: ${({ theme }) => theme.fontColor};
  @media (max-width: 600px) {
    font-size: 20px;
  }
  @media (max-width: 450px) {
    font-size: 15px;
  }
`;
const NotValidButton = styled.button`
  border-style: none;
  width: 30%;
  height: 100px;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.fontColor};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 20px;
  border-radius: 5px;
  margin-top: 20px;
  @media (max-width: 600px) {
    height: 60px;
    font-size: 15px;
  }
  @media (max-width: 450px) {
    height: 40px;
    font-size: 10px;
  }
`;
