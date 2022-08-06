import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const MainCakeList = ({ mainCakeList }) => {
  const navigate = useNavigate();

  const goToCakeDetail = (id) => {
    navigate(`/individualdetail/${id}`);
  };
  return (
    <MainCakeListContainer id="cakeList">
      <CakeListTitle>뜨리먼뜨 CakeList</CakeListTitle>
      <CakeListBox>
        <CakeListItems>
          {mainCakeList.map((item, idx) => {
            return (
              <CakeListItem
                onClick={() => {
                  goToCakeDetail(item.id);
                }}
                key={idx}
              >
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
  width: 80%;
  margin: 0 auto;
  padding: 100px 0px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const CakeListTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 3em;
  border-bottom: 3px solid ${({ theme }) => theme.fontColor};
  color: ${({ theme }) => theme.fontColor};
  @media screen and (max-width: 320px) {
    font-size: 2em;
    margin-top: 30px;
  }
`;

const CakeListBox = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  border-bottom: 3px solid ${({ theme }) => theme.fontColor};
  @media screen and (max-width: 1200px) {
    padding-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 30px;
  }
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
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-gap: 25px 25px;
  }
  @media screen and (max-width: 790px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-gap: 25px 25px;
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-gap: 25px 25px;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-gap: 25px 25px;
  }
`;
const CakeListItem = styled.li`
  text-align: center;
`;

const CakeItemTitle = styled.h3`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 400;
  @media screen and (max-width: 465px) {
    font-size: 16px;
  }
  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;
const CakeItemPrice = styled.p`
  font-size: 20px;
  font-weight: 300;
  @media screen and (max-width: 465px) {
    font-size: 16px;
  }
  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

const CakeItem = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 5px;
  @media screen and (max-width: 2560px) {
    width: 400px;
    height: 280px;
  }
  @media screen and (max-width: 2260px) {
    width: 300px;
    height: 200px;
  }
  @media screen and (max-width: 1700px) {
    width: 260px;
    height: 180px;
  }
  @media screen and (max-width: 1500px) {
    width: 200px;
    height: 150px;
  }
  @media screen and (max-width: 790px) {
    width: 170px;
    height: 130px;
  }
  @media screen and (max-width: 465px) {
    width: 170px;
    height: 130px;
  }
  @media screen and (max-width: 400px) {
    width: 200px;
    height: 150px;
  }
`;
