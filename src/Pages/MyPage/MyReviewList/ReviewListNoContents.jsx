import React from "react";
import styled from "styled-components";

const ReviewListNoContents = ({ reviewList }) => {
  return (
    <MyReviewListContainer>
      <MyReviewListWrap>
        <MyReviewListTitle>리뷰 리스트</MyReviewListTitle>
        <MyReviewListBox>
          <ListBox>
            <ListBoxMenu>
              <MenuNum>리뷰 번호/날짜</MenuNum>
              <MenuDate>리뷰</MenuDate>
              <MenuIsReviewChecked>삭제</MenuIsReviewChecked>
            </ListBoxMenu>
            <List>
              <NoContentWrap>
                <NoContent>리뷰작성 내역이 없습니다.</NoContent>
              </NoContentWrap>
            </List>
          </ListBox>
        </MyReviewListBox>
      </MyReviewListWrap>
    </MyReviewListContainer>
  );
};

export default ReviewListNoContents;

const MyReviewListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.fontColor};
  @media (max-width: 580px) {
    width: 100%;
  }
`;

const MyReviewListWrap = styled.div`
  margin: 80px 0;
  width: 85%;
  @media (max-width: 580px) {
    width: 100%;
  }
`;
const MyReviewListTitle = styled.p`
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

const ListBoxMenu = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 3fr 0.4fr;
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

const MenuNum = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 580px) {
    font-size: 13px;
  }
`;

// const MenuTitle = styled(MenuNum)`
//   @media (max-width: 580px) {
//   }
// `;

const MenuDate = styled(MenuNum)`
  @media (max-width: 580px) {
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 0 10px;
  }
`;

const MenuIsReviewChecked = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 450px) {
    display: none;
  }
`;
