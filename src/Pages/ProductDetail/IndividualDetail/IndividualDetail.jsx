import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Loading from "../../../components/Loading";
import IndividualDetailAside from "./IndividualDetailAside";
import IndividualDetailMain from "./IndividualDetailMain";

const IndividualDetail = () => {
  const [individualData, setIndividualData] = useState({
    buying: false,
    description: null,
    id: 0,
    is_active: false,
    optional_description: null,
    price: 0,
    product_images: [],
    product_name: "",
    category: "bread",
  });
  const params = useParams();
  const { productId } = params;

  useEffect(() => {
    fetch(`http://15.164.163.31:8001/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setIndividualData(data));
  }, [productId]);

  if (individualData.id === 0) {
    return <Loading />;
  }

  return (
    <IndividualDetailWrapper>
      <IndividualDetailWidth>
        <IndividualDetailMain individualData={individualData} />
        <IndividualDetailAside individualData={individualData} />
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
