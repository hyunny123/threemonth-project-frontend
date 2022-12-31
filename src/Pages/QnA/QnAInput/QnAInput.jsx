import React, { useState } from "react";
import styled from "styled-components";
import { API, USER_TOKEN } from "../../../config";
import axios from "axios";
import { useNavigate } from "react-router";

const QnAInput = () => {
  const navigate = useNavigate();
  const [qnaContentsValue, setQnaContentsValue] = useState("");
  const { QNA_LIST } = API;
  const qnaTitleHandle = (e) => {
    const { name, value } = e.target;
    setQnaContentsValue({
      ...qnaContentsValue,
      [name]: value,
    });
  };
  const { title, content } = qnaContentsValue;
  const qnaCheckValue = title !== "" && content !== "";
  const QnAPostSubmit = () => {
    if (!qnaCheckValue) {
      alert("내용을 입력해 주세요");
    } else {
      if (window.confirm("작성 하시겠습니까?")) {
        axios
          .post(
            `${QNA_LIST}`,
            { content, title },
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
            maxLength="50"
          />
          <QnaContentInputDiv>
            <QnAContentInput
              name="content"
              wrap="hard"
              cols="20"
              rows="20"
              placeholder="내용을 입력하세요"
              onChange={qnaTitleHandle}
            />
          </QnaContentInputDiv>
        </QnAInputContents>
        <QnAInputSubmitBtn onClick={QnAPostSubmit}>작성 하기</QnAInputSubmitBtn>
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
  box-sizing: border-box;
  padding-left: 20px;
  margin-bottom: 20px;
  font-size: 1.2em;
  color: ${({ theme }) => theme.fontColor};
  &:focus {
    outline: none;
  }
`;
const QnaContentInputDiv = styled.div`
  min-height: 400px;
  border: 1px solid #cccccc;
  width: 100%;
`;
const QnAContentInput = styled.textarea`
  border-style: none;
  width: 100%;
  height: 100%;
  resize: none;
  box-sizing: border-box;
  padding: 10px 20px;
  font-size: 1.2em;
  color: ${({ theme }) => theme.fontColor};
  &:focus {
    outline: none;
  }
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
  cursor: pointer;
  @media (max-width: 600px) {
    width: 150px;
    height: 40px;
    font-size: 15px;
  }
`;
