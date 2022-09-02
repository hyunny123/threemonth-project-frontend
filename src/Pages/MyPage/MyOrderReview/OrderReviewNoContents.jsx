import React from "react";
import styled from "styled-components";

const OrderReviewNoContents = ({ orderReviewList }) => {
  return (
    <MyOrderReviewContainer>
      <MyOrderReviewWrap>
        <MyOrderReviewTitle>리뷰작성 리스트</MyOrderReviewTitle>
        <MyReviewListBox>
          <ListBox>
            <ListMenu>
              <MenuDate>구매날짜</MenuDate>
              <MenuTitle>리뷰작성 목록</MenuTitle>
              <MenuIsReviewChecked>리뷰확인</MenuIsReviewChecked>
            </ListMenu>
            <List>
              <NoContentWrap>
                <NoContent>리뷰를 작성할 내역이 없습니다.</NoContent>
              </NoContentWrap>
            </List>
          </ListBox>
        </MyReviewListBox>
      </MyOrderReviewWrap>
    </MyOrderReviewContainer>
  );
};

export default OrderReviewNoContents;

const MyOrderReviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.fontColor};
  @media (max-width: 580px) {
    width: 100%;
  }
`;

const MyOrderReviewWrap = styled.div`
  margin: 80px 0;
  width: 85%;
  @media (max-width: 580px) {
    width: 100%;
  }
`;

const MyOrderReviewTitle = styled.p`
  font-size: 1.6em;
  @media (max-width: 580px) {
    padding: 0 20px;
  }
`;

const MyReviewListBox = styled.div`
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

const ListMenu = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 5fr 1fr;
  grid-template-rows: 30px;
  box-sizing: border-box;
  border-bottom: 4px solid ${(props) => props.theme.bgColor};
  margin-top: 50px;
  margin-bottom: 20px;
  /* @media (max-width: 580px) {
    grid-template-columns: 0.5fr 3fr 1fr 1fr ;
    grid-template-rows: 30px;
  }
  @media (max-width: 450px) {
    grid-template-columns: 0.5fr 2fr 1fr;
    grid-template-rows: 20px;
    font-size: 14px;
  } */
`;

const MenuDate = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 580px) {
    font-size: 13px;
  }
`;

const MenuTitle = styled(MenuDate)``;

const MenuIsReviewChecked = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 580px) {
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 0 10px;
    font-size: 13px;
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
`;

const OrderReviewWrapper = styled.div`
  border-style: none;
  display: grid;
  grid-template-columns: 1.5fr 5fr 1fr;
  width: 100%;
  background-color: white;
  font-family: ${({ theme }) => theme.fontFamily};
  border-bottom: 1px solid ${(props) => props.theme.bgColor};
  font-size: 1em;
  box-sizing: border-box;
  padding: 10px 10px;
`;
const OrderReviewUserType = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 0.7em;
  }
  @media (max-width: 580px) {
    font-size: 10px;
    &:nth-child(3) {
      justify-content: flex-end;
    }
  }
`;
const OrderReviewUserTitle = styled(OrderReviewUserType)`
  justify-content: flex-start;
  align-items: center;
  text-align: start;
`;

const OrderReviewBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
`;

const OrderReviewBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.fontColor};
  width: 80px;
  height: 40px;
  font-family: ${({ theme }) => theme.fontFamily};
  cursor: pointer;
`;
