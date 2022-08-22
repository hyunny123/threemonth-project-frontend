import React from "react";
import { useNavigate } from "react-router";
import { USER_TOKEN, API } from "../../../../config";
import styled from "styled-components";
import axios from "axios";

const PackageFormDetail = ({ detailFormData }) => {
  const {
    additional_explanation,
    contact,
    customer_name,
    id,
    packageorders,
    status,
    title,
    is_staff,
  } = detailFormData;

  const { delivery_date, delivery_location, is_packaging, purpose } =
    packageorders;

  const navigate = useNavigate();
  const { DETAIL_FORM } = API;

  return (
    <PackageFormWrapper>
      <PackageFormWidth>
        <PackageFormTitle>기프트박스 신청서</PackageFormTitle>
        <PackageFormInputWrapper>
          <PackageFormInputTitle>글 제목</PackageFormInputTitle>
          <PackageFormTitleDetailForm required name="title">
            {title}
          </PackageFormTitleDetailForm>
          <PackageFormPurpose>프로모션 목적</PackageFormPurpose>
          <PackageFormPurposeDetailForm required name="purpose">
            {purpose}
          </PackageFormPurposeDetailForm>
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
          </PackageFormUpdateBtn>
          <PackageFormDeleteBtn
            onClick={() => {
              if (status === "not_confirmed") {
                if (window.confirm("삭제하시겠습니까?")) {
                  axios
                    .delete(`${DETAIL_FORM}${id}`, {
                      headers: {
                        Authorization: `Bearer ${USER_TOKEN}`,
                        "Content-Type": "application/json;charset=UTF-8",
                      },
                    })
                    .then((res) => {
                      if (status === 204) {
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
                    axios(`${DETAIL_FORM}${id}`, {
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
  color: ${({ theme }) => theme.fontColor};
`;
const PackageFormWidth = styled.div`
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
const PackageFormTitle = styled.p`
  font-size: 30px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
const PackageFormInputWrapper = styled.form`
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(9, minmax(100px, auto));
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
    grid-template-rows: repeat(18, minmax(50px, auto));
    grid-template-columns: 0.9fr;
  }
`;

const PackageFormName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
const PackageFormNameDetailForm = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
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

const PackageFormInputTitle = styled(PackageFormName)``;
const PackageFormTitleDetailForm = styled(PackageFormNameDetailForm)``;

const PackageFormPurpose = styled(PackageFormName)``;
const PackageFormPurposeDetailForm = styled(PackageFormNameDetailForm)``;

const PackageFormPhoneNumber = styled(PackageFormName)``;
const PackageFormPhoneNumberDetailForm = styled(PackageFormNameDetailForm)``;

const PackageFormDate = styled(PackageFormName)``;
const PackageFormDateDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
`;
const PackageFormDescriptionDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PackageFormDateDetailForm = styled(PackageFormNameDetailForm)`
  border: none;
`;

const PackageFormAddress = styled(PackageFormName)``;
const PackageFormAddressDetailForm = styled(PackageFormNameDetailForm)``;

const PackageFormDescription = styled(PackageFormName)``;
const PackageFormDescriptionDetailForm = styled(PackageFormNameDetailForm)``;

const PackageFormDescriptionWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 180px;
`;
const PackageFormDescriptionInput = styled.input`
  margin-right: 10px;
`;

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
  @media (max-width: 768px) {
    font-size: 15px;
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
const PackageFormUpdateBtn = styled.button`
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

const PackageFormDeleteBtn = styled(PackageFormUpdateBtn)`
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
