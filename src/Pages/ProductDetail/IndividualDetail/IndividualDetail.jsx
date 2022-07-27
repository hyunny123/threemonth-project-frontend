import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { API } from "../../../config";
import IndividualDetailAside from "./IndividualDetailAside";
import IndividualDetailMain from "./IndividualDetailMain";

const IndividualDetail = () => {
  const [individualData, setIndividualData] = useState({
    productname: "",
    price: 0,
    description: "",
    productImages: {
      conventionTop: [],
      contents: [],
    },
  });
  const { productId } = useParams();
  const { INDIVIDUALDETAIL } = API;

  useEffect(() => {
    fetch(`${INDIVIDUALDETAIL}/:productId`)
      .then((res) => res.json())
      .then((data) => setIndividualData(data));
  }, [productId]);

  return (
    <IndividualDetailWrapper>
      <IndividualDetailWidth>
        <IndividualDetailMain data={individualData} />
        <IndividualDetailAside data={individualData} />
      </IndividualDetailWidth>
    </IndividualDetailWrapper>
  );
};

export default IndividualDetail;

const IndividualDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.fontColor};
`;

const IndividualDetailWidth = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 50px;
  min-height: 400px;
  width: 85%;

  @media (max-width: 700px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;
