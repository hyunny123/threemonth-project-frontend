import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import styled from "styled-components";
import Loading from "../../../components/Loading";
import { USER_TOKEN } from "../../../config";

const CakeFormEdit = ({ editData }) => {
  const navigate = useNavigate();
  const { formId } = useParams();
  const [cakeEditForm, setCakeEditForm] = useState(editData);

  const { title, customer_name, cakeorders, contact, additional_explanation } =
    cakeEditForm;
  const [orderDetail, setOrderDetail] = useState(cakeorders);

  const cakeFormHandleInput = (e) => {
    const { name, value } = e.target;
    setCakeEditForm({
      ...cakeEditForm,
      [name]: value,
    });
  };
  const cakeFormDetailHandleInput = (e) => {
    const { name, value } = e.target;
    setOrderDetail({
      ...orderDetail,
      [name]: value,
    });
  };

  const cakeFormRequest = (e) => {
    const { title, customer_name, type, additional_explanation, contact } =
      cakeEditForm;
    const { count, want_pick_up_date, product_id } = orderDetail;
    e.preventDefault();
    if (window.confirm("수정하시겠습니까?")) {
      fetch(`http://15.164.163.31:8001/orders/${formId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${USER_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          customer_name,
          type,
          additional_explanation,
          contact,
          count,
          want_pick_up_date,
          product_id,
        }),
      }).then((res) => {
        if (res.status === 200) {
          navigate(`/formdetail/${formId}`);
        } else {
          alert("다시 시도해 주세요");
          navigate(`/orders/${formId}`);
        }
      });
    }
  };

  const minDate = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  )
    .toISOString()
    .slice(0, 10);

  if (cakeEditForm.title === "") {
    return <Loading />;
  }

  return (
    <CakeFormWrapper>
      <CakeFormWidth>
        <CakeFormTitle>케이크 신청 내역 수정</CakeFormTitle>
        <CakeFormInputWrapper>
          <CakeFormInputTitle>글 제목</CakeFormInputTitle>
          <CakeFormInputTitleInput
            placeholder="제목을 입력해 주세요"
            onChange={cakeFormHandleInput}
            required
            value={title}
            name="title"
          />
          <CakeFormName>이름</CakeFormName>
          <CakeFormNameInput
            placeholder="이름을 입력해 주세요"
            onChange={cakeFormHandleInput}
            required
            value={customer_name}
            name="customer_name"
          />
          <CakeFormPhoneNumber>폰번호</CakeFormPhoneNumber>
          <CakeFormPhoneNumberInput
            placeholder="핸드폰 번호를 입력해 주세요"
            onChange={cakeFormHandleInput}
            required
            value={contact}
            name="contact"
          />
          <CakeFormPickUpDate>픽업날짜</CakeFormPickUpDate>
          <CakeFormPickUpDateDiv>
            <CakeFormPickUpDateInput
              type="date"
              onChange={cakeFormDetailHandleInput}
              required
              name="want_pick_up_date"
              min={minDate}
            />
            <CakeFormPickUpDateInputNotion>
              날짜를 다시 한번 선택해 주세요. 선택하지 않을 시 처음 신청했던
              날짜로 입력됩니다.
            </CakeFormPickUpDateInputNotion>
          </CakeFormPickUpDateDiv>
          <CakeFormCakeName>케이크이름 및 수량</CakeFormCakeName>
          <SelectCake>
            <CakeFormCakeNameInput
              type="radio"
              onChange={cakeFormDetailHandleInput}
              value={cakeEditForm.product_id}
              required
              checked
              name="product_id"
            />
            <div>{cakeorders.product_name}</div>
            <CakeFormOrderCountInput
              placeholder="수량을 입력하세요."
              onChange={cakeFormDetailHandleInput}
              type="number"
              max="4"
              min="0"
              name="count"
            />
            <CakeFormPickUpDateInputNotion>
              수량을 다시 한번 입력해 주세요. 입력하지 않을 시 최초 수량이
              입력됩니다.
            </CakeFormPickUpDateInputNotion>
          </SelectCake>
          <CakeFormRemark>기타사항</CakeFormRemark>
          <CakeFormRemarkInput
            placeholder="남겨주실 말을 적어주세요"
            onChange={cakeFormHandleInput}
            required
            value={additional_explanation}
            name="additional_explanation"
          />
        </CakeFormInputWrapper>
        <CakeFormBtn onClick={cakeFormRequest}>수정하기</CakeFormBtn>
      </CakeFormWidth>
    </CakeFormWrapper>
  );
};

export default CakeFormEdit;

const CakeFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  margin: 100px 0;
  color: ${({ theme }) => theme.fontColor};
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
  color: ${({ theme }) => theme.fontColor};
  border: 7px solid ${({ theme }) => theme.bgColor};
`;
const CakeFormName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-size: 17px;
`;
const CakeFormNameInput = styled.input`
  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-size: 17px;
  font-family: ${({ theme }) => theme.fontFamily};
  &:focus {
    outline: none;
  }
`;

const CakeFormInputTitle = styled(CakeFormName)``;
const CakeFormInputTitleInput = styled(CakeFormNameInput)``;
const CakeFormPhoneNumber = styled(CakeFormName)``;
const CakeFormPhoneNumberInput = styled(CakeFormNameInput)``;
const CakeFormPickUpDate = styled(CakeFormName)``;
const CakeFormPickUpDateDiv = styled.div`
  display: flex;
  align-itmes: center;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
`;
const CakeFormPickUpDateInput = styled(CakeFormNameInput)`
  border: none;
  width: 200px;
`;
const CakeFormPickUpDateInputNotion = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  font-size: 14px;
  color: red;
`;
const CakeFormCakeName = styled(CakeFormName)``;
const CakeFormCakeNameInput = styled(CakeFormNameInput)`
  margin-right: 20px;
`;
const CakeFormOrderCountInput = styled(CakeFormNameInput)`
  font-size: 0.9em;
  margin-left: 20px;
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
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-family: ${({ theme }) => theme.fontFamily};
  &:focus {
    outline: none;
  }
`;

const SelectCake = styled.div`
  display: flex;
  justify-content: flex- start;
  align-items: center;
  height: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
`;

const CakeFormBtn = styled.button`
  border-style: none;
  margin-top: 100px;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fontFamily};
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.fontColor};
  font-weight: bold;
`;
