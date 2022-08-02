import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import styled from "styled-components";
import Loading from "../../../components/Loading";
import { USER_TOKEN } from "../../../config";

const CafeFormEdit = ({ editData }) => {
  const navigate = useNavigate();
  const { formId } = useParams();
  const [cafeEditList, setCafeEditList] = useState(editData);

  const [editPruductList, setEditProductList] = useState([
    {
      id: 0,
      product_name: "",
    },
  ]);

  useEffect(() => {
    fetch(
      "http://15.164.163.31:8001/products?fields=product_name,id&category=bread"
    )
      .then((res) => res.json())
      .then((data) => [...data].filter((x) => x.id !== 14))
      .then((data) => setEditProductList(data));
  }, []);

  const {
    title,
    cafeorders,
    additional_explanation,
    product_explanation,
    customer_name,
  } = cafeEditList;

  const [cafeOrders, setCafeOrders] = useState(cafeorders);

  const cafeFormHandleInput = (e) => {
    const { name, value } = e.target;
    setCafeEditList({
      ...cafeEditList,
      [name]: value,
    });
  };
  const cafeFormOrdersHandleInput = (e) => {
    const { name, value } = e.target;
    setCafeOrders({
      ...cafeOrders,
      [name]: value,
    });
  };
  const cafeFormRequest = (e) => {
    const {
      title,
      additional_explanation,
      type,
      contact,
      product_explanation,
      customer_name,
    } = cafeEditList;
    const {
      cafename,
      cafe_owner_name,
      corporate_registration_num,
      cafe_location,
    } = cafeOrders;

    e.preventDefault();
    if (window.confirm("수정하시겠습니까?")) {
      fetch(`http://15.164.163.31:8001/orders/${formId}`, {
        method: "put",
        headers: {
          Authorization: `Bearer ${USER_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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
  if (cafeEditList.title === "") {
    return <Loading />;
  }
  return (
    <CafeFormWrapper>
      <CafeFormWidth>
        <CafeFormTitle>납품 제휴 신청내역 수정</CafeFormTitle>
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
            onChange={cafeFormOrdersHandleInput}
            value={cafeOrders.cafename}
            name="cafename"
            required
          />
          <CafeFormBusinessNumber>사업자 번호</CafeFormBusinessNumber>
          <CafeFormBusinessNumberInput
            onChange={cafeFormHandleInput}
            value={cafeOrders.corporate_registration_num}
            name="corporate_registration_num"
            required
          />
          <CafeFormCEOName>대표 이름</CafeFormCEOName>
          <CafeFormCEONameInput
            onChange={cafeFormOrdersHandleInput}
            value={cafeOrders.cafe_owner_name}
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
            onChange={cafeFormOrdersHandleInput}
            value={cafeOrders.cafe_location}
            name="cafe_location"
            required
          />
          <CafeFormProductListName>상품 종류</CafeFormProductListName>
          <CafeFormProductListDiv>
            {editPruductList.map((x, idx) => (
              <CafeFormProductList key={idx}>
                {x.product_name}
              </CafeFormProductList>
            ))}
            <CafeFormProductListNotion>
              원하시는 상품을 하단에 적어주세요
            </CafeFormProductListNotion>
          </CafeFormProductListDiv>
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
`;
const CafeFormInputWrapper = styled.form`
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(11, 100px);
  grid-template-columns: 1fr 5fr;
  box-sizing: border-box;
  margin-top: 50px;
  width: 100%;
  color: ${({ theme }) => theme.fontColor};
  border: 7px solid ${({ theme }) => theme.bgColor};
`;
const CafeFormCafeName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-size: 17px;
`;
const CafeFormCafeNameInput = styled.input`
  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
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

const CafeFormProductListName = styled(CafeFormCafeName)``;
const CafeFormProductListDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
`;
const CafeFormProductList = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
`;
const CafeFormProductListNotion = styled.p`
  font-size: 14px;
  color: red;
`;

const CafeFormDescription = styled(CafeFormCafeName)`
  text-align: center;
  grid-row: 8/10;
`;
const CafeFormDescriptionInput = styled.textarea`
  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-size: 17px;
  resize: none;
  grid-row: 8/10;
  font-family: "GangwonEdu_OTFBoldA";
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: "GangwonEdu_OTFBoldA";
  }
`;
const CafeFormRemark = styled(CafeFormCafeName)`
  grid-row: 10/12;
`;
const CafeFormRemarkInput = styled(CafeFormDescriptionInput)`
  grid-row: 10/12;
`;

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
  font-family: "GangwonEdu_OTFBoldA";
`;
