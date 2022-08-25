import axios from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router";
import styled from "styled-components";
import { USER_TOKEN } from "../../../config";

const NoticeInput = () => {
  const [inputData, setInputData] = useState("");
  const navigate = useNavigate();

  const inputDatahandler = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  // const noticeCheckValue = title !== "" && content !== "";
  const noticeSubmitBtn = () => {
    // if (!noticeCheckValue) {
    //   alert("내용을 입력해 주세요.");
    // } else {
    //   if (window.confirm("작성 하시겠습니까?")) {
    //     axios
    //       .post(
    //         `url`,
    //         {
    //           // title,
    //           // content,
    //           // img_src,
    //         },
    //         {
    //           headers: {
    //             Authorization: `Bearer ${USER_TOKEN}`,
    //             "Content-Type": "application/json;charset=UTF-8",
    //           },
    //         }
    //       )
    //       .then((res) => {
    //         if (res.status === 201) {
    //           navigate("/noticelist");
    //         }
    //       });
    //   }
    // }
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
        <InputWrapper>
          <InputTitle
            type="text"
            onChange={inputDatahandler}
            name="noticetitle"
            placeholder="제목을 입력하세요."
          />
          <InputContentWrapper>
            <InputContent
              type="text"
              name="noticeContent"
              onChange={inputDatahandler}
              placeholder="내용을 입력해주세요."
              wrap="hard"
              rows="20"
              cols="20"
            />
          </InputContentWrapper>
        </InputWrapper>
        <InputImage type="file" accept="image/*" onChange={inputDatahandler} />
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

const InputWrapper = styled.div`
  min-height: 500px;
`;

const InputTitle = styled.input`
  border-style: none;
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
  padding-left: 20px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.fontColor};
  font-size: 1.2em;
  &:focus {
    outline: none;
  }
`;

const InputContentWrapper = styled.div`
  min-height: 400px;
  border: 1px solid #cccccc;
  width: 100%;
`;

const InputContent = styled.textarea`
  border-style: none;
  width: 100%;
  height: 100%;
  resize: none;
  box-sizing: border-box;
  padding: 10px 20px;
  font-size: 1.2em;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.fontColor};
  &:focus {
    outline: none;
  }
`;

const InputImage = styled.input``;
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
