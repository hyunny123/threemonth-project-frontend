import React from "react";
import { useNavigate } from "react-router";
import { USER_TOKEN } from "../../../../config";
import styled from "styled-components";

const CafeFormDetail = ({ detailFormData }) => {
  const {
    additional_explanation,
    cafeorders,
    contact,
    customer_name,
    id,
    status,
    title,
    is_staff,
  } = detailFormData;

  const {
    cafe_location,
    cafe_owner_name,
    cafename,
    corporate_registration_num,
    product_explanation,
  } = cafeorders;

  const navigate = useNavigate();

  return (
    <CafeFormWrapper>
      <CafeFormWidth>
        <CafeFormTitle>카페 납품 상세페이지</CafeFormTitle>
        <CafeFormDetailFormWrapper>
          <CafeFormInputTitle>글 제목</CafeFormInputTitle>
          <CafeFormInputTitleDetailForm name="cafeinputtitle" required>
            {title}
          </CafeFormInputTitleDetailForm>
          <CafeFormCafeName>카페 이름</CafeFormCafeName>
          <CafeFormCafeNameDetailForm name="cafename" required>
            {cafename}
          </CafeFormCafeNameDetailForm>
          <CafeFormBusinessNumber>사업자 번호</CafeFormBusinessNumber>
          <CafeFormBusinessNumberDetailForm name="businessnumber" required>
            {corporate_registration_num}
          </CafeFormBusinessNumberDetailForm>
          <CafeFormCEOName>대표 이름</CafeFormCEOName>
          <CafeFormCEONameDetailForm name="ceoname" required>
            {cafe_owner_name}
          </CafeFormCEONameDetailForm>
          <CafeFormManagerName>담당자 이름</CafeFormManagerName>
          <CafeFormManagerNameDetailForm name="managername" required>
            {customer_name}
          </CafeFormManagerNameDetailForm>
          <CafeFormContact>카페 전화번호</CafeFormContact>
          <CafeFormContactDetailForm name="contact" required>
            {contact}
          </CafeFormContactDetailForm>
          <CafeFormCafeAddress>주소</CafeFormCafeAddress>
          <CafeFormCafeAddressDetailForm name="cafeaddress" required>
            {cafe_location}
          </CafeFormCafeAddressDetailForm>
          <CafeFormDescription>원하는 제품과 수량</CafeFormDescription>

          <CafeFormDescriptionDetailForm name="description" required>
            {product_explanation}
          </CafeFormDescriptionDetailForm>

          <CafeFormRemark>기타사항</CafeFormRemark>
          <CafeFormRemarkDetailForm name="remark" required>
            {additional_explanation}
          </CafeFormRemarkDetailForm>
        </CafeFormDetailFormWrapper>
        <CafeFormBtnWrap>
          <CafeFormBtn
            onClick={() => {
              navigate("/formlist");
            }}
          >
            목록으로
          </CafeFormBtn>

          <CafeFormUpdateBtn
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
          </CafeFormUpdateBtn>
          <CafeFormDeleteBtn
            onClick={() => {
              if (status === "not_confirmed") {
                if (window.confirm("삭제하시겠습니까?")) {
                  fetch(`http://15.164.163.31:8001/orders/${id}`, {
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
                    fetch(`http://15.164.163.31:8001/orders/${id}`, {
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
          </CafeFormDeleteBtn>
        </CafeFormBtnWrap>
      </CafeFormWidth>
    </CafeFormWrapper>
  );
};

export default CafeFormDetail;

const CafeFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  margin: 100px 0;
  color: ${({ theme }) => theme.fontColor};
  /* font-size: 17px; */
`;
const CafeFormWidth = styled.div`
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
const CafeFormTitle = styled.p`
  font-size: 30px;
`;
const CafeFormDetailFormWrapper = styled.form`
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
    grid-template-rows: repeat(18, minmax(100px, auto));
    grid-template-columns: 0.7fr;
  }
`;
const CafeFormCafeName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  /* font-size: 17px; */
  @media (max-width: 768px) {
    font-size: 15px;
  }
  border: 1px solid tomato;
`;
const CafeFormCafeNameDetailForm = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-size: 17px;
  border: 1px solid green;
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const CafeFormInputTitle = styled(CafeFormCafeName)``;
const CafeFormInputTitleDetailForm = styled(CafeFormCafeNameDetailForm)``;

const CafeFormBusinessNumber = styled(CafeFormCafeName)``;
const CafeFormBusinessNumberDetailForm = styled(CafeFormCafeNameDetailForm)``;
const CafeFormCEOName = styled(CafeFormCafeName)``;
const CafeFormCEONameDetailForm = styled(CafeFormCafeNameDetailForm)``;
const CafeFormManagerName = styled(CafeFormCafeName)``;
const CafeFormManagerNameDetailForm = styled(CafeFormCafeNameDetailForm)``;
const CafeFormContact = styled(CafeFormCafeName)``;
const CafeFormContactDetailForm = styled(CafeFormCafeNameDetailForm)``;
const CafeFormCafeAddress = styled(CafeFormCafeName)``;
const CafeFormCafeAddressDetailForm = styled(CafeFormCafeNameDetailForm)``;
const CafeFormDescription = styled(CafeFormCafeName)`
  /* text-align: center; */
  grid-row: 8/9;
`;
const CafeFormDescriptionDetailForm = styled(CafeFormCafeNameDetailForm)`
  /* display: flex;
  justify-content: flex-start;
  align-items: center; */
  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-size: 17px;
  line-height: 1.5;
  resize: none;
  grid-row: 8/9;
  border: 1px solid blue;
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
const CafeFormRemark = styled(CafeFormCafeName)`
  grid-row: 9/10;
`;
const CafeFormRemarkDetailForm = styled(CafeFormDescriptionDetailForm)`
  grid-row: 9/10;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const CafeFormBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CafeFormBtn = styled.button`
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
const CafeFormUpdateBtn = styled.button`
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

const CafeFormDeleteBtn = styled(CafeFormUpdateBtn)`
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
