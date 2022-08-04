import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { USER_TOKEN } from "../../../config";
import { LOGIN_URI } from "../../Login/AuthData";

const IndividualDetailAside = ({ individualData }) => {
  const navigate = useNavigate();
  const { price, description, is_active, product_name, category } =
    individualData;
  const goReserveForm = () => {
    if (USER_TOKEN) {
      if (is_active === false) {
        alert("현재 판매중인 케이크가 아닙니다.");
      } else {
        navigate("/reserveform", { state: { formType: "cake" } });
      }
    } else {
      if (
        window.confirm("로그인이 필요한 서비스입니다. 로그인 하시겠습니까?")
      ) {
        window.location = `${LOGIN_URI}`;
      }
    }
  };

  return (
    <IndividualDetailAsideWrapper>
      <IndividualDetailAsideTop>
        <IndividualDetailAsideP>{product_name}</IndividualDetailAsideP>
        <IndividualDetailAsideP>{description}</IndividualDetailAsideP>
        <IndividualDetailAsideP>
          {price.toLocaleString()}원
        </IndividualDetailAsideP>
        {category === "cake" ? (
          <DetailIndividualReservBtn onClick={goReserveForm}>
            예약하러 가기
          </DetailIndividualReservBtn>
        ) : (
          <GoToBamin href="https://baemin.me/vrmWr_I9d">
            <DetailIndividualReservBtn>
              주문은 배달의 민족에서!
            </DetailIndividualReservBtn>
          </GoToBamin>
        )}
      </IndividualDetailAsideTop>
    </IndividualDetailAsideWrapper>
  );
};

export default IndividualDetailAside;

const IndividualDetailAsideWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  color: ${({ theme }) => theme.fontColor};
`;

const IndividualDetailAsideTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
`;

const IndividualDetailAsideP = styled.p`
  margin-top: 50px;
  font-size: 18px;
  &:nth-child(odd) {
    font-size: 23px;
  }
`;

const GoToBamin = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const DetailIndividualReservBtn = styled.button`
  margin-top: 50px;
  border-style: none;
  height: 60px;
  width: 70%;
  border-radius: 5px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.fontColor};
  border: 1px solid ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.bgColor};
  cursor: pointer;
`;
