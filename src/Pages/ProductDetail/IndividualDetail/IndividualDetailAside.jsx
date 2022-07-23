import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { USER_TOKEN } from "../../../config";
import { LOGIN_URI } from "../../Login/AuthData";

const IndividualDetailAside = ({ data }) => {
  const navigate = useNavigate();
  const { productname, price, description } = data;

  const goInputForm = () => {
    if (USER_TOKEN) {
      navigate("/cakeinputform");
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
        <IndividualDetailAsideP>{productname}</IndividualDetailAsideP>
        <IndividualDetailAsideP>{description}</IndividualDetailAsideP>
        <IndividualDetailAsideP>
          {price.toLocaleString()}원
        </IndividualDetailAsideP>
        <DetailIndividualReservBtn onClick={goInputForm}>
          예약하러 가기
        </DetailIndividualReservBtn>
      </IndividualDetailAsideTop>
    </IndividualDetailAsideWrapper>
  );
};

export default IndividualDetailAside;

const IndividualDetailAsideWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  color: #331211;
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
`;

const DetailIndividualReservBtn = styled.button`
  margin-top: 50px;
  border-style: none;
  height: 60px;
  width: 70%;
  border-radius: 5px;
  font-size: 18px;
  font-family: "GangwonEdu_OTFBoldA";
  color: ${(props) => props.theme.fontColor};
  border: 1px solid #331211;
  background-color: #f1e6d1;
`;
