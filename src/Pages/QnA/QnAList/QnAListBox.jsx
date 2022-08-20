import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import QnANoList from "./QnANoList";

const QnAListBox = () => {
  const navigate = useNavigate();
  const [qnaList, setQnaList] = useState([
    {
      id: 0,
      content: "",
      title: "",
    },
  ]);
  useEffect(() => {
    axios
      .get("http://15.164.163.31:8001/announcements/QnA")
      // .get("/data/qnadata.json")
      // .then((res) => setQnaList(res.data.result));
      .then((res) => setQnaList(res.data));
  }, []);
  const sortedQnAList = [...qnaList]
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
  if (qnaList.length === 0) {
    return <QnANoList />;
  }
  return (
    <>
      {sortedQnAList.map((list, idx) => (
        <QnAContentsDetailWrap key={idx}>
          <QnAContent>{list.id}</QnAContent>
          <QnAContent
            onClick={() => {
              navigate(`/qna/${list.id}`);
            }}
          >
            {list.title}
          </QnAContent>
          <QnAContent>{list.user_nickname}님</QnAContent>
          <QnAContent>{String(list.created_at).slice(0, 10)}</QnAContent>
        </QnAContentsDetailWrap>
      ))}
    </>
  );
};
export default QnAListBox;

const QnAContentsDetailWrap = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  box-sizing: border-box;
  padding: 5px;
  grid-template-columns: 0.5fr 3fr 1fr 1fr;
  place-items: center;
  margin-bottom: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
`;
const QnAContent = styled.p`
  line-height: 1.3;
  &:nth-child(2) {
    width: 100%;
    justify-content: flex-start;
    cursor: pointer;
  }
`;
