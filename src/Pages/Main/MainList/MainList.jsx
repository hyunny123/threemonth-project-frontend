import React, { useState } from "react";
import { INNER_GRID } from "./MainListData";
import styled from "styled-components";
const MainList = () => {
  const [listData, setListData] = useState([{ id: 0, className: "", src: "" }]);
  return (
    <ListContainer>
      <ListTitle>뜨리먼뜨 List</ListTitle>
      <ListBox>
        <ListItems>
          {INNER_GRID.map(({ id, className, src, price }) => {
            return (
              <ListItem key={id}>
                <Item src={src} />
                <ItemTitle>{className}</ItemTitle>
                <ItemPrice>{price && price.toLocaleString()}원</ItemPrice>
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
  /* margin-left: 10px; */
  font-size: 3em;
  border-bottom: 3px solid #331211;
  color: #331211;
`;

const ListBox = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-around; */
  /* align-items: center; */
  margin-top: 30px;
  border-bottom: 3px solid #331211;
  /* border-top: 3px solid #331211; */
`;

const ListItems = styled.ul`
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
const ListItem = styled.li`
  text-align: center;
`;

const ItemTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const ItemPrice = styled.p`
  font-size: 20px;
  font-weight: 300;
`;

const Item = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 5px;
`;
