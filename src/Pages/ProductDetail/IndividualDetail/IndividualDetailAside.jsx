import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const IndividualDetailAside = ({ data }) => {
  const navigate = useNavigate();
  const { productname, price, description } = data;

  const goInputForm = () => {
    navigate("/cakeinputform");
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
  height: 40px;
  width: 200px;
  border-radius: 5px;
  font-size: 18px;
  font-family: "GangwonEdu_OTFBoldA";
  color: ${(props) => props.theme.fontColor};
  border: 1px solid #331211;
  background-color: #f1e6d1;
`;
