import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
// import noticeData from "./noticeData.json";

const noticeFormList = [
  {
    id: 1,
    created_at: "2022-08-15",
    title: "광복절날은 정상운영합니다.",
    description: "안녕하세요 뜨리먼뜨입니다.",
    // img_src: "이미지주소",
  },
  {
    id: 2,
    created_at: "2022-08-16",
    title: "New Event",
    description: "안녕하세요 뜨리먼뜨입니다.",
    // img_src: "이미지주소",
  },
  {
    id: 3,
    created_at: "2022-08-17",
    title: "내일까지 계속 됩니다.",
    description: "안녕하세요 뜨리먼뜨입니다.",
    // img_src: "이미지주소",
  },
];

const NoticeListBox = () => {
  const navigate = useNavigate();
  // const goNoticeDetail = (id) => {
  //   navigate(`/noticedetail/${id}`);
  // };
  return (
    <NoticeListBoxContainer>
      <ListBox>
        <NoticeBoxListMenu>
          <MenuNum>글 번호</MenuNum>
          <MenuTitle>제목</MenuTitle>
          <MenuDate>작성일</MenuDate>
        </NoticeBoxListMenu>
        <NoticeList>
          {noticeFormList.map((list, idx) => (
            <NoticeListContents key={idx}>
              <NoticeListBoxContent>{list.id}</NoticeListBoxContent>
              <NoticeListBoxContent
                onClick={() => {
                  navigate(`/noticedetail/${list.id}`);
                }}
              >
                {list.title}
              </NoticeListBoxContent>
              <NoticeListBoxContent>{list.created_at}</NoticeListBoxContent>
            </NoticeListContents>
          ))}
        </NoticeList>
      </ListBox>
    </NoticeListBoxContainer>
  );
};

export default NoticeListBox;

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
  width: 100%;
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

const NoticeList = styled.ul`
  width: 100%;
  min-height: 100px;
  border-radius: 20px; ;
`;

const NoticeListContents = styled.div`
  border-style: none;
  display: grid;
  grid-template-columns: 0.5fr 5fr 1fr;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 10px;
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1em;
  @media (max-width: 450px) {
    grid-template-columns: 0.5fr 2fr 1fr;
    grid-template-rows: 1fr 0.4fr;
    padding: 5px;
    align-items: center;
    font-size: 2em;
  }
`;

const NoticeListBoxContent = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
