import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import PackageDetailMain from "./PackageDetailMain";

const PackageDetail = () => {
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState([]);
  useEffect(() => {
    axios
      .get("/data/packagedata.json")
      .then((res) => setPackageData(res.data.result.detailImg));
  }, []);

  const goReservGiftBox = () => {
    // 토큰으로 로그인 여부 확인 후 navigate로 이동
    navigate("/packageinputform");
  };
  return (
    <PackageDetailWrapper>
      <PackageDetailWidth>
        <PackageDetailMain packageData={packageData} />
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

const DetailIndividualReservBtnWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
  font-family: "GangwonEdu_OTFBoldA";
  color: ${(props) => props.theme.fontColor};
  border: 1px solid #331211;
  background-color: #f1e6d1;
`;
