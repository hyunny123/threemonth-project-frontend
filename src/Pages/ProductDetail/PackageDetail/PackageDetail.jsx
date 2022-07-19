import React from "react";
import styled from "styled-components";
import PackageDetailMain from "./PackageDetailMain";

const PackageDetail = () => {
  return (
    <PackageDetailWrapper>
      <PackageDetailWidth>
        <PackageDetailMain />
        <DetailIndividualReservBtn>
          기프트박스 신청하기
        </DetailIndividualReservBtn>
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
  color: ${(props) => props.theme.fontColor};
  /* background-color: ${(props) => props.theme.bgColor}; */
`;

const PackageDetailWidth = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 50px;
  min-height: 400px;
  width: 85%;
`;

const DetailIndividualReservBtn = styled.button`
  margin-top: 50px;
  border-style: none;
  height: 60px;
  width: 90%;
  border-radius: 5px;
  font-size: 18px;
  font-family: "GangwonEdu_OTFBoldA";
  color: ${(props) => props.theme.fontColor};
  border: 1px solid #331211;
  background-color: #f1e6d1;
`;
