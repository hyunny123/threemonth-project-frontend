import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import axios from "axios";

import AdminNoticeListBox from "./AdminNoticeListBox";
import AdminNoticeDetailBox from "./AdminNoticeDetailBox";
import AdminNoticeInput from "./AdminNoticeInput";

const AdminNotice = () => {
  const [addNoticeInputOpen, setAddNoticeInputOpen] = useState(false);
  const [adminNoticeData, setAdminNoticeData] = useState([
    {
      id: 0,
      title: "",
      created_at: "",
    },
  ]);
  const [adminNoticeDetail, setAdminNoticeDetail] = useState([
    { id: 0, title: "", created_at: "", content: "" },
  ]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://threemonth.shop/announcements/notices`)
      .catch((error) => error(error.message))
      .then((res) => setAdminNoticeData(res.data));
    // axios
    //   .get(`https://threemonth.shop/announcements/notices/${params.noticeId}`)
    //   .catch((error) => error(error.response))
    //   .then((res) => setAdminNoticeDetail(res.data));
  }, []);
  return (
    <NoticeFormListContainer>
      <NoticeFormList>
        <NoticFormTitle>공지사항</NoticFormTitle>
        <AdminNoticeListBox adminNoticeData={adminNoticeData} />
      </NoticeFormList>
      {/* <NoticeFormList>
        <NoticFormTitle>공지사항 상세보기</NoticFormTitle>
        <AdminNoticeDetailBox adminNoticeDetail={adminNoticeDetail} />
      </NoticeFormList> */}
      <AdminAddNoticeBtn
        onClick={() => {
          setAddNoticeInputOpen(!addNoticeInputOpen);
        }}
      >
        공지사항 글쓰기 작성버튼
      </AdminAddNoticeBtn>
      {addNoticeInputOpen && <AdminNoticeInput />}
    </NoticeFormListContainer>
  );
};

export default AdminNotice;

const NoticeFormListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const NoticeFormList = styled.div`
  padding: 20px;
  margin: 80px 0;
  width: 85%;
`;

const NoticFormTitle = styled.p`
  font-size: 1.6em;
  @media (max-width: 580px) {
    padding: 0 20px;
  }
`;

const AdminAddNoticeBtn = styled.button`
  border-style: none;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 10px;
  width: 200px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily};
  cursor: pointer;
`;
// const AdminNoticInputForm = styled.div`
//   margin: 80px 0;
//   width: 85%;
// `;

const NoticeWriteBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;

const NoticeWriteBtn = styled.button`
  border-style: none;
  width: 150px;
  height: 40px;
  font-size: 17px;
  margin-left: 20px;
  background-color: ${({ theme }) => theme.bgColor};
  font-family: ${({ theme }) => theme.fontFamily};
  border: 1px solid ${({ theme }) => theme.fontColor};
  color: ${({ theme }) => theme.fontColor};
  cursor: pointer;
`;
