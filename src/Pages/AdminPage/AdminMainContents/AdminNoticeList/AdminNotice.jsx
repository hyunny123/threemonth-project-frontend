import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { USER_TOKEN } from "../../../../config";
import AdminNoticeListBox from "./AdminNoticeListBox";
import { useNavigate } from "react-router";

const AdminNotice = () => {
  return <NoticeFormListContainer />;
};

export default AdminNotice;

const NoticeFormListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const NoticeFormList = styled.div`
  margin: 80px 0;
  width: 85%;
`;

const NoticFormTitle = styled.p`
  font-size: 1.6em;
  @media (max-width: 580px) {
    padding: 0 20px;
  }
`;

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
