import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import styled from "styled-components";
import Loading from "../../../components/Loading";
import NoticeListBox from "./NoticeListBox/NoticeListBox";

const NoticeList = () => {
  const navigate = useNavigate();

  // const [writeBtn, setWriteBtn] = useState(false);

  // const [noticeFormList, setNoticeFormList] = useState([
  //   {
  //     id: 0,
  //     title: "",
  //     created_at: "",
  //     content: "",
  //   },
  // ]);

  // const {NOTICE_FORM_LIST} = API;

  // if (noticeFormList.length === 0) {
  //   return <NoticeListNoContents />;
  // }

  // const sortedNoticeList = [...noticeFormList]
  //   .sort(function (a, b) {
  //     if (a.id > b.id) {
  //       return 1;
  //     }
  //     if (a.id < b.id) {
  //       return -1;
  //     }
  //     return 0;
  //   })
  //   .reverse();
  // if (noticeFormList[0].id === 0) {
  //   return <Loading />;
  // }

  return (
    <NoticeFormListContainer>
      <NoticeFormList>
        <NoticFormTitle>공지사항</NoticFormTitle>
        <NoticeListBox />
        {/* {USER_TOKEN ? (
          <NoticeWriteBtnWrapper>
            <NoticeWriteBtn
            // onClick={() => {
            //  navigate("/noticeinput");
            // }}
            >
              글쓰기
            </NoticeWriteBtn>
          </NoticeWriteBtnWrapper>
        ) : null} */}
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
