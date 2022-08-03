import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Loading from "../../../components/Loading";
import { USER_TOKEN } from "../../../config";

const PackageInputForm = () => {
  const navigate = useNavigate();
  const [selectList, setSelectList] = useState([
    {
      id: 0,
      product_name: "",
      buying: false,
    },
  ]);
  const [packageForm, setPackageForm] = useState({
    title: "",
    customer_name: "",
    contact: "",
    purpose: "",
    delivery_date: "",
    delivery_location: "",
    orderedproducts: [],
    is_packaging: "",
    additional_explanation: "",
  });

  const {
    title,
    customer_name,
    contact,
    delivery_date,
    delivery_location,
    purpose,
    is_packaging,
    additional_explanation,
  } = packageForm;
  let { orderedproducts } = packageForm;

  useEffect(() => {
    fetch("http://15.164.163.31:8001/products?category=bread")
      .then((res) => res.json())
      .then((data) => [...data].filter((data) => data.id !== 14))
      .then((data) => setSelectList(data));
  }, []);

  const packageFormHandleInput = (e) => {
    const { name, value } = e.target;
    setPackageForm({
      ...packageForm,
      [name]: value,
    });
  };
  const inputConfirmCheck =
    "컨펌 시작 전까지만 수정이 가능합니다. 신청 하시겠습니까?";
  const minDate = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  )
    .toISOString()
    .slice(0, 10);

  const countDays =
    (new Date(delivery_date).getTime() - new Date(minDate).getTime()) /
    (1000 * 3600 * 24);

  const handleCheckbox = (value, id) => {
    const productIdx = selectList.findIndex((list) => list.id === id);
    const newArr = [...selectList];
    newArr[productIdx].buying = value;
    setSelectList(newArr);
  };
  orderedproducts = [...selectList]
    .filter((list) => list.buying === true)
    .map((product) => {
      return { product_id: product.id, buying: product.buying };
    });
  const checkValueData =
    title &&
    customer_name &&
    contact &&
    purpose &&
    delivery_date &&
    delivery_location &&
    orderedproducts &&
    is_packaging &&
    additional_explanation;

  const packageFormRequest = (e) => {
    e.preventDefault();
    if (checkValueData) {
      if (countDays > 2) {
        if (orderedproducts.length > 1) {
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
                delivery_date,
                purpose,
                delivery_location,
                orderedproducts,
                is_packaging,
                additional_explanation,
                type: "package",
              }),
            }).then((res) => {
              if (res.status === 201) {
                navigate("/formlist");
              } else {
                alert("다시 시도해 주세요. 문제가 지속될 경우 연락바랍니다.");
              }
            });
          }
        } else {
          alert("최소 2개 이상 선택해 주세요.");
        }
      } else {
        alert("신청일로부터 최소 3일 후 날짜부터 신청이 가능합니다.");
      }
    } else {
      alert("빈칸을 확인해 주세요");
    }
  };

  if (selectList[0].id === 0) {
    return <Loading />;
  }

  return (
    <PackageFormWrapper>
      <PackageFormWidth>
        <PackageFormTitle>기프트박스 신청서</PackageFormTitle>
        <PackageFormInputWrapper>
          <PackageFormInputTitle>글 제목</PackageFormInputTitle>
          <PackageFormTitleInput
            placeholder="글 제목을 입력해 주세요"
            required
            name="title"
            onChange={packageFormHandleInput}
          />
          <PackageFormPurpose>프로모션 목적</PackageFormPurpose>
          <PackageFormPurposeInput
            placeholder="ex) 기업 행사, 결혼 답례품 등"
            required
            name="purpose"
            onChange={packageFormHandleInput}
          />
          <PackageFormName>이름</PackageFormName>
          <PackageFormNameInput
            placeholder="이름을 입력해 주세요"
            required
            name="customer_name"
            onChange={packageFormHandleInput}
          />
          <PackageFormPhoneNumber>폰번호</PackageFormPhoneNumber>
          <PackageFormPhoneNumberInput
            placeholder="전화번호를 입력해 주세요"
            required
            name="contact"
            onChange={packageFormHandleInput}
          />
          <PackageFormDate>프로모션 날짜</PackageFormDate>
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
          <PackageFormDescriptionDiv>
            {selectList.map((x, idx) => (
              <PackageFormDescriptionWrap key={idx}>
                <PackageFormDescriptionInput
                  type="checkbox"
                  name="orderedproducts"
                  onClick={(e) => handleCheckbox(e.target.checked, x.id)}
                />
                <p>{x.product_name}</p>
              </PackageFormDescriptionWrap>
            ))}
            <PackageFormDescriptionP>
              * 선택하신 상품은 한 개의 수량이 입력됩니다. 2개 이상을 원하실
              경우 기타사항에 작성해 주세요. 상품 종류는 최소 2개 이상 선택해
              주세요.
            </PackageFormDescriptionP>
          </PackageFormDescriptionDiv>
          <PackageFormIsPackage>패키지 유무</PackageFormIsPackage>
          <PackageFormIsPackageInput
            placeholder="패키지 유무를 입력해 주세요. 종이 포장으로 선택할 시 별도의 포장 요금이 추가되지 않습니다."
            required
            name="is_packaging"
            onChange={packageFormHandleInput}
          />
          <PackageFormRemark>기타사항</PackageFormRemark>
          <PackageFormRemarkInput
            placeholder="남겨주실 말을 입력해 주세요"
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
  color: ${({ theme }) => theme.fontColor};
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
  grid-template-rows: repeat(9, 100px);
  grid-template-columns: 1fr 6fr;
  box-sizing: border-box;
  margin-top: 50px;
  width: 100%;
  color: ${({ theme }) => theme.fontColor};
  border: 7px solid ${({ theme }) => theme.bgColor};
`;

const PackageFormName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
`;
const PackageFormNameInput = styled.input`
  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-size: 17px;
  font-family: ${({ theme }) => theme.fontFamily};
  &:focus {
    outline: none;
  }
`;

const PackageFormInputTitle = styled(PackageFormName)``;
const PackageFormTitleInput = styled(PackageFormNameInput)``;

const PackageFormPurpose = styled(PackageFormName)``;
const PackageFormPurposeInput = styled(PackageFormNameInput)``;
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
const PackageFormDescriptionDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
`;

const PackageFormDescriptionWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 180px;
`;
const PackageFormDescriptionInput = styled.input`
  margin-right: 10px;
`;

const PackageFormDescriptionP = styled.p`
  font-size: 13px;
  color: red;
`;

const PackageFormIsPackage = styled(PackageFormName)``;
const PackageFormIsPackageInput = styled(PackageFormNameInput)``;

const PackageFormRemark = styled(PackageFormName)``;
const PackageFormRemarkInput = styled.textarea`
  border-style: none;
  border-bottom: ${({ theme }) => theme.bgColor};
  font-size: 17px;
  resize: none;
  font-family: ${({ theme }) => theme.fontFamily};
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
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.fontColor};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
`;
