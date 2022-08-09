import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const MainList = ({ mainList }) => {
  const navigate = useNavigate();

  const goToDetail = (id) => {
    navigate(`/individualdetail/${id}`);
  };

  return (
    <ListContainer>
      <ListTitle>뜨리먼뜨 List</ListTitle>
      <ListBox>
        <ListItems>
          {mainList.map((item, idx) => {
            return (
              <ListItem
                key={idx}
                onClick={() => {
                  goToDetail(item.id);
                }}
              >
                <Item src={item.product_images[0].img_src} />
                <ItemTitle>{item.product_name}</ItemTitle>
                <ItemPrice>
                  {item.price && item.price.toLocaleString()}원
                </ItemPrice>
              </ListItem>
            );
          })}
        </ListItems>
      </ListBox>
    </ListContainer>
  );
};

export default MainList;

const ListContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px 0px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
const ListTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 3em;
  line-height: 1.2;
  border-bottom: 3px solid ${({ theme }) => theme.fontColor};
  color: ${({ theme }) => theme.fontColor};
  @media screen and (max-width: 750px) {
    font-size: 2em;
    margin-top: 30px;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.5em;
    margin-top: 30px;
  }
`;

const ListBox = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  border-bottom: 3px solid ${({ theme }) => theme.fontColor};
  @media screen and (max-width: 1024px) {
    padding-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 30px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 440px) {
    padding-bottom: 30px;
    margin-bottom: 10px;
  }
`;

const ListItems = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 25px 50px;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-gap: 25px 25px;
  }
  @media screen and (max-width: 790px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(9, 1fr);
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;
const ListItem = styled.li`
  text-align: center;
`;

const ItemTitle = styled.h3`
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
const ItemPrice = styled.p`
  font-size: 20px;
  font-weight: 300;
  @media screen and (max-width: 465px) {
    font-size: 16px;
  }
  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

const Item = styled.img`
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
