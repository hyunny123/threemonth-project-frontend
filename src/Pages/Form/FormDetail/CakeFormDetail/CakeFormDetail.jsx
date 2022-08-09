import React from "react";
import { useNavigate } from "react-router";
import { USER_TOKEN, API } from "../../../../config";
import styled from "styled-components";

const CakeFormDetail = ({ detailFormData }) => {
  const {
    additional_explanation,
    cakeorders,
    contact,
    customer_name,
    id,
    status,
    title,
    is_staff,
  } = detailFormData;

  const { count, product_name, want_pick_up_date } = cakeorders;

  const navigate = useNavigate();
  const { DETAIL_FORM } = API;

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

          <CakeFormRemark>기타사항</CakeFormRemark>
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
          <CakeFormUpdateBtn
            onClick={() => {
              if (is_staff) {
                navigate(`/formdetail/${id}/edit`, {
                  state: { editCheck: true },
                });
              } else if (status === "not_confirmed") {
                navigate(`/formdetail/${id}/edit`, {
                  state: { editCheck: true },
                });
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
                if (window.confirm("삭제하시겠습니까?")) {
                  fetch(`${DETAIL_FORM}${id}`, {
                    method: "delete",
                    headers: {
                      Authorization: `Bearer ${USER_TOKEN}`,
                      "Content-Type": "application/json;charset=UTF-8",
                    },
                  }).then((res) => {
                    if (res.status === 204) {
                      alert("삭제되었습니다.");
                      navigate("/formlist");
                    }
                  });
                }
              } else {
                if (is_staff) {
                  if (
                    window.confirm("컨펌 완료 상태입니다. 삭제하시겠습니까?")
                  ) {
                    fetch(`${DETAIL_FORM}${id}`, {
                      method: "delete",
                      headers: {
                        Authorization: `Bearer ${USER_TOKEN}`,
                        "Content-Type": "application/json;charset=UTF-8",
                      },
                    }).then((res) => {
                      if (res.status === 204) {
                        alert("삭제되었습니다.");
                        navigate("/formlist");
                      }
                    });
                  }
                } else {
                  alert(
                    "컨펌 완료가 되어 삭제가 불가능합니다. 변경을 원하실 경우 전화나 DM으로 연락 부탁드립니다."
                  );
                }
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
  color: ${({ theme }) => theme.fontColor};
`;
const CakeFormWidth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  @media (max-width: 768px) {
    font-size: 15px;
    width: 90%;
  }
`;
const CakeFormTitle = styled.p`
  font-size: 30px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
const CakeFormInputWrapper = styled.form`
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(6, 100px);
  grid-template-columns: 1fr 6fr;
  box-sizing: border-box;
  margin-top: 50px;
  width: 100%;
  color: ${({ theme }) => theme.fontColor};
  border: 7px solid ${({ theme }) => theme.bgColor};
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 600px) {
    grid-template-rows: repeat(18, minmax(100px, auto));
    grid-template-columns: 0.7fr;
  }
`;
const CakeFormName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-size: 17px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
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
  @media (max-width: 768px) {
    font-size: 15px;
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
  border-bottom: 1px solid #f1e6d1;
`;
const CakeFormOrderCountDetailForm = styled(CakeFormNameDetailForm)`
  margin-left: 20px;
  border-style: none;
`;
const CakeFormRemark = styled(CakeFormName)``;
const CakeFormRemarkDetailForm = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-style: none;
  box-sizing: border-box;
  width: 90%;
  text-align: center;
  text-align: justify;
  resize: none;
  font-size: 17px;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    font-size: 15px;
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
  border-radius: 5px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.fontColor};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  cursor: pointer;
  @media (max-width: 900px) {
    width: 100px;
    height: 50px;
    font-size: 15px;
    margin-top: 50px;
  }
  @media (max-width: 650px) {
    width: 75px;
    height: 45px;
    font-size: 13px;
    margin-top: 50px;
  }
`;

const CakeFormUpdateBtn = styled.button`
  border-style: none;
  margin-top: 100px;
  margin-left: 10px;
  width: 100px;
  height: 50px;
  border-radius: 5px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.fontColor};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  cursor: pointer;
  @media (max-width: 900px) {
    width: 50px;
    height: 50px;
    font-size: 15px;
    margin-top: 50px;
  }
  @media (max-width: 650px) {
    width: 45px;
    height: 45px;
    font-size: 13px;
    margin-top: 50px;
  }
`;

const CakeFormDeleteBtn = styled(CakeFormUpdateBtn)`
  cursor: pointer;
  @media (max-width: 900px) {
    width: 50px;
    height: 50px;
    font-size: 15px;
  }
  @media (max-width: 650px) {
    width: 45px;
    height: 45px;
    font-size: 13px;
  }
`;
