import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { API } from "../../../../config";

import AdminNoticeListBox from "./AdminNoticeListBox";
import AdminNoticeInput from "./AdminNoticeInput";

const AdminNotice = () => {
  const { ADMIN_NOTICE } = API;
  const [addNoticeInputOpen, setAddNoticeInputOpen] = useState(false);
  const [adminNoticeData, setAdminNoticeData] = useState([
    {
      id: 0,
      title: "",
      created_at: "",
    },
  ]);

  useEffect(() => {
    axios
      .get(`${ADMIN_NOTICE}`)
      .catch((error) => error(error.message))
      .then((res) => setAdminNoticeData(res.data));
  }, []);
  return (
    <NoticeFormListContainer>
      <NoticeFormList>
        <NoticFormTitle>공지사항</NoticFormTitle>
        <AdminNoticeListBox adminNoticeData={adminNoticeData} />
      </NoticeFormList>
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
  cursor: pointer;
`;
