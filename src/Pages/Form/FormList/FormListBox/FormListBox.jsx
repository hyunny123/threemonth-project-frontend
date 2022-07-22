import React from "react";
import styled from "styled-components";

const FormListBox = () => {
  return (
    <FormListBoxContainer>
      <BoxTitle>뜨리먼뜨 FormList</BoxTitle>
      <ListBox>
        <ListBoxMenu>
          <MenuNum>게시물 넘버</MenuNum>
          {/* <MenuSub>게시물 제목</MenuSub>
          <MenuDate>날짜</MenuDate>
          <MenuWriter>작성자</MenuWriter> */}
        </ListBoxMenu>
        <List>
          <ListBoxTitle>돌잔치 답례품 패키지 신청</ListBoxTitle>
        </List>
      </ListBox>
    </FormListBoxContainer>
  );
};

export default FormListBox;

const FormListBoxContainer = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const BoxTitle = styled.h2`
  font-size: 1.6em;
`;

const ListBoxMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const MenuNum = styled.div``;

const ListBox = styled.div`
  width: 100%;
  border: 10px solid tomato;
  border-radius: 20px;
`;

const List = styled.ul`
  width: 100%;
  height: 100px;
  border: 1px solid green;
  border-radius: 10px;
`;

const ListBoxTitle = styled.li``;
