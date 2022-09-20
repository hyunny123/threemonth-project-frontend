import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Loading from "../../components/Loading";
import NoticeListNoContents from "./NoticeListNoContents";
import NoticeListBox from "./NoticeListBox";
import { API } from "../../config";

const NoticeList = () => {
  const { NOTICE_GET } = API;
  const [noticeFormList, setNoticeFormList] = useState([
    {
      id: 0,
      title: "",
      created_at: "",
      content: "",
    },
  ]);

  useEffect(() => {
    axios.get(`${NOTICE_GET}`).then((res) => setNoticeFormList(res.data));
  }, [NOTICE_GET]);

  if (noticeFormList.length === 0) {
    return <NoticeListNoContents />;
  }
  const sortedNoticeList = [...noticeFormList]
    .sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    })
    .reverse();
  if (noticeFormList[0].id === 0) {
    return <Loading />;
  }

  return (
    <NoticeFormListContainer>
      <NoticeFormList>
        <NoticFormTitle>공지사항</NoticFormTitle>
        <NoticeListBox noticeFormList={sortedNoticeList} />
      </NoticeFormList>
    </NoticeFormListContainer>
  );
};

export default NoticeList;

const NoticeFormListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const NoticeFormList = styled.div`
  margin: 80px 0;
  width: 85%;
  @media (max-width: 580px) {
    width: 100%;
  }
`;

const NoticFormTitle = styled.p`
  font-size: 1.6em;
  @media (max-width: 580px) {
    padding: 0 20px;
  }
`;
