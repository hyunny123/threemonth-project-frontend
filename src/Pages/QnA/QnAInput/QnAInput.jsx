import React, { useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { USER_TOKEN } from "../../../config";
import axios from "axios";
import { useNavigate } from "react-router";

const QnAInput = () => {
  const navigate = useNavigate();
  const [qnaContentValue, setQnaContentValue] = useState("");
  const [qnaTitleValue, setQnaTitleValue] = useState("");
  const qnaTitleHandle = (e) => {
    const { name, value } = e.target;
    setQnaTitleValue({
      ...qnaTitleValue,
      [name]: value,
    });
  };
  const qnaCheckValue = qnaContentValue !== "" && qnaTitleValue !== "";
  const QnASubmit = () => {
    if (!qnaCheckValue) {
      alert("내용을 입력해 주세요");
    } else {
      axios
        .post(
          `http://15.164.163.31:8001/announcements/QnA`,
          { content: qnaContentValue, title: qnaTitleValue.title },
          {
            headers: {
              Authorization: `Bearer ${USER_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          if (res.status === 201) {
            navigate("/qnalist");
          } else {
            alert("다시 시도해 주세요.");
          }
        });
    }
  };

  return (
    <QnAInputWrap>
      <QnAInputWidth>
        <QnAInputTitle>QnA 작성하기</QnAInputTitle>
        <QnAInputContents>
          <QnaTitleInput
            placeholder="제목을 입력하세요"
            name="title"
            onChange={qnaTitleHandle}
            type="text"
          />
          <ReactQuill
            theme="snow"
            value={qnaContentValue}
            onChange={setQnaContentValue}
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
const QnaTitleInput = styled.input`
  border-style: none;
  border: 1px solid #cccccc;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  font-size: 1.2em;
  font-family: ${({ theme }) => theme.fontFamily};
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
