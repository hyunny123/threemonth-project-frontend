import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { USER_TOKEN, API } from "../../../config";
import { useParams } from "react-router";

const PackageFormEdit = ({ editData }) => {
  const { is_staff } = editData;
  const navigate = useNavigate();
  const { formId } = useParams();
  const [packageEditForm, setPackageEditForm] = useState(editData);
  const {
    title,
    customer_name,
    contact,
    packageorders,
    additional_explanation,
  } = packageEditForm;
  const { FORM_EDIT_PATCH } = API;

  const [packageEditDetailForm, setPackageEditDetailForm] =
    useState(packageorders);
  const { delivery_date, is_packaging, delivery_location, purpose } =
    packageEditDetailForm;
  let { orderedproducts } = packageEditDetailForm;

  const [updateList, setUpdateList] = useState(orderedproducts);

  const packageEditFormHandleInput = (e) => {
    const { name, value } = e.target;
    setPackageEditForm({
      ...packageEditForm,
      [name]: value,
    });
  };
  const packageEditFormDetailHandleInput = (e) => {
    const { name, value } = e.target;
    setPackageEditDetailForm({
      ...packageEditDetailForm,
      [name]: value,
    });
  };
  const handlePackageCheckbox = (value, id) => {
    const productIdx = updateList.findIndex((list) => list.product_id === id);
    const newArr = [...updateList];
    newArr[productIdx].buying = value;
    setUpdateList(newArr);
  };

  const minDate = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  )
    .toISOString()
    .slice(0, 10);
  const countDays =
    (new Date(delivery_date).getTime() - new Date(minDate).getTime()) /
    (1000 * 3600 * 24);

  const packageEditFormRequest = (e) => {
    const { additional_explanation, contact, customer_name, title, type } =
      packageEditForm;
    const { delivery_date, delivery_location, is_packaging, purpose } =
      packageEditDetailForm;
    orderedproducts = [...updateList].filter((x) => x.buying === true);
    const checkValue =
      additional_explanation &&
      contact &&
      customer_name &&
      title &&
      type &&
      delivery_date &&
      delivery_location &&
      is_packaging &&
      purpose;
    const lengthCheck =
      title.length < 50 &&
      additional_explanation.length < 300 &&
      delivery_location.length < 100 &&
      is_packaging.length < 100 &&
      purpose.length < 200;
    e.preventDefault();
    if (checkValue) {
      if (lengthCheck) {
        if (countDays > 2) {
          if (window.confirm("수정하시겠습니까?")) {
            fetch(`${FORM_EDIT_PATCH}/${formId}`, {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${USER_TOKEN}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                additional_explanation,
                contact,
                customer_name,
                title,
                purpose,
                type,
                delivery_date,
                delivery_location,
                is_packaging,
                orderedproducts,
              }),
            }).then((res) => {
              if (res.status === 200) {
                navigate(`/formdetail/${formId}`, {
                  state: { checkValid: true },
                });
              } else {
                alert("다시 시도해 주세요");
                navigate(`/orders/${formId}`, { state: { checkValid: true } });
              }
            });
          }
        } else {
          alert("신청일로부터 최소 3일 후 날짜부터 신청이 가능합니다.");
        }
      } else {
        alert("글자 수를 확인해 주세요.");
      }
    } else {
      alert("빈칸을 확인해 주세요");
    }
  };
  const packageEditFormStaffRequest = (e) => {
    const { additional_explanation, contact, customer_name, title, type } =
      packageEditForm;
    const { delivery_date, delivery_location, is_packaging, purpose } =
      packageEditDetailForm;
    orderedproducts = [...updateList].filter((x) => x.buying === true);
    const checkValue =
      additional_explanation &&
      contact &&
      customer_name &&
      title &&
      type &&
      delivery_date &&
      delivery_location &&
      is_packaging &&
      purpose;
    const lengthCheck =
      title.length < 50 &&
      additional_explanation.length < 300 &&
      delivery_location.length < 100 &&
      is_packaging.length < 100 &&
      purpose.length < 200;
    e.preventDefault();
    if (checkValue) {
      if (lengthCheck) {
        if (window.confirm("수정하시겠습니까?")) {
          fetch(`${FORM_EDIT_PATCH}/${formId}`, {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${USER_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              additional_explanation,
              contact,
              customer_name,
              title,
              purpose,
              type,
              delivery_date,
              delivery_location,
              is_packaging,
              orderedproducts,
              status: "confirmed",
            }),
          }).then((res) => {
            if (res.status === 200) {
              navigate(`/formdetail/${formId}`, {
                state: { checkValid: true },
              });
            } else {
              alert("다시 시도해 주세요");
              navigate(`/orders/${formId}`, { state: { checkValid: true } });
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

  return (
    <PackageEditFormWrapper>
      <PackageEditFormWidth>
        <PackageEditFormTitle>기프트박스 신청내역 수정</PackageEditFormTitle>
        <PackageEditFormInputWrapper>
          <PackageEditFormInputTitle>글 제목</PackageEditFormInputTitle>
          <PackageEditFormInputTitleInput
            placeholder="제목을 입력해 주세요 최대 50자 입니다."
            required
            name="title"
            onChange={packageEditFormHandleInput}
            value={title}
          />
          <PackageEditFormPurpose>
            프로모션 <br /> 목적
          </PackageEditFormPurpose>
          <PackageEditFormPurposeInput
            placeholder="ex) 기업 행사, 결혼 답례품 등 / 최대 200자입니다."
            required
            name="purpose"
            onChange={packageEditFormDetailHandleInput}
            value={purpose}
          />

          <PackageEditFormName>이름</PackageEditFormName>
          <PackageEditFormNameInput
            placeholder="이름을 입력해 주세요"
            required
            name="customer_name"
            onChange={packageEditFormHandleInput}
            value={customer_name}
          />
          <PackageEditFormPhoneNumber>폰 번호</PackageEditFormPhoneNumber>
          <PackageEditFormPhoneNumberInput
            placeholder="전화번호를 입력해 주세요"
            required
            name="contact"
            onChange={packageEditFormHandleInput}
            value={contact}
          />
          <PackageEditFormDate>
            프로모션 <br />
            날짜
          </PackageEditFormDate>
          <PackageEditFormDateDiv>
            <PackageEditFormDateInput
              required
              type="date"
              name="delivery_date"
              min={minDate.toString()}
              onChange={packageEditFormDetailHandleInput}
              value={delivery_date}
            />
          </PackageEditFormDateDiv>
          <PackageEditFormAddress>주소</PackageEditFormAddress>
          <PackageEditFormAddressInput
            placeholder="주소를 입력해 주세요 최대 100자입니다."
            required
            name="delivery_location"
            onChange={packageEditFormDetailHandleInput}
            value={delivery_location}
          />
          <PackageEditFormDescription>구성품</PackageEditFormDescription>
          <PackageEditFormDescriptionDiv>
            {orderedproducts
              .filter((product) => product.product_id !== 14)
              .map((product, idx) => (
                <InputWrap key={idx}>
                  <PackageEditFormDescriptionInput
                    type="checkbox"
                    checked={product.buying}
                    onChange={(e) =>
                      handlePackageCheckbox(
                        e.target.checked,
                        product.product_id
                      )
                    }
                  />
                  <PackageEditFormDescriptionList>
                    {product.product_name}
                  </PackageEditFormDescriptionList>
                </InputWrap>
              ))}
            <PackageFormEditDescriptionP>
              * 선택하신 상품은 한 개의 수량이 입력됩니다. 2개 이상을 원하실
              경우 기타사항에 작성해 주세요. <br />
              상품 종류는 최소 2개 이상 선택해 주세요.
            </PackageFormEditDescriptionP>
          </PackageEditFormDescriptionDiv>
          <PackageEditFormIsPackage>패키지 유무</PackageEditFormIsPackage>
          <PackageEditFormIsPackageInput
            placeholder="패키지 유무를 입력해 주세요. 종이 포장으로 선택할 시 별도의 포장 요금이 추가되지 않습니다."
            required
            name="is_packaging"
            onChange={packageEditFormDetailHandleInput}
            value={is_packaging}
          />
          <PackageEditFormRemark>기타사항</PackageEditFormRemark>
          <PackageEditFormRemarkInput
            placeholder="남겨주실 말을 입력해 주세요 최대 300자 입니다."
            name="additional_explanation"
            required
            onChange={packageEditFormHandleInput}
            value={additional_explanation}
          />
        </PackageEditFormInputWrapper>
        <PackageFormBtnWrap>
          <PackageEditFormBtn onClick={packageEditFormRequest}>
            수정하기
          </PackageEditFormBtn>
          {is_staff && (
            <PackageFormBtnStaffOnly>
              <PackageFormBtn onClick={packageEditFormStaffRequest}>
                컨펌 완료!
              </PackageFormBtn>
              <PackageFormBtnNotion>
                컨펌 완료 버튼은 더 이상 <br />
                수정 사항이 없을 경우에만 눌러 주세요!
              </PackageFormBtnNotion>
            </PackageFormBtnStaffOnly>
          )}
        </PackageFormBtnWrap>
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
  @media (max-width: 768px) {
    font-size: 15px;
    width: 90%;
  }
`;
const PackageEditFormTitle = styled.p`
  font-size: 30px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
const PackageEditFormInputWrapper = styled.form`
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

const PackageEditFormName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;
const PackageEditFormNameInput = styled.input.attrs((props) => ({
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
  @media (max-width: 768px) {
    font-size: 15px;
  }
  &::placeholder {
    font-family: ${({ theme }) => theme.fontFamily};
  }
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

const PackageEditFormInputTitle = styled(PackageEditFormName)``;
const PackageEditFormInputTitleInput = styled(PackageEditFormNameInput).attrs(
  (props) => ({
    type: "text",
    maxLength: 50,
  })
)``;

const PackageEditFormPurpose = styled(PackageEditFormName)``;
const PackageEditFormPurposeInput = styled(PackageEditFormNameInput).attrs(
  (props) => ({
    type: "text",
    maxLength: 200,
  })
)``;

const PackageEditFormPhoneNumber = styled(PackageEditFormName)``;
const PackageEditFormPhoneNumberInput = styled(PackageEditFormNameInput).attrs(
  (props) => ({
    type: "text",
    maxLength: 20,
  })
)``;

const PackageEditFormDate = styled(PackageEditFormName)``;
const PackageEditFormDateDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.bgColor};
`;
const PackageEditFormDateInput = styled(PackageEditFormNameInput).attrs(
  (props) => ({
    type: "date",
  })
)`
  border: none;
`;

const PackageEditFormAddress = styled(PackageEditFormName)``;
const PackageEditFormAddressInput = styled(PackageEditFormNameInput).attrs(
  (props) => ({
    type: "text",
    maxLength: 100,
  })
)``;

const PackageEditFormDescription = styled(PackageEditFormName)``;
const PackageEditFormDescriptionDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-size: 17px;
  resize: none;
  padding: 20px 0;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fontFamily};
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const InputWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 180px;
  @media (max-width: 768px) {
    font-size: 15px;
    width: 140px;
  }
`;
const PackageFormEditDescriptionP = styled.p`
  margin-top: 10px;
  font-size: 13px;
  color: red;
`;
const PackageEditFormDescriptionInput = styled.input`
  margin-right: 10px;
`;
const PackageEditFormDescriptionList = styled.p``;

const PackageEditFormIsPackage = styled(PackageEditFormName)``;
const PackageEditFormIsPackageInput = styled(PackageEditFormNameInput).attrs(
  (props) => ({
    type: "text",
    maxLength: 50,
  })
)``;

const PackageEditFormRemark = styled(PackageEditFormName)``;
const PackageEditFormRemarkInput = styled.textarea.attrs((props) => ({
  type: "text",
  maxLength: 300,
}))`
  border-style: none;
  border-bottom: ${({ theme }) => theme.bgColor};
  font-size: 17px;
  resize: none;
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
  font-family: ${({ theme }) => theme.fontFamily};
  cursor: pointer;
  @media (max-width: 600px) {
    width: 150px;
    height: 40px;
    font-size: 15px;
  }
`;

const PackageFormBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
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
  cursor: pointer;
  @media (max-width: 600px) {
    width: 150px;
    height: 40px;
    font-size: 15px;
  }
`;
const PackageFormBtnStaffOnly = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PackageFormBtnNotion = styled.p`
  margin-top: 10px;
  font-size: 17px;
  color: red;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
