import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const CafeFormDetail = () => {
  const [cafeFormDetail, setCafeFormDetail] = useState([]);
  const {
    cafeinputtitle,
    cafename,
    businessnumber,
    ceoname,
    managername,
    cafeaddress,
    description,
    remark,
  } = cafeFormDetail;
  // const params = useParams();

  // useEffect(() => {
  //   fetch(`/data/cafeDetailFormData.json/formdetail/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setCakeDetailForm(data));
  // }, [params.id]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/cafeDetailFormData.json")
      .then((res) => res.json())
      .then((data) => setCafeFormDetail(data));
  }, []);

  return (
    <CafeFormWrapper>
      <CafeFormWidth>
        <CafeFormTitle>카페 납품 상세페이지</CafeFormTitle>
        <CafeFormDetailFormWrapper>
          <CafeFormInputTitle>글 제목</CafeFormInputTitle>
          <CafeFormInputTitleDetailForm name="cafeinputtitle" required>
            {cafeinputtitle}
          </CafeFormInputTitleDetailForm>
          <CafeFormCafeName>카페 이름</CafeFormCafeName>
          <CafeFormCafeNameDetailForm name="cafename" required>
            {cafename}
          </CafeFormCafeNameDetailForm>
          <CafeFormBusinessNumber>사업자 번호</CafeFormBusinessNumber>
          <CafeFormBusinessNumberDetailForm name="businessnumber" required>
            {businessnumber}
          </CafeFormBusinessNumberDetailForm>
          <CafeFormCEOName>대표 이름</CafeFormCEOName>
          <CafeFormCEONameDetailForm name="ceoname" required>
            {ceoname}
          </CafeFormCEONameDetailForm>
          <CafeFormManagerName>담당자 이름</CafeFormManagerName>
          <CafeFormManagerNameDetailForm name="managername" required>
            {managername}
          </CafeFormManagerNameDetailForm>
          <CafeFormCafeAddress>주소</CafeFormCafeAddress>
          <CafeFormCafeAddressDetailForm name="cafeaddress" required>
            {cafeaddress}
          </CafeFormCafeAddressDetailForm>
          <CafeFormDescription>원하는 제품과 수량</CafeFormDescription>

          <CafeFormDescriptionDetailForm name="description" required>
            {description}
          </CafeFormDescriptionDetailForm>

          <CafeFormRemark>비고</CafeFormRemark>
          <CafeFormRemarkDetailForm name="remark" required>
            {remark}
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

          <CafeFormBtn>주문확인</CafeFormBtn>
          <CafeFormUpdateBtn>수정</CafeFormUpdateBtn>
          <CafeFormDeleteBtn>삭제</CafeFormDeleteBtn>
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
  color: #331211;
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
const CafeFormDetailFormWrapper = styled.form`
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(10, 100px);
  grid-template-columns: 1fr 5fr;
  box-sizing: border-box;
  margin-top: 50px;
  width: 100%;
  color: #331211;
  border: 7px solid #f1e6d1;
`;
const CafeFormCafeName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f1e6d1;
  font-size: 17px;
`;
const CafeFormCafeNameDetailForm = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-style: none;
  border-bottom: 1px solid #f1e6d1;
  font-size: 17px;
  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: "GangwonEdu_OTFBoldA";
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
const CafeFormCafeAddress = styled(CafeFormCafeName)``;
const CafeFormCafeAddressDetailForm = styled(CafeFormCafeNameDetailForm)``;
const CafeFormDescription = styled(CafeFormCafeName)`
  text-align: center;
  grid-row: 7/9;
`;
const CafeFormDescriptionDetailForm = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-style: none;
  line-height: 1.5;
  border-bottom: 1px solid #f1e6d1;
  font-size: 17px;
  resize: none;
  grid-row: 7/9;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: "GangwonEdu_OTFBoldA";
  }
`;
const CafeFormRemark = styled(CafeFormCafeName)`
  grid-row: 9/11;
`;
const CafeFormRemarkDetailForm = styled(CafeFormDescriptionDetailForm)`
  grid-row: 9/11;
  line-height: 1.5;
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
  border-radius: 10px;
  font-size: 20px;
  background-color: #ecc987;
  color: #331211;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
`;
const CafeFormUpdateBtn = styled.button`
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
`;

const CafeFormDeleteBtn = styled(CafeFormUpdateBtn)``;
