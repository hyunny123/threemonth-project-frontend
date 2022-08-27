import React from "react";
import axios from "axios";
import styled from "styled-components";
import { USER_TOKEN } from "../../../config";

const MyReviewList = ({ reviewList }) => {
  return (
    <MyReviewListContainer>
      <MyReviewListWrap>
        <MyReviewListTitle>리뷰 리스트</MyReviewListTitle>
        <MyReviewListBox>
          <ListBox>
            <ListBoxMenu>
              {/* <BoxWrap /> */}
              <MenuNum>리뷰 번호/날짜</MenuNum>
              {/* <MenuTitle>작성 날짜</MenuTitle> */}
              <MenuDate>리뷰</MenuDate>
              <MenuIsReviewChecked>삭제</MenuIsReviewChecked>
            </ListBoxMenu>
            {reviewList.map((list, idx) => (
              <MyReviewListWrapper key={idx}>
                <MyReviewUserWrap>
                  <MyReviewUserName>{list.user_nickname}님</MyReviewUserName>
                  <MyReviewDate>
                    {String(list.created_at).slice(0, 10)}
                  </MyReviewDate>
                </MyReviewUserWrap>
                <MyReviewContents>
                  <MyReviewContent>{list.content}</MyReviewContent>
                  {list.img_url && (
                    <MyReviewImg src={list.img_url} alt="ReviewImg" />
                  )}
                </MyReviewContents>
                <MyReviewDelBtnWrap>
                  <i
                    className="fa-solid fa-trash-can"
                    onClick={() => {
                      if (window.confirm("삭제하시겠습니까?")) {
                        axios
                          .delete(
                            `http://15.164.163.31:8001/orders/reviews/${list.id}`,
                            {
                              headers: {
                                Authorization: `Bearer ${USER_TOKEN}`,
                                "Content-Type": "application/json",
                              },
                            }
                          )
                          .then((res) => {
                            if (res.status === 204) {
                              window.location.reload();
                            }
                          });
                      }
                    }}
                  />
                </MyReviewDelBtnWrap>
              </MyReviewListWrapper>
            ))}
          </ListBox>
        </MyReviewListBox>
      </MyReviewListWrap>
    </MyReviewListContainer>
  );
};

export default MyReviewList;

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
const MenuNum = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 580px) {
    font-size: 13px;
  }
`;
const MenuTitle = styled(MenuNum)`
  @media (max-width: 580px) {
  }
`;

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

const MyReviewListWrapper = styled.div`
  display: flex;
  justify-items: center;

  min-height: 100px;
  margin-bottom: 40px;
  box-sizing: border-box;
  padding: 20px;
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 10px;
  color: ${({ theme }) => theme.fontColor};
`;

const MyReviewUserWrap = styled.div`
  margin-right: 40px;
  border-right: 1px solid ${({ theme }) => theme.fontColor};
  width: 200px;
`;

const MyReviewUserName = styled.p`
  color: ${({ theme }) => theme.fontColor};
  margin-bottom: 10px;
`;

const MyReviewDate = styled.p`
  color: ${({ theme }) => theme.fontColor};
`;
const MyReviewContents = styled.div`
  width: 100%;
`;
const MyReviewContent = styled.p`
  width: 100%;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.fontColor};
`;

const MyReviewImg = styled.img`
  width: 300px;
`;

const MyReviewDelBtnWrap = styled.div`
  margin-right: 15px;
`;
