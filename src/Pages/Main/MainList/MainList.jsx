import React from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

const MainList = ({ mainList }) => {
  const navigate = useNavigate();
  const params = useParams();

  const goToDetail = () => {
    navigate(`/product/${params.formId}`);
  };
  // console.log(mainList);
  return (
    <ListContainer>
      <ListTitle>뜨리먼뜨 List</ListTitle>
      <ListBox>
        <ListItems>
          {mainList.map((item) => {
            return (
              <ListItem key={item.id} onClick={goToDetail}>
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
  width: 85%;
  margin: 0 auto;
  padding: 100px 0px;
`;
const ListTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 3em;
  border-bottom: 3px solid #331211;
  color: #331211;
`;

const ListBox = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  border-bottom: 3px solid #331211;
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
`;
const ListItem = styled.li`
  text-align: center;
`;

const ItemTitle = styled.h3`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 400;
`;
const ItemPrice = styled.p`
  font-size: 20px;
  font-weight: 300;
`;

const Item = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 5px;
`;
