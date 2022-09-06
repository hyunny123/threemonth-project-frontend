import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import OrderListNoContents from "./OrderListNoContents";

const MyOrderList = ({ orderList }) => {
  const navigate = useNavigate();
  const goFormDetail = (id) => {
    navigate(`/formdetail/${id}`, { state: { checkValid: true } });
  };

  if (orderList.length === 0) {
    return <OrderListNoContents />;
  }
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
            {orderList.map((list, idx) => (
              <ListBoxContents key={idx}>
                <ListBoxContent>{list.created_at.slice(0, 10)}</ListBoxContent>
                <ListBoxContent
                  onClick={() => {
                    goFormDetail(list.id);
                  }}
                >
                  {list.title}
                </ListBoxContent>
              </ListBoxContents>
            ))}
          </List>
        </MyPageListBox>
      </MyPageListWrap>
    </MyPageListContainer>
  );
};

export default MyOrderList;

const MyPageListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.fontColor};
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
  @media (max-width: 768px) {
    font-size: 1.2em;
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
const ListBoxContents = styled.div`
  border-style: none;
  display: grid;
  grid-template-columns: 1fr 5fr;
  width: 100%;
  background-color: white;
  font-family: ${({ theme }) => theme.fontFamily};
  border-bottom: 1px solid ${(props) => props.theme.bgColor};
  font-size: 1em;
  cursor: pointer;
  box-sizing: border-box;
  padding: 15px 15px;
  @media (max-width: 450px) {
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 20px;
    padding: 5px;
    align-items: center;
  }
  @media (max-width: 360px) {
    grid-template-columns: 1fr 3.5fr;
    grid-template-rows: 20px;
    padding: 5px;
    align-items: center;
  }
`;

const ListBoxContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 15px;

  &:nth-child(2) {
    justify-content: flex-start;
    align-items: center;
    text-align: start;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 0.7em;
  }
  @media (max-width: 580px) {
    font-size: 0.6em;
  }
`;
