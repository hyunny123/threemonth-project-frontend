import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();
  const [inputTitle, setInputTitle] = useState("");
  const [inputData, setInputData] = useState("");

  const inputTitlehandler = (e) => {
    const { name, value } = e.target;
    setInputTitle({ ...inputTitle, [name]: value });
  };

  const noticeSubmitBtn = () => {
    axios
      .post(
        `url`,
        {
          inputData,
          inputTitle,
        },
        {
          headers: {
            Authorization: `Bearer ${USER_TOKEN}`,
            "Content-Type": "application/json;charset=UTF-8",
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          navigate("/noticelist");
        }
      });

    // fetch("", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${USER_TOKEN}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     inputData,
    //   }),
    // }).then((res) => res.json());
    // .then((res)=>console.log(res));
  };

  return (
    <NoticeInputContainer>
      <NoticeInputWrapper>
        <NoticeInputTitle>공지사항 입력폼</NoticeInputTitle>
        <ReactQuillWrapper>
          <InputTitle
            type="text"
            onChange={inputTitlehandler}
            name="noticetitle"
            placeholder="제목을 입력하세요."
          />

          <ReactQuill
            style={{ height: "400px" }}
            value={inputData}
            theme="snow"
            modules={modules}
            formats={formats}
            onChange={setInputData}
          />
        </ReactQuillWrapper>
        <input type="file" />
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

const InputTitle = styled.input`
  border-style: none;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  border: 1px solid #cccccc;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1.2em;
`;

const NoticeInputBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoticeInputBtn = styled.button`
  border-style: none;
  margin-left: 10px;
  margin-top: 30px;
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
