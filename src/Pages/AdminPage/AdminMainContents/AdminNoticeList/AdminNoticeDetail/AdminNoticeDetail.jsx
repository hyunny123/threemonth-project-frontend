import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { USER_TOKEN } from "../../../../../config";
import NoticeListNoContents from "../../../../Notice/NoticeListNoContents";
import Loading from "../../../../../components/Loading";
import NotValidBtn from "../../../../../components/NotValidBtn";

const AdminNoticeDetail = () => {
  // const [noticeDetailData, setNoticeDetailData] = useState({
  //   id: 0,
  //   // title: "",
  //   // content: "",
  //   // created_at: "",
  // });

  // const { id, title, created_at, content } = noticeDetailData;

  // const params = useParams();
  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect = () => {
  //   axios
  //     .get(`https://threemonth.shop/announcements/notices/${params.noticeId}`)
  //     .then((res) => setNoticeDetailData(res.data));
  // };

  // // const noticeEditHandler = (e) => {
  // //   const { name, value } = e.target;
  // //   setNoticeDetailData({ ...noticeDetailData, [name]: value });
  // // };

  // const noticeDetailInput = () => {
  //   const sortValue = content.replace(/\n/g, "<br>\n");
  //   return {
  //     __html: sortValue,
  //   };
  // };

  // if (location.state === null) {
  //   return <NotValidBtn />;
  // }

  // if (noticeData.id === 0) {
  //   return <Loading />;
  // }
  return <NoticeDetailContainer />;
};

export default AdminNoticeDetail;

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
