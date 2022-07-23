import { CloudDoneTwoTone } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API, USER_TOKEN } from "../../../config";

const CakeInputForm = () => {
  // 이름, 폰번호, 픽업날짜, 케이크 이름 + 수량, 비고란

  const [cakeForm, setCakeForm] = useState({
    title: "",
    customer_name: "",
    contact: "",
    want_pick_up_date: "",
    product_id: 0,
    count: "",
    additional_explanation: "",
    type: "cake",
  });
  const [cakeList, setCakeList] = useState([
    { id: 0, productname: "", isSeason: true },
  ]);
  const { CAKEINPUT } = API;
  const {
    title,
    customer_name,
    contact,
    want_pick_up_date,
    product_id,
    count,
    additional_explanation,
    type,
  } = cakeForm;

  useEffect(() => {
    fetch("/data/data.json", { method: "get" })
      .then((res) => res.json())
      .then((res) => setCakeList(res.result));
  }, []);

  const cakeFilter = cakeList.filter((x) => x.isSeason === true);

  const cakeFormHandleInput = (e) => {
    const { name, value } = e.target;
    setCakeForm({
      ...cakeForm,
      [name]: value,
    });
  };

  const inputConfirmCheck =
    "한번 신청하신 내용은 컨펌 과정에서만 수정이 가능합니다. 신청하시겠습니까?";

  const cakeFormRequest = (e) => {
    e.preventDefault();
    if (window.confirm(`${inputConfirmCheck}`)) {
      if (CloudDoneTwoTone > 4) {
        alert("수량을 확인해 주세요 최대 개수는 4개입니다.");
      } else {
        fetch(`${CAKEINPUT}`, {
          method: "post",
          headers: { Authorization: USER_TOKEN },
          body: {
            title,
            customer_name,
            contact,
            want_pick_up_date,
            product_id,
            count,
            additional_explanation,
            type,
          },
        }).then((res) => {
          return res;
        });
      }
    }
  };

  const minDate = (
    new Date().getFullYear() +
    "-" +
    (new Date().getMonth() + 1) +
    "-" +
    new Date().getDate()
  ).toString();

  return (
    <CakeFormWrapper>
      <CakeFormWidth>
        <CakeFormTitle>케이크 픽업 신청서</CakeFormTitle>
        <CakeFormInputWrapper>
          <CakeFormInputTitle>글 제목</CakeFormInputTitle>
          <CakeFormInputTitleInput
            placeholder="제목을 입력해 주세요"
            onChange={cakeFormHandleInput}
            required
            name="title"
          />
          <CakeFormName>이름</CakeFormName>
          <CakeFormNameInput
            placeholder="이름을 입력해 주세요"
            onChange={cakeFormHandleInput}
            required
            name="customer_name"
          />
          <CakeFormPhoneNumber>폰번호</CakeFormPhoneNumber>
          <CakeFormPhoneNumberInput
            placeholder="핸드폰 번호를 입력해 주세요"
            onChange={cakeFormHandleInput}
            required
            name="contact"
          />
          <CakeFormPickUpDate>픽업날짜</CakeFormPickUpDate>
          <CakeFormPickUpDateInput
            id="cakedate"
            type="date"
            placeholder="픽업 날짜를 선택해 주세요"
            onChange={cakeFormHandleInput}
            required
            name="want_pick_up_date"
            min={minDate}
          />
          <CakeFormCakeName>케이크이름 및 수량</CakeFormCakeName>
          <SelectCake>
            {cakeFilter.map((list, idx) => (
              <CakeFormCakeNameWrap key={idx}>
                <CakeFormCakeNameInput
                  type="radio"
                  onChange={cakeFormHandleInput}
                  value={list.id}
                  required
                  name="product_id"
                />
                <SelectLabel htmlFor={list.productname}>
                  {list.productname}
                </SelectLabel>
                <CakeFormOrderCountInput
                  placeholder="수량을 입력하세요."
                  onChange={cakeFormHandleInput}
                  type="number"
                  max="4"
                  min="0"
                  name="count"
                />
              </CakeFormCakeNameWrap>
            ))}
          </SelectCake>
          <CakeFormRemark>비고란</CakeFormRemark>
          <CakeFormRemarkInput
            placeholder="비고를 입력해 주세요"
            onChange={cakeFormHandleInput}
            required
            name="additional_explanation"
          />
        </CakeFormInputWrapper>
        <CakeFormBtn onClick={cakeFormRequest}>신청하기</CakeFormBtn>
      </CakeFormWidth>
    </CakeFormWrapper>
  );
};

export default CakeInputForm;

const CakeFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  margin: 100px 0;
  color: #331211;
`;
const CakeFormWidth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
`;
const CakeFormTitle = styled.p`
  font-size: 30px;
`;
const CakeFormInputWrapper = styled.form`
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
const CakeFormName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #f1e6d1;
  font-size: 17px;
`;
const CakeFormNameInput = styled.input`
  border-style: none;
  border-bottom: 1px solid #f1e6d1;
  font-size: 17px;
  &:focus {
    outline: none;
  }
`;

const CakeFormInputTitle = styled(CakeFormName)``;
const CakeFormInputTitleInput = styled(CakeFormNameInput)``;
const CakeFormPhoneNumber = styled(CakeFormName)``;
const CakeFormPhoneNumberInput = styled(CakeFormNameInput)``;
const CakeFormPickUpDate = styled(CakeFormName)``;
const CakeFormPickUpDateInput = styled(CakeFormNameInput)`
  width: 200px;
`;
const CakeFormCakeName = styled(CakeFormName)``;
const CakeFormCakeNameInput = styled(CakeFormNameInput)`
  margin-right: 20px;
`;
const CakeFormCakeNameWrap = styled.div`
  display: flex;
  width: 100%;
`;
const CakeFormOrderCountInput = styled(CakeFormNameInput)`
  font-size: 0.9em;
  margin-right: 20px;
  width: 150px;
`;
const CakeFormRemark = styled(CakeFormName)`
  grid-row: 6/8;
`;
const CakeFormRemarkInput = styled.textarea`
  grid-row: 6/8;
  border-style: none;
  box-sizing: border-box;
  width: 90%;
  text-align: center;
  text-align: justify;
  resize: none;
  rows: 1;
  font-size: 17px;
  border-bottom: 1px solid #f1e6d1;
  &:focus {
    outline: none;
  }
`;

const SelectCake = styled.div`
  display: flex;
  justify-content: flex- start;
  align-items: center;
  height: 100%;
  border-bottom: 1px solid ${(props) => props.theme.bgColor};
`;

const SelectLabel = styled.label`
  margin-right: 20px;
`;

const CakeFormBtn = styled.button`
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
