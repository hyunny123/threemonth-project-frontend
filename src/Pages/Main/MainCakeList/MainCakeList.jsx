import React from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

const MainCakeList = ({ mainCakeList }) => {
  const navigate = useNavigate();
  const params = useParams();

  const goToCakeDetail = () => {
    navigate(`product/${params.productId}`);
  };
  return (
    <MainCakeListContainer id="cakeList">
      <CakeListTitle>뜨리먼뜨 CakeList</CakeListTitle>
      <CakeListBox>
        <CakeListItems>
          {mainCakeList.map((item) => {
            return (
              <CakeListItem onClick={goToCakeDetail} key={item.id}>
                <CakeItem src={item.product_images[0].img_src} />
                <CakeItemTitle>{item.product_name}</CakeItemTitle>
                <CakeItemPrice>
                  {item.price && item.price.toLocaleString()}원
                </CakeItemPrice>
              </CakeListItem>
            );
          })}
        </CakeListItems>
      </CakeListBox>
    </MainCakeListContainer>
  );
};

export default MainCakeList;

const MainCakeListContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 100px 0px;
`;

const CakeListTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 3em;
  border-bottom: 3px solid #331211;
  color: #331211;
`;

const CakeListBox = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  border-bottom: 3px solid #331211;
`;

const CakeListItems = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 25px 50px;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
`;
const CakeListItem = styled.li`
  text-align: center;
`;

const CakeItemTitle = styled.h3`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 400;
`;
const CakeItemPrice = styled.p`
  font-size: 20px;
  font-weight: 300;
`;

const CakeItem = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 5px;
`;
