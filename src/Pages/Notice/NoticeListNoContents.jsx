import React from "react";
import styled from "styled-components";

const NoticeListNoContents = () => {
  return (
    <NoticeListBoxContainer>
      <ListBox>
        <NoticeBoxListMenu>
          <MenuNum>글 번호</MenuNum>
          <MenuTitle>제목</MenuTitle>
          <MenuDate>작성일</MenuDate>
        </NoticeBoxListMenu>
        <NoNoticeContentWrapper>
          <NoNoticeContent>공지사항이 없습니다.</NoNoticeContent>
        </NoNoticeContentWrapper>
      </ListBox>
    </NoticeListBoxContainer>
  );
};

export default NoticeListNoContents;

const NoticeListBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 1em;
  @media (max-width: 580px) {
    width: 100vw;
  }
`;

const ListBox = styled.div`
  width: 85%;
  min-height: 400px;
  border-radius: 20px;
`;

const NoticeBoxListMenu = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 5fr 1fr;
  grid-template-rows: 50px;
  box-sizing: border-box;
  border-bottom: 4px solid ${({ theme }) => theme.bgColor};
  margin-top: 50px;
  @media (max-width: 580px) {
    grid-template-columns: 0.5fr 5fr 1fr;
    grid-template-rows: 30px;
  }
  @media (max-width: 450px) {
    grid-template-columns: 0.5fr 2fr 1fr;
    grid-template-rows: 20px;
    font-size: 14px;
  }
`;

const MenuNum = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 580px) {
    font-size: 13px;
  }
`;

const MenuTitle = styled(MenuNum)``;
const MenuDate = styled(MenuNum)`
  @media (max-width: 580px) {
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 0 10px;
  }
`;

const NoNoticeContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 20px;
`;

const NoNoticeContent = styled.p`
  color: ${({ theme }) => theme.fontColor};
`;
