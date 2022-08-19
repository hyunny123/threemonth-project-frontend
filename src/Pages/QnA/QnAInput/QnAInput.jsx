import React, { useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { USER_TOKEN } from "../../../config";

const QnAInput = () => {
  const [qnaInputValue, setQnaInputValue] = useState("");
  const QnASubmit = () => {
    if (qnaInputValue === "") {
      alert("내용을 입력해 주세요");
    } else {
      fetch("", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${USER_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ qnaInputValue }),
      }).then((res) => res.json());
    }
  };
  return (
    <QnAInputWrap>
      <QnAInputWidth>
        <QnAInputTitle>QnA 작성하기</QnAInputTitle>
        <QnAInputContents>
          <ReactQuill
            theme="snow"
            value={qnaInputValue}
            onChange={setQnaInputValue}
            style={{ height: "400px" }}
          />
        </QnAInputContents>
        <QnAInputSubmitBtn onClick={QnASubmit}>작성 하기</QnAInputSubmitBtn>
      </QnAInputWidth>
    </QnAInputWrap>
  );
};

export default QnAInput;

const QnAInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 800px;
`;
const QnAInputWidth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
`;
const QnAInputTitle = styled.p`
  margin: 50px 0;
  font-size: 30px;
`;
const QnAInputContents = styled.div`
  min-height: 500px;
  width: 100%;
`;
const QnAInputSubmitBtn = styled.button`
  border-style: none;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
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
