import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const AdminNoticeDetailBox = ({ adminNoticeDetail }) => {
  const [noticeDetailOpen, setNoticeDetailOpen] = useState(false);
  const { id, title, created_at, content, img1_url, img2_url, img3_url } =
    adminNoticeDetail;

  const navigate = useNavigate();
  return (
    <NoticeDetailContainer>
      {noticeDetailOpen && (
        <NoticeDetailForm>
          <NoticeDetailFormTitle>공지사항 상세페이지</NoticeDetailFormTitle>
          <NoticeDetailInputWrapper>
            <NoticeDetailTitle name="noticetitle">{title}</NoticeDetailTitle>

            <NoticeDetailDate>
              작성일자 : {String(created_at).slice(0, 10)}
            </NoticeDetailDate>

            <NoticeDetailContent name="noticeContent">
              {content}
            </NoticeDetailContent>
            <NoticeDetailImgs>
              {img1_url && <NoticeDetailImg src={img1_url} />}
              {img2_url && <NoticeDetailImg src={img2_url} />}
              {img3_url && <NoticeDetailImg src={img3_url} />}
            </NoticeDetailImgs>
          </NoticeDetailInputWrapper>
          <NoticeDetailBtnWrap>
            <NoticeDetailBtn
              onClick={() => {
                setNoticeDetailOpen(!noticeDetailOpen);
              }}
            >
              닫기
            </NoticeDetailBtn>
          </NoticeDetailBtnWrap>
        </NoticeDetailForm>
      )}
    </NoticeDetailContainer>
  );
};

export default AdminNoticeDetailBox;

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

const NoticeDetailContent = styled.div`
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
const NoticeDetailImgs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NoticeDetailImg = styled.img`
  height: 100px;
  margin: 10px 0px;
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

const NoticeDetailUpdateBtn = styled.button`
  border-style: none;
  margin-top: 100px;
  margin-left: 10px;
  width: 100px;
  height: 50px;
  border-radius: 5px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.fontColor};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  cursor: pointer;
  @media (max-width: 900px) {
    width: 50px;
    height: 50px;
    font-size: 15px;
    margin-top: 50px;
  }
  @media (max-width: 650px) {
    width: 45px;
    height: 45px;
    font-size: 13px;
    margin-top: 50px;
  }
`;
const NoticeDetailDeleteBtn = styled(NoticeDetailUpdateBtn)``;
