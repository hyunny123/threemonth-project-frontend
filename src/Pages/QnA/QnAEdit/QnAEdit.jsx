import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation, useParams } from "react-router";
import NotValidBtn from "../../../components/NotValidBtn";
import axios from "axios";
import { USER_TOKEN } from "../../../config";

const QnAEdit = () => {
  const location = useLocation();
  const { qnaId } = useParams();
  const [qnaEditValue, setQnaEditValue] = useState(location.state.data);
  const navigate = useNavigate();
  const { title, content } = qnaEditValue;
  if (!location.state.data) {
    return <NotValidBtn />;
  }

  const qnaTitleEditHandle = (e) => {
    const { name, value } = e.target;
    setQnaEditValue({
      ...qnaEditValue,
      [name]: value,
    });
  };
  const qnaCheckValue = content !== "" && title !== "";
  const qnAEditSubmit = () => {
    if (qnaCheckValue) {
      axios
        .patch(
          `http://15.164.163.31:8001/announcements/QnA/${qnaId}`,
          { title, content },
          {
            headers: {
              Authorization: `Bearer ${USER_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            alert("수정이 완료되었습니다.");
            navigate(`/qna/${qnaId}`);
          }
        });
    } else {
      alert("빈칸을 확인하세요");
    }
  };

  return (
    <QnAEditWrap>
      <QnAEditWidth>
        <QnAEditTitle>QnA 수정하기</QnAEditTitle>
        <QnAEditContents>
          <QnaTitleEditInput
            placeholder="제목을 입력하세요"
            name="title"
            value={title}
            onChange={qnaTitleEditHandle}
            type="text"
          />
          <QnaContentEditInputDiv>
            <QnaContentEditInput
              name="content"
              value={content}
              wrap="hard"
              placeholder="내용을 입력하세요"
              cols="20"
              rows="20"
              onChange={qnaTitleEditHandle}
            />
          </QnaContentEditInputDiv>
        </QnAEditContents>
        <QnAEditSubmitBtn onClick={qnAEditSubmit}>수정 하기</QnAEditSubmitBtn>
      </QnAEditWidth>
    </QnAEditWrap>
  );
};

export default QnAEdit;
const QnAEditWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 800px;
`;
const QnAEditWidth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
`;
const QnAEditTitle = styled.p`
  margin: 50px 0;
  font-size: 30px;
`;
const QnaTitleEditInput = styled.input`
  border-style: none;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  padding-left: 20px;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  font-size: 1.2em;
  font-family: ${({ theme }) => theme.fontFamily};
  &:focus {
    outline: none;
  }
`;
const QnaContentEditInputDiv = styled.div`
  min-height: 400px;
  border: 1px solid #cccccc;
  width: 100%;
`;
const QnaContentEditInput = styled.textarea`
  border-style: none;
  width: 100%;
  height: 100%;
  resize: none;
  box-sizing: border-box;
  padding: 10px 20px;
  font-size: 1.2em;
  font-family: ${({ theme }) => theme.fontFamily};
  &:focus {
    outline: none;
  }
`;
const QnAEditContents = styled.div`
  min-height: 500px;
  width: 100%;
`;
const QnAEditSubmitBtn = styled.button`
  border-style: none;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.fontColor};
  font-family: ${({ theme }) => theme.fontFamily};
  cursor: pointer;
  @media (max-width: 600px) {
    width: 150px;
    height: 40px;
    font-size: 15px;
  }
`;
