import React from "react";
import styled from "styled-components";

const OrderListNoContents = ({ reviewList }) => {
  return (
    <MyPageListContainer>
      <MyPageListWrap>
        <MyPageListTitle>구매완료 리스트</MyPageListTitle>
        <MyPageListBox>
          <ListBox>
            <ListBoxMenu>
              <MenuDate>주문 날짜</MenuDate>
              <MenuTitle>주문타이틀</MenuTitle>
            </ListBoxMenu>
          </ListBox>
          <List>
            <NoContentWrap>
              <NoContent>신청 내역이 없습니다.</NoContent>
            </NoContentWrap>
          </List>
        </MyPageListBox>
      </MyPageListWrap>
    </MyPageListContainer>
  );
};

export default OrderListNoContents;

const MyPageListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.fontColor};
  @media (max-width: 580px) {
    width: 100%;
  }
`;

const MyPageListWrap = styled.div`
  margin: 80px 0;
  width: 85%;
  @media (max-width: 580px) {
    width: 100%;
  }
`;

const MyPageListTitle = styled.p`
  font-size: 1.6em;
  @media (max-width: 580px) {
    padding: 0 20px;
  }
  @media (max-width: 580px) {
    font-size: 1em;
    padding: 0 20px;
  }
`;

const MyPageListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  box-sizing: border-box;
  @media (max-width: 580px) {
    width: 100vw;
  }
`;

const ListBox = styled.div`
  width: 100%;
  min-height: 50px;
  border-radius: 20px;
`;

const ListBoxMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 30px;
  box-sizing: border-box;
  border-bottom: 4px solid ${(props) => props.theme.bgColor};
  margin-top: 50px;
`;
const MenuDate = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 580px) {
    font-size: 13px;
  }
`;
const MenuTitle = styled(MenuDate)`
  @media (max-width: 580px) {
  }
`;
const List = styled.ul`
  width: 100%;
  min-height: 100px;
  border-radius: 10px;
`;

const NoContentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 20px;
`;
const NoContent = styled.p`
  color: ${({ theme }) => theme.fontColor};
  @media (max-width: 610px) {
    font-size: 0.8em;
  }
  @media (max-width: 450px) {
    font-size: 0.6em;
  }
`;
