import React from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { USER_TOKEN } from "../../../config";

import PackageDetailMain from "./PackageDetailMain";

const PackageDetail = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goReservGiftBox = () => {
    if (USER_TOKEN) {
      navigate("/reserveform", { state: { formType: "package" } });
    } else {
      if (
        window.confirm("로그인이 필요한 서비스입니다. 로그인 하시겠습니까?")
      ) {
        localStorage.setItem("prevpath", pathname);
        navigate("/loginpage");
      }
    }
  };
  return (
    <PackageDetailWrapper>
      <PackageDetailWidth>
        <PackageDetailMain />
        <DetailIndividualReservBtnWrap>
          <DetailIndividualReservBtn onClick={goReservGiftBox}>
            기프트박스 신청하기
          </DetailIndividualReservBtn>
        </DetailIndividualReservBtnWrap>
      </PackageDetailWidth>
    </PackageDetailWrapper>
  );
};

export default PackageDetail;

const PackageDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.fontColor};
  @media (max-width: 630px) {
  }
`;

const PackageDetailWidth = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 50px;
  min-height: 400px;
  width: 85%;
  @media (max-width: 630px) {
    grid-template-columns: 1fr;
  }
`;

const DetailIndividualReservBtnWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 630px) {
    position: inherit;
  }
`;

const DetailIndividualReservBtn = styled.button`
  position: sticky;
  top: 40px;
  margin-top: 50px;
  border-style: none;
  height: 60px;
  width: 70%;
  border-radius: 5px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.fontColor};
  border: 1px solid ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.bgColor};
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 15px;
  }
  @media (max-width: 630px) {
    position: inherit;
    margin-top: -20px;
    margin-bottom: 50px;
  }
`;
