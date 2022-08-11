import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import styled from "styled-components";
import Loading from "../../../components/Loading";
import { USER_TOKEN, API } from "../../../config";

const CakeFormEdit = ({ editData }) => {
  const { is_staff } = editData;
  const navigate = useNavigate();
  const { formId } = useParams();
  const [cakeEditForm, setCakeEditForm] = useState(editData);
  const { FORM_EDIT_PATCH } = API;

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
  const { want_pick_up_date } = orderDetail;
  const minDate = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  )
    .toISOString()
    .slice(0, 10);
  const countDays =
    (new Date(want_pick_up_date).getTime() - new Date(minDate).getTime()) /
    (1000 * 3600 * 24);

  const cakeFormRequest = (e) => {
    const { title, customer_name, type, additional_explanation, contact } =
      cakeEditForm;
    const { count, want_pick_up_date, product_id } = orderDetail;
    const checkValue =
      title &&
      customer_name &&
      type &&
      additional_explanation &&
      contact &&
      count &&
      want_pick_up_date &&
      product_id;
    e.preventDefault();
    if (checkValue) {
      if (countDays > 1) {
        if (window.confirm("수정하시겠습니까?")) {
          fetch(`${FORM_EDIT_PATCH}/${formId}`, {
            method: "PATCH",
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
              navigate(`/formdetail/${formId}`, {
                state: { checkValid: true },
              });
            } else {
              alert("다시 시도해 주세요");
              navigate(`/formdetail/${formId}/edit`, {
                state: { checkValid: true },
              });
            }
          });
        }
      } else {
        alert("신청일로부터 최소 2일 후 날짜부터 신청이 가능합니다.");
      }
    } else {
      alert("빈칸을 확인해 주세요");
    }
  };
  const cakeFormStaffRequest = (e) => {
    const { title, customer_name, type, additional_explanation, contact } =
      cakeEditForm;
    const { count, want_pick_up_date, product_id } = orderDetail;
    const checkValue =
      title &&
      customer_name &&
      type &&
      additional_explanation &&
      contact &&
      count &&
      want_pick_up_date &&
      product_id;
    e.preventDefault();
    if (checkValue) {
      if (window.confirm("수정하시겠습니까?")) {
        fetch(`${FORM_EDIT_PATCH}/${formId}`, {
          method: "PATCH",
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
            status: "confirmed",
          }),
        }).then((res) => {
          if (res.status === 200) {
            navigate(`/formdetail/${formId}`, {
              state: { checkValid: true },
            });
          } else {
            alert("다시 시도해 주세요");
            navigate(`/formdetail/${formId}/edit`);
          }
        });
      }
    } else {
      alert("빈칸을 확인해 주세요");
    }
  };
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
              value={orderDetail.want_pick_up_date}
              required
              name="want_pick_up_date"
              min={minDate}
            />
          </CakeFormPickUpDateDiv>
          <CakeFormCakeName>
            케이크이름 <br />및 수량
          </CakeFormCakeName>
          <SelectCake>
            <CakeFormCakeNameInput
              type="radio"
              onChange={cakeFormDetailHandleInput}
              value={orderDetail.product_id}
              required
              checked
              name="product_id"
            />
            <SelectLabel>{cakeorders.product_name}</SelectLabel>
            <CakeFormOrderCountInput
              placeholder="수량을 입력하세요."
              onChange={cakeFormDetailHandleInput}
              value={orderDetail.count}
              type="number"
              max="4"
              min="0"
              name="count"
            />
          </SelectCake>
          <CakeFormRemark>기타사항</CakeFormRemark>
          <CakeFormRemarkInput
            placeholder="남겨주실 말을 적어주세요."
            onChange={cakeFormHandleInput}
            required
            value={additional_explanation}
            name="additional_explanation"
          />
        </CakeFormInputWrapper>
        <CakeEditFormBtnWrap>
          <CakeFormBtn onClick={cakeFormRequest}>수정하기</CakeFormBtn>
          {is_staff && (
            <CakeEditFormBtnStaffOnly>
              <CakeFormBtn onClick={cakeFormStaffRequest}>
                컨펌 완료!
              </CakeFormBtn>
              <CakeEditFormBtnNotion>
                컨펌 완료 버튼은 더 이상 <br /> 수정 사항이 없을 경우에만 눌러
                주세요!
              </CakeEditFormBtnNotion>
            </CakeEditFormBtnStaffOnly>
          )}
        </CakeEditFormBtnWrap>
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
  @media (max-width: 768px) {
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
  @media (max-width: 600px) {
    grid-template-rows: repeat(12, 50px);
    grid-template-columns: 0.9fr;
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
const CakeFormNameInput = styled.input.attrs((props) => ({
  type: "text",
  maxLength: 30,
}))`
  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-size: 17px;
  font-family: ${({ theme }) => theme.fontFamily};
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const CakeFormInputTitle = styled(CakeFormName)``;
const CakeFormInputTitleInput = styled(CakeFormNameInput).attrs((props) => ({
  type: "text",
  maxLength: 49,
}))``;
const CakeFormPhoneNumber = styled(CakeFormName)``;
const CakeFormPhoneNumberInput = styled(CakeFormNameInput).attrs((props) => ({
  type: "text",
  maxLength: 49,
}))``;
const CakeFormPickUpDate = styled(CakeFormName)``;
const CakeFormPickUpDateDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
`;
const CakeFormPickUpDateInput = styled(CakeFormNameInput).attrs((props) => ({
  type: "date",
}))`
  border: none;
  width: 200px;
`;
const CakeFormCakeName = styled(CakeFormName)`
  text-align: center;
`;
const CakeFormCakeNameInput = styled(CakeFormNameInput).attrs((props) => ({
  type: "radio",
}))`
  margin-right: 20px;
`;
const SelectLabel = styled.label`
  margin-right: 20px;
  @media (max-width: 490px) {
    font-size: 13px;
  }
`;
const CakeFormOrderCountInput = styled(CakeFormNameInput).attrs((props) => ({
  type: "number",
}))`
  font-size: 0.9em;
  margin-left: 20px;
  width: 150px;
`;
const CakeFormRemark = styled(CakeFormName)``;
const CakeFormRemarkInput = styled.textarea.attrs((props) => ({
  type: "text",
  maxLength: 299,
}))`
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
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

const SelectCake = styled.div`
  display: flex;
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
  cursor: pointer;
  @media (max-width: 600px) {
    width: 150px;
    height: 40px;
    font-size: 15px;
  }
`;

const CakeEditFormBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const CakeEditFormBtnStaffOnly = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CakeEditFormBtnNotion = styled.p`
  margin-top: 10px;
  font-size: 17px;
  color: red;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
