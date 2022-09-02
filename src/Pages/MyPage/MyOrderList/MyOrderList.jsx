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
              {/* <MenuNum>글 번호</MenuNum> */}
              <MenuDate>주문 날짜</MenuDate>
              <MenuTitle>주문타이틀</MenuTitle>

              {/* <MenuIsReviewChecked>리뷰확인</MenuIsReviewChecked> */}
            </ListBoxMenu>
          </ListBox>
          <List>
            {orderList.map((list, idx) => (
              <ListBoxContents key={idx}>
                {/* <ListBoxContent>{list.id}</ListBoxContent> */}
                <ListBoxContent>{list.created_at.slice(0, 10)}</ListBoxContent>
                <ListBoxContent
                  onClick={() => {
                    goFormDetail(list.id);
                  }}
                >
                  {list.title}
                </ListBoxContent>
                {/* <ListBoxContent>{list.created_at}</ListBoxContent> */}
                {/* <ListBoxContentBtnWrap>
                  {list.review_id ? (
                    <ListBoxContentReviewBtn>작성완료</ListBoxContentReviewBtn>
                  ) : (
                    <ListBoxContentBtn
                      onClick={() => {
                        navigate("/myreviewinput/");
                      }}
                    >
                      {list.review_id}리뷰쓰기
                    </ListBoxContentBtn>
                  )}
                </ListBoxContentBtnWrap> */}
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
  @media (max-width: 580px) {
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
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 30px;
  box-sizing: border-box;
  border-bottom: 4px solid ${(props) => props.theme.bgColor};
  margin-top: 50px;
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
const MenuTitle = styled(MenuDate)`
  @media (max-width: 580px) {
  }
`;

// const MenuDate = styled(MenuDate)`
//   @media (max-width: 580px) {
//     justify-content: flex-end;
//     box-sizing: border-box;
//     padding: 0 10px;
//   }
// `;

const MenuIsReviewChecked = styled.div`
  display: flex;
  justify-content: center;
  /* @media (max-width: 450px) {
    display: none;
  } */
  @media (max-width: 580px) {
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 0 10px;
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
  grid-template-columns: 1fr 5fr 1fr;
  width: 100%;
  background-color: white;
  font-family: ${({ theme }) => theme.fontFamily};
  border-bottom: 1px solid ${(props) => props.theme.bgColor};
  font-size: 1em;
  cursor: pointer;
  box-sizing: border-box;
  padding: 10px 10px;
  /* @media (max-width: 450px) {
    grid-template-columns: 0.5fr 2fr 1fr;
    grid-template-rows: 1fr 0.4fr;
    padding: 5px;
    align-items: center;
    font-size: 2em;
  } */
`;

const ListBoxContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(2) {
    justify-content: flex-start;
    align-items: center;
    text-align: start;
    cursor: pointer;
  }
  &:nth-child(3) {
    place-items: center;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
  }
  &:nth-child(4) {
    justify-content: center;
    align-items: center;
  }
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

const ListBoxContentBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
`;

const ListBoxContentReviewBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  border-radius: 5px;
  background-color: ${({ review_id }) => review_id && "grey"};
  color: ${({ theme }) => theme.fontColor};
  width: 80px;
  height: 40px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

const ListBoxContentBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.fontColor};
  width: 80px;
  height: 40px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily};
`;
