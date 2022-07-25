import React from "react";
import styled from "styled-components";

const MainCakeList = ({ mainCakeList }) => {
  return (
    <MainCakeListContainer>
      <CakeListTitle>뜨리먼뜨 CakeList</CakeListTitle>
      <CakeListBox>
        <CakeListItems>
          {mainCakeList.map((item) => {
            return (
              <CakeListItem key={item.id}>
                <CakeItem src={item.main_list_img_src} />
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
  /* justify-content: space-around; */
  /* align-items: center; */
  margin-top: 30px;
  border-bottom: 3px solid #331211;
  /* border-top: 3px solid #331211; */
`;

const CakeListItems = styled.ul`
  display: grid;
  justify-content: center;
  /* align-items: center; */
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 25px 50px;
  /* width: 100%; */
  /* margin: 0 auto; */
  overflow: hidden;
  cursor: pointer;
`;
const CakeListItem = styled.li`
  text-align: center;
`;

const CakeItemTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const CakeItemPrice = styled.p`
  font-size: 20px;
  font-weight: 300;
`;

const CakeItem = styled.img`
  width: 200px;
  height: 100px;
  border-radius: 5px;
`;
