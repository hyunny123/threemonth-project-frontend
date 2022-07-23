import React, { useState } from "react";
import styled from "styled-components";
import { API } from "../../../config";

const CafeFormEdit = () => {
  const [cafeForm, setCafeForm] = useState({
    cafeinputtitle: "",
    cafename: "",
    businessnumber: "",
    ceoname: "",
    managername: "",
    cafeaddress: "",
    description: "",
    remark: "",
  });
  const { CAFEINPUT } = API;
  const {
    cafeinputtitle,
    cafename,
    businessnumber,
    ceoname,
    managername,
    cafeaddress,
    description,
    remark,
  } = cafeForm;

  const cafeFormHandleInput = (e) => {
    const { name, value } = e.target;
    setCafeForm({
      ...cafeForm,
      [name]: value,
    });
  };
  const cafeFormRequest = (e) => {
    e.preventDefault();
    fetch(`${CAFEINPUT}`, {
      method: "post",
      body: {
        cafeinputtitle,
        cafename,
        businessnumber,
        ceoname,
        managername,
        cafeaddress,
        description,
        remark,
      },
    }).then((res) => {
      return res;
    });
  };
  return (
    <CafeFormWrapper>
      <CafeFormWidth>
        <CafeFormTitle>카페 납품 신청서</CafeFormTitle>
        <CafeFormInputWrapper>
          <CafeFormInputTitle>글 제목</CafeFormInputTitle>
          <CafeFormInputTitleInput
            onChange={cafeFormHandleInput}
            placeholder="글 제목을 입력해 주세요"
            name="cafeinputtitle"
            required
          />
          <CafeFormCafeName>카페 이름</CafeFormCafeName>
          <CafeFormCafeNameInput
            onChange={cafeFormHandleInput}
            placeholder="카페 이름을 입력해 주세요"
            name="cafename"
            required
          />
          <CafeFormBusinessNumber>사업자 번호</CafeFormBusinessNumber>
          <CafeFormBusinessNumberInput
            onChange={cafeFormHandleInput}
            placeholder="사업자 번호를 입력해 주세요"
            name="businessnumber"
            required
          />
          <CafeFormCEOName>대표 이름</CafeFormCEOName>
          <CafeFormCEONameInput
            onChange={cafeFormHandleInput}
            placeholder="대표 이름을 입력해 주세요"
            name="ceoname"
            required
          />
          <CafeFormManagerName>담당자 이름</CafeFormManagerName>
          <CafeFormManagerNameInput
            onChange={cafeFormHandleInput}
            placeholder="담당자 이름을 입력해 주세요"
            name="managername"
            required
          />
          <CafeFormCafeAddress>주소</CafeFormCafeAddress>
          <CafeFormCafeAddressInput
            onChange={cafeFormHandleInput}
            placeholder="주소를 입력해 주세요"
            name="cafeaddress"
            required
          />
          <CafeFormDescription>원하는 제품과 수량</CafeFormDescription>

          <CafeFormDescriptionInput
            onChange={cafeFormHandleInput}
            placeholder="원하는 제품과 수량을 입력해 주세요"
            name="description"
            required
          />

          <CafeFormRemark>비고</CafeFormRemark>
          <CafeFormRemarkInput
            onChange={cafeFormHandleInput}
            placeholder="비고를 입력해 주세요"
            name="remark"
            required
          />
        </CafeFormInputWrapper>
        <CafeFormBtn onClick={cafeFormRequest}>신청하기</CafeFormBtn>
      </CafeFormWidth>
    </CafeFormWrapper>
  );
};

export default CafeFormEdit;

const CafeFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  margin: 100px 0;
  color: #331211;
  font-size: 17px;
`;
const CafeFormWidth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
`;
const CafeFormTitle = styled.p`
  font-size: 30px;
`;
const CafeFormInputWrapper = styled.form`
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(10, 100px);
  grid-template-columns: 1fr 5fr;
  box-sizing: border-box;
  margin-top: 50px;
  width: 100%;
  color: #331211;
  border: 7px solid #f1e6d1;
`;
const CafeFormCafeName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f1e6d1;
  font-size: 17px;
`;
const CafeFormCafeNameInput = styled.input`
  border-style: none;
  border-bottom: 1px solid #f1e6d1;
  font-size: 17px;
  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: "GangwonEdu_OTFBoldA";
  }
`;

const CafeFormInputTitle = styled(CafeFormCafeName)``;
const CafeFormInputTitleInput = styled(CafeFormCafeNameInput)``;

const CafeFormBusinessNumber = styled(CafeFormCafeName)``;
const CafeFormBusinessNumberInput = styled(CafeFormCafeNameInput)``;
const CafeFormCEOName = styled(CafeFormCafeName)``;
const CafeFormCEONameInput = styled(CafeFormCafeNameInput)``;
const CafeFormManagerName = styled(CafeFormCafeName)``;
const CafeFormManagerNameInput = styled(CafeFormCafeNameInput)``;
const CafeFormCafeAddress = styled(CafeFormCafeName)``;
const CafeFormCafeAddressInput = styled(CafeFormCafeNameInput)``;
const CafeFormDescription = styled(CafeFormCafeName)`
  text-align: center;
  grid-row: 7/9;
`;
const CafeFormDescriptionInput = styled.textarea`
  border-style: none;
  border-bottom: 1px solid #f1e6d1;
  font-size: 17px;
  resize: none;
  grid-row: 7/9;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: "GangwonEdu_OTFBoldA";
  }
`;
const CafeFormRemark = styled(CafeFormCafeName)`
  grid-row: 9/11;
`;
const CafeFormRemarkInput = styled(CafeFormDescriptionInput)`
  grid-row: 9/11;
`;

const CafeFormBtn = styled.button`
  border-style: none;
  margin-top: 100px;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #ecc987;
  color: #331211;
  font-weight: bold;
`;
