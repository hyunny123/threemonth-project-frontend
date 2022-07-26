import React, { useState } from "react";
import styled from "styled-components";
import { API, USER_TOKEN } from "../../../config";

const CafeInputForm = () => {
  //카페 이름, 사업자 번호, 대표 이름, 담당자 이름, 주소, 원하는 납품 제품과 수량, 비고란

  const [cafeForm, setCafeForm] = useState({
    title: "",
    cafename: "",
    business_number: "",
    cafe_owner_name: "",
    customer_name: "",
    cafe_location: "",
    product_explanation: "",
    additional_explanation: "",
    type: "cafe",
    contact: "",
  });

  const { CAFEINPUT } = API;
  const {
    title,
    cafename,
    business_number,
    cafe_owner_name,
    customer_name,
    cafe_location,
    product_explanation,
    additional_explanation,
    type,
    contact,
  } = cafeForm;

  const cafeFormHandleInput = (e) => {
    const { name, value } = e.target;
    setCafeForm({
      ...cafeForm,
      [name]: value,
    });
  };

  const inputConfirmCheck =
    "한번 신청하신 내용은 컨펌 과정에서만 수정이 가능합니다. 신청하시겠습니까?";

  const cafeFormRequest = (e) => {
    e.preventDefault();
    if (window.confirm(`${inputConfirmCheck}`)) {
      fetch(`${CAFEINPUT}`, {
        method: "post",
        headers: { Authorization: USER_TOKEN },
        body: {
          title,
          cafename,
          business_number,
          cafe_owner_name,
          customer_name,
          cafe_location,
          product_explanation,
          additional_explanation,
          type,
          contact,
        },
      }).then((res) => {
        return res;
      });
    }
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
            name="title"
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
            name="business_number"
            required
          />
          <CafeFormCEOName>대표 이름</CafeFormCEOName>
          <CafeFormCEONameInput
            onChange={cafeFormHandleInput}
            placeholder="대표 이름을 입력해 주세요"
            name="cafe_owner_name"
            required
          />
          <CafeFormManagerName>담당자 이름</CafeFormManagerName>
          <CafeFormManagerNameInput
            onChange={cafeFormHandleInput}
            placeholder="담당자 이름을 입력해 주세요"
            name="customer_name"
            required
          />
          <CafeFormCafeAddress>주소</CafeFormCafeAddress>
          <CafeFormCafeAddressInput
            onChange={cafeFormHandleInput}
            placeholder="주소를 입력해 주세요"
            name="cafe_location"
            required
          />
          <CafeFormDescription>원하는 제품과 수량</CafeFormDescription>

          <CafeFormDescriptionInput
            onChange={cafeFormHandleInput}
            placeholder="원하는 제품과 수량을 입력해 주세요"
            name="product_explanation"
            required
          />

          <CafeFormRemark>비고</CafeFormRemark>
          <CafeFormRemarkInput
            onChange={cafeFormHandleInput}
            placeholder="비고를 입력해 주세요"
            name="additional_explanation"
            required
          />
        </CafeFormInputWrapper>
        <CafeFormBtn onClick={cafeFormRequest}>신청하기</CafeFormBtn>
      </CafeFormWidth>
    </CafeFormWrapper>
  );
};

export default CafeInputForm;

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
const CafeFormCafeNameInput = styled.div`
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
  font-family: "GangwonEdu_OTFBoldA";
`;
