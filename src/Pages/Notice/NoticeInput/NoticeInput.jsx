import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import { USER_TOKEN } from "../../../config";

const NoticeInput = () => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];
  const [InputData, setInputData] = useState("");
  // console.log(InputData);
  const noticeSubmitBtn = () => {
    fetch("", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${USER_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        InputData,
      }),
    }).then((res) => res.json());
    // .then((res)=>console.log(res));
  };
  return (
    <NoticeInputContainer>
      <NoticeInputWrapper>
        <NoticeInputTitle>공지사항 입력폼</NoticeInputTitle>
        <ReactQuillWrapper>
          <ReactQuill
            style={{ height: "400px" }}
            value={InputData}
            theme="snow"
            modules={modules}
            formats={formats}
            onChange={setInputData}
          />
        </ReactQuillWrapper>
        <NoticeInputBtnWrapper>
          <NoticeInputBtn onClick={noticeSubmitBtn}>작성하기</NoticeInputBtn>
        </NoticeInputBtnWrapper>
      </NoticeInputWrapper>
    </NoticeInputContainer>
  );
};

export default NoticeInput;

const NoticeInputContainer = styled.div`
  width: 100%;
`;

const NoticeInputWrapper = styled.div`
  width: 85%;
  margin: 100px auto;
`;

const NoticeInputTitle = styled.h2`
  text-align: center;
  margin: 50px 0;
  font-size: 30px;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.fontColor};
`;

const ReactQuillWrapper = styled.div`
  min-height: 500px;
`;

const NoticeInputBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoticeInputBtn = styled.button`
  border-style: none;
  margin-left: 10px;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.fontColor};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  cursor: pointer;
  @media (max-width: 900px) {
    width: 100px;
    height: 50px;
    font-size: 15px;
  }
  @media (max-width: 400px) {
    width: 85px;
    height: 45px;
    font-size: 13px;
    margin-top: 30px;
  }
`;
