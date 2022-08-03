import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { USER_TOKEN } from "../../../config";
import Loading from "../../../components/Loading";

const CakeInputForm = () => {
  const navigate = useNavigate();
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
    { id: 0, product_name: "", is_active: true },
  ]);
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
    fetch("http://15.164.163.31:8001/products?category=cake")
      .then((res) => res.json())
      .then((data) => [...data].filter((x) => x.is_active === true))
      .then((data) => setCakeList(data));
  }, []);

  const cakeFormHandleInput = (e) => {
    const { name, value } = e.target;
    setCakeForm({
      ...cakeForm,
      [name]: value,
    });
  };

  const minDate = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  )
    .toISOString()
    .slice(0, 10);

  const countDays =
    (new Date(want_pick_up_date).getTime() - new Date(minDate).getTime()) /
    (1000 * 3600 * 24);

  const inputConfirmCheck =
    "컨펌 시작 전까지만 수정이 가능합니다. 케이크 종류는 변경이 불가능하며, 변경 시 신청서를 삭제 후 다시 신청해 주세요. 신청하시겠습니까?";

  const checkValueData =
    title &&
    customer_name &&
    contact &&
    want_pick_up_date &&
    product_id &&
    count &&
    additional_explanation;

  const lengthCheck = additional_explanation.length < 300 && title.length < 50;

  const cakeFormRequest = (e) => {
    e.preventDefault();
    if (checkValueData) {
      if (countDays > 1) {
        if (count > 0) {
          if (lengthCheck) {
            if (window.confirm(`${inputConfirmCheck}`)) {
              fetch("http://15.164.163.31:8001/orders/", {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${USER_TOKEN}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  title,
                  customer_name,
                  contact,
                  want_pick_up_date,
                  product_id,
                  count,
                  additional_explanation,
                  type,
                }),
              }).then((res) => {
                if (res.status === 201) {
                  alert("신청이 완료되었습니다.");
                  navigate("/formlist");
                } else {
                  alert("다시 시도해 주세요. 문제가 지속될 경우 연락바랍니다.");
                }
              });
            }
          } else {
            alert("글자 수를 확인해 주세요");
          }
        } else {
          alert("최소 1개 이상 수량을 입력해 주세요");
        }
      } else {
        alert("신청일로부터 최소 2일 후 날짜부터 신청이 가능합니다.");
      }
    } else {
      alert("빈칸을 확인해 주세요");
    }
  };

  if (cakeList[0].product_name === "") {
    return <Loading />;
  }

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
          <CakeFormPickUpDateDiv>
            <CakeFormPickUpDateInput
              id="cakedate"
              type="date"
              placeholder="픽업 날짜를 선택해 주세요"
              onChange={cakeFormHandleInput}
              required
              name="want_pick_up_date"
              min={minDate}
            />
          </CakeFormPickUpDateDiv>
          <CakeFormCakeName>케이크이름 및 수량</CakeFormCakeName>
          <SelectCake>
            {cakeList.map((list, idx) => (
              <CakeFormCakeNameWrap key={idx}>
                <CakeFormCakeNameInput
                  type="radio"
                  onChange={cakeFormHandleInput}
                  value={list.id}
                  required
                  name="product_id"
                />
                <SelectLabel htmlFor={list.product_name}>
                  {list.product_name}
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
          <CakeFormRemark>기타사항</CakeFormRemark>
          <CakeFormRemarkInput
            placeholder="남겨주실 말을 적어주세요 최대 300자입니다."
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
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
`;
const CakeFormPickUpDateInput = styled(CakeFormNameInput)`
  border: none;
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
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.fontColor};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
`;
