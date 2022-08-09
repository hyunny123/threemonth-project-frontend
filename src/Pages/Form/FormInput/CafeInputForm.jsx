import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Loading from "../../../components/Loading";
import { USER_TOKEN, API } from "../../../config";

const CafeInputForm = () => {
  const navigate = useNavigate();
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
  const { CAFE_INPUT_GET } = API;
  const [productList, setProductList] = useState([
    {
      id: 0,
      product_name: "",
    },
  ]);
  useEffect(() => {
    fetch(`${CAFE_INPUT_GET}`)
      .then((res) => res.json())
      .then((data) => [...data].filter((x) => x.id !== 14))
      .then((data) => setProductList(data));
  }, [CAFE_INPUT_GET]);

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
    "컨펌 과정을 거치게 될 경우 수정이 불가합니다. 신청하시겠습니까?";
  const cafeFormRequest = (e) => {
    e.preventDefault();
    const checkValueData =
      title &&
      cafename &&
      corporate_registration_num &&
      cafe_owner_name &&
      customer_name &&
      cafe_location &&
      product_explanation &&
      additional_explanation &&
      type &&
      contact;
    const lengthCheck =
      additional_explanation.length < 300 &&
      title.length < 50 &&
      cafename.length < 30 &&
      cafe_owner_name.length < 30 &&
      corporate_registration_num.length < 50 &&
      cafe_location.length < 100;

    if (checkValueData) {
      if (lengthCheck) {
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
            if (res.status === 201) {
              alert("신청이 완료되었습니다.");
              navigate("/formlist");
            } else {
              alert("다시 시도해 주세요. 문제가 지속될 경우 연락바랍니다.");
            }
          });
        }
      } else {
        alert("글자 수를 확인해 주세요.");
      }
    } else {
      alert("빈칸을 확인해 주세요");
    }
  };

  if (productList[0].id === 0) {
    return <Loading />;
  }

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

          <CafeFormProductListName>상품 종류</CafeFormProductListName>
          <CafeFormProductListWrap>
            {productList.map((x, idx) => (
              <CafeFormProductList key={idx}>
                {x.product_name}
              </CafeFormProductList>
            ))}
            <CafeFormProductListNotion>
              원하시는 상품을 하단에 적어주세요
            </CafeFormProductListNotion>
          </CafeFormProductListWrap>

          <CafeFormDescription>
            원하는 제품과 <br /> 수량
          </CafeFormDescription>
          <CafeFormDescriptionInput
            onChange={cafeFormHandleInput}
            placeholder="ex) 플레인 휘낭시에 300개 / 월, 앙버터 스콘 100개 / 주"
            name="product_explanation"
            required
          />

          <CafeFormRemark>기타사항</CafeFormRemark>
          <CafeFormRemarkInput
            onChange={cafeFormHandleInput}
            placeholder="남겨주실 말을 입력해 주세요 최대 300자입니다."
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
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
const CafeFormInputWrapper = styled.form`
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(10, minmax(100px, auto));
  grid-template-columns: 1fr 5fr;
  box-sizing: border-box;
  margin-top: 50px;
  width: 100%;
  color: ${({ theme }) => theme.fontColor};
  border: 7px solid ${({ theme }) => theme.bgColor};
  @media (max-width: 600px) {
    grid-template-rows: repeat(20, minmax(50px, auto));
    grid-template-columns: 0.9fr;
  }
`;
const CafeFormCafeName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-size: 17px;
  font-family: ${({ theme }) => theme.fontFamily};
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;
const CafeFormCafeNameInput = styled.input.attrs((props) => ({
  type: "text",
  maxLength: 6,
}))`
  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-size: 17px;
  font-family: ${({ theme }) => theme.fontFamily};
  &:focus {
    outline: none;
  }
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

const CafeFormInputTitle = styled(CafeFormCafeName)``;
const CafeFormInputTitleInput = styled(CafeFormCafeNameInput).attrs(
  (props) => ({
    type: "text",
    maxLength: 50,
  })
)``;

const CafeFormBusinessNumber = styled(CafeFormCafeName)``;
const CafeFormBusinessNumberInput = styled(CafeFormCafeNameInput).attrs(
  (props) => ({
    type: "text",
    maxLength: 50,
  })
)``;
const CafeFormCEOName = styled(CafeFormCafeName)``;
const CafeFormCEONameInput = styled(CafeFormCafeNameInput).attrs((props) => ({
  type: "text",
  maxLength: 6,
}))``;
const CafeFormManagerName = styled(CafeFormCafeName)``;
const CafeFormManagerNameInput = styled(CafeFormCafeNameInput).attrs(
  (props) => ({
    type: "text",
    maxLength: 6,
  })
)``;
const CafeFormContact = styled(CafeFormCafeName)``;
const CafeFormContactInput = styled(CafeFormCafeNameInput).attrs((props) => ({
  type: "text",
  maxLength: 10,
}))``;
const CafeFormCafeAddress = styled(CafeFormCafeName)``;
const CafeFormCafeAddressInput = styled(CafeFormCafeNameInput).attrs(
  (props) => ({
    type: "text",
    maxLength: 100,
  })
)``;
const CafeFormProductListName = styled(CafeFormCafeName)``;
const CafeFormProductListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  box-sizing: border-box;
  padding: 20px 0;
`;
const CafeFormProductList = styled.p`
  width: 150px;
  @media (max-width: 600px) {
    font-size: 14px;
    width: 100px;
  }
`;
const CafeFormProductListNotion = styled.p`
  font-size: 14px;
  color: red;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
const CafeFormDescription = styled(CafeFormCafeName)`
  text-align: center;
`;
const CafeFormDescriptionInput = styled.textarea`
  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-size: 17px;
  resize: none;
  font-family: ${({ theme }) => theme.fontFamily};
  &:focus {
    outline: none;
  }
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;
const CafeFormRemark = styled(CafeFormCafeName)``;
const CafeFormRemarkInput = styled(CafeFormDescriptionInput).attrs((props) => ({
  type: "text",
  maxLength: 300,
}))``;

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
  cursor: pointer;
  @media (max-width: 600px) {
    width: 150px;
    height: 40px;
    font-size: 15px;
  }
`;
