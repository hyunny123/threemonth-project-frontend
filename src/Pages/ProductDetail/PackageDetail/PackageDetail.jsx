import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { USER_TOKEN } from "../../../config";
import { LOGIN_URI } from "../../Login/AuthData";
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
    if (USER_TOKEN) {
      navigate("/packageinputform");
    } else {
      if (
        window.confirm("로그인이 필요한 서비스입니다. 로그인 하시겠습니까?")
      ) {
        window.location = `${LOGIN_URI}`;
      }
    }
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
