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
        비정상적인 접근입니다. Click Here!
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
`;
