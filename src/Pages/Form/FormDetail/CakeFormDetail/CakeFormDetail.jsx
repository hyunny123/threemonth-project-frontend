import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { USER_TOKEN } from "../../../../config";
import styled from "styled-components";

const CakeFormDetail = ({ detailFormData }) => {
  // const [cakeDetailForm, setCakeDetailForm] = useState([]);
  // const {
  //   cakeinputtitle,
  //   name,
  //   phonenumber,
  //   cakepickupdate,
  //   cakename,
  //   ordercount,
  //   remark,
  // } = cakeDetailForm;

  const {
    additional_explanation,
    cakeorders,
    contact,
    created_at,
    customer_name,
    id,
    status,
    title,
    type,
  } = detailFormData;

  const { count, product_name, want_pick_up_date } = cakeorders;
  console.log(additional_explanation);
  // const params = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch(`/data/cakeDetailFormData.json/formdetail/${params.id}`)
  //     .then((response) => response.json())
  //     .then((data) => setCakeDetailForm(data));
  // }, [params.id]);

  // useEffect(() => {
  //   fetch(`/data/CakeDetailFormData.json/formdetail/${params.id}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setCakeDetailForm(data));
  // }, [params.id]);

  // useEffect(() => {
  //   fetch("/data/cakeDetailFormData.json")
  //     .then((response) => response.json())
  //     .then((data) => setCakeDetailForm(data));
  // }, []);

  return (
    <CakeFormWrapper>
      <CakeFormWidth>
        <CakeFormTitle>케이크 픽업 상세페이지</CakeFormTitle>
        <CakeFormInputWrapper>
          <CakeFormInputTitle>글 제목</CakeFormInputTitle>
          <CakeFormInputTitleDetailForm required name="cakeinputtitle">
            {title}
          </CakeFormInputTitleDetailForm>
          <CakeFormName>이름</CakeFormName>
          <CakeFormNameDetailForm required name="name">
            {customer_name}
          </CakeFormNameDetailForm>
          <CakeFormPhoneNumber>폰번호</CakeFormPhoneNumber>
          <CakeFormPhoneNumberDetailForm required name="phonenumber">
            {contact}
          </CakeFormPhoneNumberDetailForm>
          <CakeFormPickUpDate>픽업날짜</CakeFormPickUpDate>
          <CakeFormPickUpDateDetailForm
            id="cakedate"
            required
            name="cakepickupdate"
          >
            {want_pick_up_date}
          </CakeFormPickUpDateDetailForm>
          <CakeFormCakeName>케이크이름 및 수량</CakeFormCakeName>

          <CakeFormCakeNameWrap>
            <CakeFormCakeNameDetailForm required name="cakename">
              {product_name}
            </CakeFormCakeNameDetailForm>

            <CakeFormOrderCountDetailForm name="ordercount">
              {count}개
            </CakeFormOrderCountDetailForm>
          </CakeFormCakeNameWrap>

          <CakeFormRemark>비고란</CakeFormRemark>
          <CakeFormRemarkDetailForm required name="remark">
            {additional_explanation}
          </CakeFormRemarkDetailForm>
        </CakeFormInputWrapper>
        <CakeFormBtnWrap>
          <CakeFormBtn
            onClick={() => {
              navigate("/formlist");
            }}
          >
            목록으로
          </CakeFormBtn>
          <CakeFormBtn>주문확인</CakeFormBtn>
          <CakeFormUpdateBtn
            onClick={() => {
              if (status === "not_confirmed") {
                navigate(`/formdetail/${id}/edit`);
              } else {
                alert("수정이 불가합니다.");
              }
            }}
          >
            수정
          </CakeFormUpdateBtn>
          <CakeFormDeleteBtn
            onClick={() => {
              if (status === "not_confirmed") {
                fetch(`http://15.164.163.31:8001/orders/${id}`, {
                  method: "DELETE",
                  headers: { Authorization: `Bearer ${USER_TOKEN}` },
                });
              } else {
                alert("삭제가 불가합니다.");
              }
            }}
          >
            삭제
          </CakeFormDeleteBtn>
        </CakeFormBtnWrap>
      </CakeFormWidth>
    </CakeFormWrapper>
  );
};

export default CakeFormDetail;
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
const CakeFormNameDetailForm = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-style: none;
  border-bottom: 1px solid #f1e6d1;
  font-size: 17px;
  &:focus {
    outline: none;
  }
`;

const CakeFormInputTitle = styled(CakeFormName)``;
const CakeFormInputTitleDetailForm = styled(CakeFormNameDetailForm)``;
const CakeFormPhoneNumber = styled(CakeFormName)``;
const CakeFormPhoneNumberDetailForm = styled(CakeFormNameDetailForm)``;
const CakeFormPickUpDate = styled(CakeFormName)``;
const CakeFormPickUpDateDetailForm = styled(CakeFormNameDetailForm)``;
const CakeFormCakeName = styled(CakeFormName)``;
const CakeFormCakeNameDetailForm = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-style: none;

  font-size: 17px;
  &:focus {
    outline: none;
  }
`;
const CakeFormCakeNameWrap = styled.div`
  display: flex;
  width: 100%;
  /* justify-content: ; */
  border-bottom: 1px solid #f1e6d1;
`;
const CakeFormOrderCountDetailForm = styled(CakeFormNameDetailForm)`
  margin-left: 20px;
  border-style: none;
  /* font-size: 0.9em; */
  /* margin-left: 30px; */
  /* widths: 100%; */
`;
const CakeFormRemark = styled(CakeFormName)`
  grid-row: 6/8;
`;
const CakeFormRemarkDetailForm = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
const CakeFormBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CakeFormBtn = styled.button`
  border-style: none;
  margin-top: 100px;
  margin-left: 10px;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #ecc987;
  color: #331211;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  cursor: pointer;
`;

const CakeFormUpdateBtn = styled.button`
  border-style: none;
  margin-top: 100px;
  margin-left: 10px;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #ecc987;
  color: #331211;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  cursor: pointer;
`;

const CakeFormDeleteBtn = styled(CakeFormUpdateBtn)`
  cursor: pointer;
`;
