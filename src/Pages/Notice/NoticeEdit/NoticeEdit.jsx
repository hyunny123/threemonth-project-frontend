import React, { useState } from "react";
import styled from "styled-components";

const NoticeEdit = () => {
  const [noticeEditForm, setNoticeEditForm] = useState();

  return (
    <NoticeDetailContainer>
      <NoticeDetailForm>
        <NoticeDetailFormTitle>공지사항 수정페이지</NoticeDetailFormTitle>
        <NoticeDetailInputWrapper>
          <NoticeDetailTitle>8월 신제품 출시!</NoticeDetailTitle>
          <NoticeDetailDate>작성일자 : 2022.08.21</NoticeDetailDate>
          <NoticeDetailContent>신제품이 나왔어요!!!!</NoticeDetailContent>
        </NoticeDetailInputWrapper>
        <NoticeDetailBtnWrap>
          <NoticeDetailBtn>수정완료</NoticeDetailBtn>
        </NoticeDetailBtnWrap>
      </NoticeDetailForm>
    </NoticeDetailContainer>
  );
};

export default NoticeEdit;
const NoticeDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  margin: 100px 0px;
  color: ${({ theme }) => theme.fontColor};
`;

const NoticeDetailForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  @media (max-width: 768px) {
    font-size: 15px;
    width: 90%;
  }
`;

const NoticeDetailFormTitle = styled.p`
  font-size: 30px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const NoticeDetailInputWrapper = styled.form`
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(3, 50px);
  grid-template-columns: 1fr;
  box-sizing: border-box;
  margin-top: 50px;
  width: 100%;
  color: ${({ theme }) => theme.fontColor};
  border: 7px solid ${({ theme }) => theme.bgColor};
`;

const NoticeDetailTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-size: 17px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const NoticeDetailDate = styled(NoticeDetailTitle)`
  justify-content: flex-start;
  height: 60%;
`;

const NoticeDetailContent = styled.textarea`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 20px;
  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.fontColor};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 17px;
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const NoticeDetailBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoticeDetailBtn = styled.button`
  border-style: none;
  margin-top: 100px;
  margin-left: 10px;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.fontColor};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  cursor: pointer;
  @media (max-width: 900px) {
    width: 100px;
    height: 50px;
    font-size: 15px;
    margin-top: 50px;
  }
  @media (max-width: 650px) {
    width: 75px;
    height: 45px;
    font-size: 13px;
    margin-top: 50px;
  }
`;
