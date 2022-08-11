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
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
  padding-bottom: 50px;
  border-bottom: 3px solid ${({ theme }) => theme.fontColor};
  box-sizing: border-box;
`;

const ListItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0px;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
`;
const ListItem = styled.li`
  text-align: center;
  margin-right: 35px;
  margin-top: 25px;
  @media screen and (max-width: 400px) {
    margin-right: 0px;
  }
`;

const ItemTitle = styled.h3`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 400;
  @media screen and (max-width: 770px) {
    font-size: 16px;
  }
  @media screen and (max-width: 465px) {
    font-size: 16px;
  }
`;
const ItemPrice = styled.p`
  font-size: 20px;
  font-weight: 300;
  @media screen and (max-width: 770px) {
    font-size: 16px;
  }
  @media screen and (max-width: 465px) {
    font-size: 16px;
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
  @media screen and (max-width: 447px) {
    width: 200px;
    height: 150px;
  }
`;
