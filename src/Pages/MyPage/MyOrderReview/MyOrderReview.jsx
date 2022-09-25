import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import OrderReviewNoContents from "./OrderReviewNoContents";

const MyOrderReview = ({ orderReviewList }) => {
  const navigate = useNavigate();

  if (orderReviewList.length === 0) {
    return <OrderReviewNoContents />;
  }
  return (
    <MyOrderReviewContainer>
      <MyOrderReviewWrap>
        <MyOrderReviewTitle>리뷰 작성하기</MyOrderReviewTitle>
        <MyReviewListBox>
          <ListBox>
            <ListMenu>
              <MenuDate>구매날짜</MenuDate>
              <MenuTitle>리뷰작성 목록</MenuTitle>
              <MenuIsReviewChecked>리뷰확인</MenuIsReviewChecked>
            </ListMenu>
            {orderReviewList.map((list, idx) => (
              <OrderReviewWrapper key={idx}>
                <OrderReviewUserDate>
                  {String(list.created_at).slice(0, 10)}
                </OrderReviewUserDate>
                <OrderReviewUserTitle>{list.title}</OrderReviewUserTitle>
                <OrderReviewBtnWrap>
                  {list.id && (
                    <OrderReviewBtn
                      onClick={() => {
                        navigate("/myreviewinput/", {
                          state: { selectedId: list.id },
                        });
                      }}
                    >
                      리뷰쓰기
                    </OrderReviewBtn>
                  )}
                </OrderReviewBtnWrap>
              </OrderReviewWrapper>
            ))}
          </ListBox>
        </MyReviewListBox>
      </MyOrderReviewWrap>
    </MyOrderReviewContainer>
  );
};

export default MyOrderReview;

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
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
  @media (max-width: 580px) {
    font-size: 1em;
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
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 30px;
  box-sizing: border-box;
  border-bottom: 4px solid ${(props) => props.theme.bgColor};
  margin-top: 50px;
  @media (max-width: 768px) {
    grid-template-columns: 1.3fr 5fr 1.5fr;
    grid-template-rows: 30px;
  }
  @media (max-width: 610px) {
    grid-template-columns: 1.2fr 4fr 1.6fr;
    grid-template-rows: 25px;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr 4fr 1.5fr;
    grid-template-rows: 20px;
    font-size: 14px;
  }
`;

const MenuDate = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 610px) {
    font-size: 0.8em;
  }
  @media (max-width: 450px) {
    font-size: 0.6em;
  }
`;

const MenuTitle = styled(MenuDate)``;

const MenuIsReviewChecked = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    justify-content: center;
    box-sizing: border-box;
    padding: 0 10px;
    font-size: 1em;
  }
  @media (max-width: 610px) {
    justify-content: center;
    box-sizing: border-box;
    padding: 0 10px;
    font-size: 0.8em;
  }

  @media (max-width: 450px) {
    font-size: 0.6em;
  }
`;

const OrderReviewWrapper = styled.div`
  border-style: none;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  width: 100%;
  background-color: white;
  font-family: ${({ theme }) => theme.fontFamily};
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-size: 1em;
  box-sizing: border-box;
  padding: 10px 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 30px;
  }
  @media (max-width: 580px) {
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 30px;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1.3fr 4fr 1.3fr;
    grid-template-rows: 20px;
    font-size: 14px;
  }
  @media (max-width: 430px) {
    grid-template-columns: 1.5fr 4.5fr 1fr;
    grid-template-rows: 20px;
    font-size: 14px;
  }
`;
const OrderReviewUserDate = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 0.7em;
  }
  @media (max-width: 580px) {
    font-size: 0.6em;
  }
`;
const OrderReviewUserTitle = styled(OrderReviewUserDate)`
  justify-content: flex-start;
  align-items: center;
  text-align: start;
  margin-left: 10px;
  @media (max-width: 768px) {
    font-size: 0.7em;
    margin-left: 10px;
  }
  @media (max-width: 580px) {
    font-size: 0.6em;
    margin-left: 10px;
  }
`;

const OrderReviewBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  @media (max-width: 768px) {
    margin-right: 15px;
  }
  @media (max-width: 650px) {
    margin-right: 10px;
  }
  @media (max-width: 610px) {
    margin-right: 30px;
  }
  @media (max-width: 540px) {
    margin-right: 15px;
  }
  @media (max-width: 450px) {
    margin-right: 10px;
  }
  @media (max-width: 390px) {
    margin-right: 5px;
  }
  @media (max-width: 340px) {
    margin-right: 0px;
  }
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

  @media (max-width: 768px) {
    width: 60px;
    height: 30px;
    font-size: 0.7em;
  }
  @media (max-width: 650px) {
    width: 60px;
    height: 30px;
    font-size: 0.7em;
  }
  @media (max-width: 580px) {
    font-size: 0.6em;
  }
`;
