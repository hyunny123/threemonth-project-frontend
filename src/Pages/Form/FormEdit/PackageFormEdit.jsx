import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API, USER_TOKEN } from "../../../config";
import Loading from "../../../components/Loading";

const PackageFormEdit = () => {
  const [packageEditForm, setPackageEditForm] = useState({
    title: "",
    customer_name: "",
    contact: "",
    delivery_date: "",
    delivery_location: "",
    contents: "",
    is_packaging: "",
    additional_explanation: "",
    type: "package",
  });
  const { PACKAGEINPUT } = API;
  const {
    title,
    customer_name,
    contact,
    delivery_date,
    delivery_location,
    contents,
    is_packaging,
    additional_explanation,
    type,
  } = packageEditForm;

  useEffect(() => {
    fetch("/data/formeditdata.json")
      .then((res) => res.json())
      .then((data) => setPackageEditForm(data.result.package));
  }, []);
  const packageEditFormHandleInput = (e) => {
    const { name, value } = e.target;
    setPackageEditForm({
      ...packageEditForm,
      [name]: value,
    });
  };

  const minDate = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  )
    .toISOString()
    .slice(0, 10);
  const packageEditFormRequest = (e) => {
    e.preventDefault();
    if (window.confirm("수정하시겠습니까?")) {
      fetch(`${PACKAGEINPUT}`, {
        method: "post",
        headers: { Authorization: USER_TOKEN },
        body: {
          title,
          customer_name,
          contact,
          delivery_date,
          delivery_location,
          contents,
          is_packaging,
          additional_explanation,
          type,
        },
      }).then((res) => {
        return res;
      });
    }
  };

  if (packageEditForm.title === "") {
    return <Loading />;
  }

  return (
    <PackageEditFormWrapper>
      <PackageEditFormWidth>
        <PackageEditFormTitle>기프트박스 신청내역 수정</PackageEditFormTitle>
        <PackageEditFormInputWrapper>
          <PackageEditFormName>글 제목</PackageEditFormName>
          <PackageEditFormNameInput
            placeholder="제목을 입력해 주세요"
            required
            name="title"
            onChange={packageEditFormHandleInput}
            value={title}
          />
          <PackageEditFormName>이름</PackageEditFormName>
          <PackageEditFormNameInput
            placeholder="이름을 입력해 주세요"
            required
            name="customer_name"
            onChange={packageEditFormHandleInput}
            value={customer_name}
          />
          <PackageEditFormPhoneNumber>전화번호</PackageEditFormPhoneNumber>
          <PackageEditFormPhoneNumberInput
            placeholder="전화번호를 입력해 주세요"
            required
            name="contact"
            onChange={packageEditFormHandleInput}
            value={contact}
          />
          <PackageEditFormDate>날짜</PackageEditFormDate>
          <PackageEditFormDateDiv>
            <PackageEditFormDateInput
              placeholder="날짜를 입력해 주세요"
              required
              type="date"
              name="delivery_date"
              min={minDate.toString()}
              onChange={packageEditFormHandleInput}
              value={delivery_date}
            />
          </PackageEditFormDateDiv>
          <PackageEditFormAddress>주소</PackageEditFormAddress>
          <PackageEditFormAddressInput
            placeholder="주소를 입력해 주세요"
            required
            name="delivery_location"
            onChange={packageEditFormHandleInput}
            value={delivery_location}
          />
          <PackageEditFormDescription>구성품</PackageEditFormDescription>
          <PackageEditFormDescriptionInput
            placeholder="원하시는 구성을 입력해 주세요"
            required
            name="contents"
            onChange={packageEditFormHandleInput}
            value={contents}
          />
          <PackageEditFormIsPackage>포장 유무</PackageEditFormIsPackage>
          <PackageEditFormIsPackageInput
            placeholder="포장 유무를 입력해 주세요"
            required
            name="is_packaging"
            onChange={packageEditFormHandleInput}
            value={is_packaging}
          />
          <PackageEditFormRemark>비고</PackageEditFormRemark>
          <PackageEditFormRemarkInput
            placeholder="비고란을 입력해 주세요"
            name="additional_explanation"
            required
            onChange={packageEditFormHandleInput}
            value={additional_explanation}
          />
        </PackageEditFormInputWrapper>
        <PackageEditFormBtn onClick={packageEditFormRequest}>
          수정하기
        </PackageEditFormBtn>
      </PackageEditFormWidth>
    </PackageEditFormWrapper>
  );
};

export default PackageFormEdit;
const PackageEditFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  margin: 100px 0;
  color: ${({ theme }) => theme.fontColor};
`;
const PackageEditFormWidth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
`;
const PackageEditFormTitle = styled.p`
  font-size: 30px;
`;
const PackageEditFormInputWrapper = styled.form`
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

const PackageEditFormName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
`;
const PackageEditFormNameInput = styled.input`
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

const PackageEditFormPhoneNumber = styled(PackageEditFormName)``;
const PackageEditFormPhoneNumberInput = styled(PackageEditFormNameInput)``;

const PackageEditFormDate = styled(PackageEditFormName)``;
const PackageEditFormDateDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.bgColor};
`;
const PackageEditFormDateInput = styled(PackageEditFormNameInput)`
  border: none;
`;

const PackageEditFormAddress = styled(PackageEditFormName)``;
const PackageEditFormAddressInput = styled(PackageEditFormNameInput)``;

const PackageEditFormDescription = styled(PackageEditFormName)`
  grid-row: 6/8;
`;
const PackageEditFormDescriptionInput = styled.textarea`
  grid-row: 6/8;
  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-size: 17px;
  resize: none;
  font-family: "GangwonEdu_OTFBoldA";
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: "GangwonEdu_OTFBoldA";
  }
`;

const PackageEditFormIsPackage = styled(PackageEditFormName)``;
const PackageEditFormIsPackageInput = styled(PackageEditFormNameInput)``;

const PackageEditFormRemark = styled(PackageEditFormName)`
  grid-row: 9/10;
`;
const PackageEditFormRemarkInput = styled(PackageEditFormDescriptionInput)`
  grid-row: 9/10;
`;

const PackageEditFormBtn = styled.button`
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
