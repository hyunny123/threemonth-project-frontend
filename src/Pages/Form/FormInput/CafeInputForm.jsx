import React, { useState } from "react";
import styled from "styled-components";
import { USER_TOKEN } from "../../../config";

const CafeInputForm = () => {
  //카페 이름, 사업자 번호, 대표 이름, 담당자 이름, 주소, 원하는 납품 제품과 수량, 비고란

  const [cafeForm, setCafeForm] = useState({
    title: "",
    cafename: "",
    corporate_registration_num: "",
    cafe_owner_name: "",
    customer_name: "",
    cafe_location: "",
    product_explanation: "",
    additional_explanation: "",
    type: "cafe",
    contact: "",
  });

  const {
    title,
    cafename,
    corporate_registration_num,
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
      fetch("http://15.164.163.31:8001/orders/", {
        method: "post",
        headers: {
          Authorization: `Bearer ${USER_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          cafename,
          contact,
          corporate_registration_num,
          cafe_owner_name,
          customer_name,
          cafe_location,
          product_explanation,
          additional_explanation,
          type,
        }),
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
            name="corporate_registration_num"
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
          <CafeFormContact>카페 전화번호</CafeFormContact>
          <CafeFormContactInput
            onChange={cafeFormHandleInput}
            placeholder="카페 연락처를 입력해 주세요"
            name="contact"
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
  color: ${({ theme }) => theme.fontColor};
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
  grid-template-rows: repeat(11, 100px);
  grid-template-columns: 1fr 5fr;
  box-sizing: border-box;
  margin-top: 50px;
  width: 100%;
  color: ${({ theme }) => theme.fontColor};
  border: 7px solid ${({ theme }) => theme.bgColor};
`;
const CafeFormCafeName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-size: 17px;
  font-family: ${({ theme }) => theme.fontFamily};
`;
const CafeFormCafeNameInput = styled.input`
  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-size: 17px;
  font-family: ${({ theme }) => theme.fontFamily};
  &:focus {
    outline: none;
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
const CafeFormContact = styled(CafeFormCafeName)``;
const CafeFormContactInput = styled(CafeFormCafeNameInput)``;
const CafeFormCafeAddress = styled(CafeFormCafeName)``;
const CafeFormCafeAddressInput = styled(CafeFormCafeNameInput)``;
const CafeFormDescription = styled(CafeFormCafeName)`
  text-align: center;
  grid-row: 8/10;
`;
const CafeFormDescriptionInput = styled.textarea`
  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-size: 17px;
  resize: none;
  grid-row: 8/10;
  font-family: ${({ theme }) => theme.fontFamily};
  &:focus {
    outline: none;
  }
`;
const CafeFormRemark = styled(CafeFormCafeName)`
  grid-row: 10/12;
`;
const CafeFormRemarkInput = styled(CafeFormDescriptionInput)`
  grid-row: 10/12;
`;

const CafeFormBtn = styled.button`
  border-style: none;
  margin-top: 100px;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.fontColor};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
`;
