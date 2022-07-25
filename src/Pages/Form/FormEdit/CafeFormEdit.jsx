import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../../../components/Loading";
import { API } from "../../../config";

const CafeFormEdit = () => {
  const [cafeEditForm, setCafeEditForm] = useState({
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
  useEffect(() => {
    fetch("/data/formeditdata.json")
      .then((res) => res.json())
      .then((data) => setCafeEditForm(data.result.cafe));
  }, []);

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
  } = cafeEditForm;

  const cafeFormHandleInput = (e) => {
    const { name, value } = e.target;
    setCafeEditForm({
      ...cafeEditForm,
      [name]: value,
    });
  };
  const cafeFormRequest = (e) => {
    e.preventDefault();
    if (window.confirm("수정하시겠습니까?")) {
      fetch(`${CAFEINPUT}`, {
        method: "post",
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
  if (cafeEditForm.title === "") {
    return <Loading />;
  }
  return (
    <CafeFormWrapper>
      <CafeFormWidth>
        <CafeFormTitle>신청내역 수정</CafeFormTitle>
        <CafeFormInputWrapper>
          <CafeFormInputTitle>글 제목</CafeFormInputTitle>
          <CafeFormInputTitleInput
            onChange={cafeFormHandleInput}
            value={title}
            name="title"
            required
          />
          <CafeFormCafeName>카페 이름</CafeFormCafeName>
          <CafeFormCafeNameInput
            onChange={cafeFormHandleInput}
            value={cafename}
            name="cafename"
            required
          />
          <CafeFormBusinessNumber>사업자 번호</CafeFormBusinessNumber>
          <CafeFormBusinessNumberInput
            onChange={cafeFormHandleInput}
            value={business_number}
            name="business_number"
            required
          />
          <CafeFormCEOName>대표 이름</CafeFormCEOName>
          <CafeFormCEONameInput
            onChange={cafeFormHandleInput}
            value={cafe_owner_name}
            name="cafe_owner_name"
            required
          />
          <CafeFormManagerName>담당자 이름</CafeFormManagerName>
          <CafeFormManagerNameInput
            onChange={cafeFormHandleInput}
            value={customer_name}
            name="customer_name"
            required
          />
          <CafeFormCafeAddress>주소</CafeFormCafeAddress>
          <CafeFormCafeAddressInput
            onChange={cafeFormHandleInput}
            value={cafe_location}
            name="cafe_location"
            required
          />
          <CafeFormDescription>원하는 제품과 수량</CafeFormDescription>

          <CafeFormDescriptionInput
            onChange={cafeFormHandleInput}
            value={product_explanation}
            name="product_explanation"
            required
          />

          <CafeFormRemark>비고</CafeFormRemark>
          <CafeFormRemarkInput
            onChange={cafeFormHandleInput}
            value={additional_explanation}
            name="additional_explanation"
            required
          />
        </CafeFormInputWrapper>
        <CafeFormBtn onClick={cafeFormRequest}>수정하기</CafeFormBtn>
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
  font-family: "GangwonEdu_OTFBoldA";
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
  font-family: "GangwonEdu_OTFBoldA";
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
