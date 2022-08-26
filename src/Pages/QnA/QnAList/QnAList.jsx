import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import Loading from "../../../components/Loading";
import { API, USER_TOKEN } from "../../../config";
import FnQ from "./FAQ";
import QnAListBox from "./QnAListBox";

const QnAList = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [faqList, setFaqList] = useState([
    {
      id: 0,
      question: "",
      awnser: "",
    },
  ]);
  const { FAQ_LIST } = API;

  useEffect(() => {
    axios.get(`${FAQ_LIST}`).then((res) => setFaqList(res.data));
  }, [FAQ_LIST]);

  if (faqList[0].id === 0) {
    return <Loading />;
  }

  return (
    <QnAListWrap>
      <QnAListWidth>
        <FnQ faqList={faqList} />
        <QnATitle>QnA</QnATitle>
        <QnAMenuWrap>
          <QnAMenuId>글 번호</QnAMenuId>
          <QnAMenuTitle>제목</QnAMenuTitle>
          <QnAMenuName>작성자</QnAMenuName>
          <QnAMenuTime>작성 시간</QnAMenuTime>
        </QnAMenuWrap>
        <QnAContentsWrap>
          <QnAListBox />
          <QnABtnBtnWrap>
            <QnABtn
              onClick={() => {
                if (USER_TOKEN) {
                  navigate("/qnainput");
                } else {
                  if (
                    window.confirm(
                      "로그인이 필요한 서비스입니다. 로그인 하시겠습니까?"
                    )
                  ) {
                    localStorage.setItem("prevpath", pathname);
                    navigate("/loginpage");
                  }
                }
              }}
            >
              질문하기
            </QnABtn>
          </QnABtnBtnWrap>
        </QnAContentsWrap>
      </QnAListWidth>
    </QnAListWrap>
  );
};

export default QnAList;

const QnAListWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;
const QnAListWidth = styled.div`
  width: 85%;
`;
const QnATitle = styled.p`
  margin-top: 50px;
  margin-bottom: 20px;

  width: 100%;
  font-size: 20px;
`;

const QnAMenuWrap = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0.5fr 3fr 0.7fr 0.7fr;
  place-items: center;
  box-sizing: border-box;
  padding-bottom: 15px;
  margin-bottom: 10px;
  border-bottom: 4px solid ${({ theme }) => theme.bgColor};
`;
const QnAMenuId = styled.p``;
const QnAMenuTitle = styled.p``;
const QnAMenuName = styled.p``;
const QnAMenuTime = styled.p``;

const QnAContentsWrap = styled.div`
  min-height: 200px;
  margin-bottom: 50px;
`;
const QnABtnBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;
const QnABtn = styled.button`
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
  @media (max-width: 768px) {
    width: 100px;
    height: 25px;
    font-size: 0.6em;
    font-weight: bold;
  }
`;
