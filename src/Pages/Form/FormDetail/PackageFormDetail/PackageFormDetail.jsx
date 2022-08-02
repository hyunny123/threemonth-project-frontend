import React from "react";
import { useNavigate } from "react-router";
import { USER_TOKEN } from "../../../../config";
import styled from "styled-components";

const PackageFormDetail = ({ detailFormData }) => {
  console.log(detailFormData);
  const {
    additional_explanation,
    contact,
    created_at,
    customer_name,
    id,
    packageorders,
    status,
    title,
  } = detailFormData;

  const { delivery_date, delivery_location, is_packaging, orderedproducts } =
    packageorders;

  const { buying, product_id, product_name } = orderedproducts;

  const navigate = useNavigate();

  return (
    <PackageFormWrapper>
      <PackageFormWidth>
        <PackageFormTitle>기프트박스 신청서</PackageFormTitle>
        <PackageFormInputWrapper>
          <PackageFormName>이름</PackageFormName>
          <PackageFormNameDetailForm required name="name">
            {customer_name}
          </PackageFormNameDetailForm>
          <PackageFormPhoneNumber>폰번호</PackageFormPhoneNumber>
          <PackageFormPhoneNumberDetailForm required name="phonenumber">
            {contact}
          </PackageFormPhoneNumberDetailForm>
          <PackageFormDate>프로모션 날짜</PackageFormDate>
          <PackageFormDateDiv>
            <PackageFormDateDetailForm required name="date">
              {delivery_date}
            </PackageFormDateDetailForm>
          </PackageFormDateDiv>
          <PackageFormAddress>주소</PackageFormAddress>
          <PackageFormAddressDetailForm required name="address">
            {delivery_location}
          </PackageFormAddressDetailForm>
          <PackageFormDescription>구성품</PackageFormDescription>
          <PackageFormDescriptionDetailForm required name="contents">
            <PackageFormDescriptionDiv>
              {packageorders.orderedproducts
                .filter((x) => x.product_id !== 14)
                .map((x, idx) => (
                  <PackageFormDescriptionWrap key={idx}>
                    <PackageFormDescriptionInput
                      type="checkbox"
                      name="orderedproducts"
                      checked={x.buying}
                      readOnly
                    />
                    <p>{x.product_name}</p>
                  </PackageFormDescriptionWrap>
                ))}
            </PackageFormDescriptionDiv>
          </PackageFormDescriptionDetailForm>
          <PackageFormIsPackage>패키지 유무</PackageFormIsPackage>
          <PackageFormIsPackageDetailForm name="ispackage" required>
            {is_packaging}
          </PackageFormIsPackageDetailForm>
          <PackageFormRemark>기타사항</PackageFormRemark>
          <PackageFormRemarkDetailForm name="remark" required>
            {additional_explanation}
          </PackageFormRemarkDetailForm>
        </PackageFormInputWrapper>

        <PackageFormBtnWrap>
          <PackageFormBtn
            onClick={() => {
              navigate("/formlist");
            }}
          >
            목록으로
          </PackageFormBtn>
          <PackageFormUpdateBtn
            onClick={() => {
              if (status === "not_confirmed") {
                navigate(`/formdetail/${id}/edit`);
              } else {
                alert("수정이 불가합니다.");
              }
            }}
          >
            수정
          </PackageFormUpdateBtn>
          <PackageFormDeleteBtn
            onClick={() => {
              if (window.confirm("삭제 하시겠습니까?") === true) {
                if (status === "not_confirmed") {
                  fetch(`http://15.164.163.31:8001/orders/${id}`, {
                    method: "delete",
                    headers: {
                      Authorization: `Bearer ${USER_TOKEN}`,
                      "Content-Type": "application/json;charset=UTF-8",
                    },
                  }).then((res) => {
                    if (res.status === 204) {
                      navigate("/formlist");
                    }
                  });
                } else {
                  alert("삭제가 불가합니다.");
                }
              } else {
                alert("삭제를 취소하셨습니다.");
              }
            }}
          >
            삭제
          </PackageFormDeleteBtn>
        </PackageFormBtnWrap>
      </PackageFormWidth>
    </PackageFormWrapper>
  );
};

export default PackageFormDetail;

const PackageFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  margin: 100px 0;
  color: #331211;
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
  grid-template-rows: repeat(7, 100px);
  grid-template-columns: 1fr 6fr;
  box-sizing: border-box;
  margin-top: 50px;
  width: 100%;
  color: #331211;
  border: 7px solid #f1e6d1;
`;

const PackageFormName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f1e6d1;
`;
const PackageFormNameDetailForm = styled.div`
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

const PackageFormPhoneNumber = styled(PackageFormName)``;
const PackageFormPhoneNumberDetailForm = styled(PackageFormNameDetailForm)``;

const PackageFormDate = styled(PackageFormName)``;
const PackageFormDateDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.bgColor};
`;
const PackageFormDescriptionDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
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
const PackageFormDateDetailForm = styled(PackageFormNameDetailForm)`
  border: none;
`;

const PackageFormAddress = styled(PackageFormName)``;
const PackageFormAddressDetailForm = styled(PackageFormNameDetailForm)``;

const PackageFormDescription = styled(PackageFormName)``;
const PackageFormDescriptionDetailForm = styled(PackageFormNameDetailForm)``;

const PackageFormIsPackage = styled(PackageFormName)``;
const PackageFormIsPackageDetailForm = styled(PackageFormNameDetailForm)``;

const PackageFormRemark = styled(PackageFormName)``;
const PackageFormRemarkDetailForm = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-style: none;
  border-bottom: 1px solid #f1e6d1;
  font-size: 17px;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const PackageFormBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PackageFormBtn = styled.button`
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
const PackageFormUpdateBtn = styled.button`
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

const PackageFormDeleteBtn = styled(PackageFormUpdateBtn)`
  cursor: pointer;
`;
