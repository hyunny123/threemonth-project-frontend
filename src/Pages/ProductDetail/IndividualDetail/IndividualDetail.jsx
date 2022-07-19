import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IndividualDetailAside from "./IndividualDetailAside";
import IndividualDetailMain from "./IndividualDetailMain";

const IndividualDetail = () => {
  const [individualData, setIndividualData] = useState({
    productname: "",
    price: 0,
    nutrition: {},
    description: "",
    productImages: {
      conventionTop: [],
      contents: [],
    },
    origin: "",
  });

  useEffect(() => {
    axios
      .get("/data/data.json")
      .then((res) => setIndividualData(res.data.result));
  }, []);

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
