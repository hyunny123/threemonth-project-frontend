import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { API } from "../../config";

const NoticeDetail = () => {
  const { NOTICE_GET } = API;
  const [noticeDetailData, setNoticeDetailData] = useState({
    id: 0,
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${NOTICE_GET}/${params.noticeId}`)
      .then((res) => setNoticeDetailData(res.data));
  }, [params.noticeId]);

  const { title, created_at, content, img1_url, img2_url, img3_url } =
    noticeDetailData;

  return (
    <NoticeDetailContainer>
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
              navigate(-1);
            }}
          >
            목록으로
          </NoticeDetailBtn>
        </NoticeDetailBtnWrap>
      </NoticeDetailForm>
    </NoticeDetailContainer>
  );
};

export default NoticeDetail;

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
  @media (max-width: 580px) {
    width: 100%;
  }
`;

const NoticeDetailFormTitle = styled.p`
  font-size: 1.6em;
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
  @media (max-width: 580px) {
    font-size: 1em;
    padding: 0 20px;
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
  @media (max-width: 610px) {
    font-size: 0.8em;
  }
  @media (max-width: 450px) {
    font-size: 0.6em;
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
  @media (max-width: 610px) {
    font-size: 0.8em;
  }
  @media (max-width: 450px) {
    font-size: 0.6em;
  }
`;
const NoticeDetailImgs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NoticeDetailImg = styled.img`
  width: 600px;
  margin: 10px 0px;
  @media (max-width: 750px) {
    width: 80%;
  }
  @media (max-width: 750px) {
    width: 70%;
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
