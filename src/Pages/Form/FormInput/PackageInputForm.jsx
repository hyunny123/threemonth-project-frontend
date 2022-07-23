import React, { useState } from "react";
import styled from "styled-components";
import { API, USER_TOKEN } from "../../../config";

const PackageInputForm = () => {
  // 이름, 폰번호, 날짜, 주소, 구성품 + 수량, 포장 유무

  const [packageForm, setPackageForm] = useState({
    title: "",
    customer_name: "",
    contact: "",
    delivery_date: "",
    delivery_location: "",
    contents: "",
    is_packaging: "",
    additional_explanation: "",
    type: "package",
  });
  const { PACKAGEINPUT } = API;
  const {
    title,
    customer_name,
    contact,
    delivery_date,
    delivery_location,
    contents,
    is_packaging,
    additional_explanation,
    type,
  } = packageForm;

  const packageFormHandleInput = (e) => {
    const { name, value } = e.target;
    setPackageForm({
      ...packageForm,
      [name]: value,
    });
  };

  const packageFormRequest = (e) => {
    e.preventDefault();
    fetch(`${PACKAGEINPUT}`, {
      method: "post",
      headers: { Authorization: USER_TOKEN },
      body: {
        title,
        customer_name,
        contact,
        delivery_date,
        delivery_location,
        contents,
        is_packaging,
        additional_explanation,
        type,
      },
    }).then((res) => {
      return res;
    });
  };
  const minDate =
    new Date().getFullYear() +
    "-" +
    (new Date().getMonth() + 1) +
    "-" +
    new Date().getDate();
  return (
    <PackageFormWrapper>
      <PackageFormWidth>
        <PackageFormTitle>패키지 신청서</PackageFormTitle>
        <PackageFormInputWrapper>
          <PackageFormName>이름</PackageFormName>
          <PackageFormNameInput
            placeholder="이름을 입력해 주세요"
            required
            name="customer_name"
            onChange={packageFormHandleInput}
          />
          <PackageFormPhoneNumber>전화번호</PackageFormPhoneNumber>
          <PackageFormPhoneNumberInput
            placeholder="전화번호를 입력해 주세요"
            required
            name="contact"
            onChange={packageFormHandleInput}
          />
          <PackageFormDate>날짜</PackageFormDate>
          <PackageFormDateDiv>
            <PackageFormDateInput
              placeholder="날짜를 입력해 주세요"
              required
              type="date"
              name="delivery_date"
              min={minDate.toString()}
              onChange={packageFormHandleInput}
            />
          </PackageFormDateDiv>
          <PackageFormAddress>주소</PackageFormAddress>
          <PackageFormAddressInput
            placeholder="주소를 입력해 주세요"
            required
            name="delivery_location"
            onChange={packageFormHandleInput}
          />
          <PackageFormDescription>구성품</PackageFormDescription>
          <PackageFormDescriptionInput
            placeholder="원하시는 구성을 입력해 주세요"
            required
            name="contents"
            onChange={packageFormHandleInput}
          />
          <PackageFormIsPackage>포장 유무</PackageFormIsPackage>
          <PackageFormIsPackageInput
            placeholder="포장 유무를 입력해 주세요"
            required
            name="is_packaging"
            onChange={packageFormHandleInput}
          />
          <PackageFormRemark>비고</PackageFormRemark>
          <PackageFormRemarkInput
            placeholder="비고란을 입력해 주세요"
            name="additional_explanation"
            required
            onChange={packageFormHandleInput}
          />
        </PackageFormInputWrapper>
        <PackageFormBtn onClick={packageFormRequest}>신청하기</PackageFormBtn>
      </PackageFormWidth>
    </PackageFormWrapper>
  );
};

export default PackageInputForm;

const PackageFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  margin: 100px 0;
  color: #331211;
`;
const PackageFormWidth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
`;
const PackageFormTitle = styled.p`
  font-size: 30px;
`;
const PackageFormInputWrapper = styled.form`
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(7, 100px);
  grid-template-columns: 1fr 6fr;
  box-sizing: border-box;
  margin-top: 50px;
  width: 100%;
  color: #331211;
  border: 7px solid #f1e6d1;
`;

const PackageFormName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f1e6d1;
`;
const PackageFormNameInput = styled.input`
  border-style: none;
  border-bottom: 1px solid #f1e6d1;
  font-size: 17px;
  &:focus {
    outline: none;
  }
`;

const PackageFormPhoneNumber = styled(PackageFormName)``;
const PackageFormPhoneNumberInput = styled(PackageFormNameInput)``;

const PackageFormDate = styled(PackageFormName)``;
const PackageFormDateDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.bgColor};
`;
const PackageFormDateInput = styled(PackageFormNameInput)`
  border: none;
`;

const PackageFormAddress = styled(PackageFormName)``;
const PackageFormAddressInput = styled(PackageFormNameInput)``;

const PackageFormDescription = styled(PackageFormName)``;
const PackageFormDescriptionInput = styled(PackageFormNameInput)``;

const PackageFormIsPackage = styled(PackageFormName)``;
const PackageFormIsPackageInput = styled(PackageFormNameInput)``;

const PackageFormRemark = styled(PackageFormName)``;
const PackageFormRemarkInput = styled.textarea`
  border-style: none;
  border-bottom: 1px solid #f1e6d1;
  font-size: 17px;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const PackageFormBtn = styled.button`
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
