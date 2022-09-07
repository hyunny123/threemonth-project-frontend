import axios from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router";
import styled from "styled-components";
import { USER_TOKEN } from "../../../config";

const NoticeInput = () => {
  const [uploadData, setUploadData] = useState({
    content: "",
    title: "",
    img_url: "",
  });
  const [imgValue, setImgValue] = useState([]);
  const [prevImg, setPrevImg] = useState([]);
  const navigate = useNavigate();

  const uploadContent = (e) => {
    const { target } = e;
    setUploadData({ ...uploadData, [target.name]: target.value });
  };

  const uploadImg = (e) => {
    // console.log(e.target.files[0]);
    // console.log(e.target.files[1]);
    // console.log(e.target.files[2]);
    const { files } = e.target;
    setImgValue({
      ...imgValue,
      img1: files[0],
      img2: files[1],
      img3: files[2],
    });
    prevImgwURLImg(files);
  };

  const prevImgwURLImg = (value) => {
    const fileArr = value;
    let fileUrls = [];
    for (let i = 0; i < fileArr.length; i++) {
      let files = fileArr[i];
      let reader = new FileReader();
      reader.onload = () => {
        fileUrls[i] = reader.result;
        setPrevImg([...fileUrls]);
      };
      reader.readAsDataURL(files);
    }
    // const reader1 = new FileReader();
    // reader1.readAsDataURL(prev1);
    // reader1.onloadend = () => {
    //   setPrevImg({ ...prevImg, img1: reader1.result });
    // };
    // const reader2 = new FileReader();
    // reader2.readAsDataURL(prev2);
    // reader2.onloadend = () => {
    //   setPrevImg({ ...prevImg, img2: reader2.result });
    // };
    // const reader3 = new FileReader();
    // reader3.readAsDataURL(prev3);
    // reader3.onloadend = () => {
    //   setPrevImg({ ...prevImg, img3: reader3.result });
    // };
    // return prevImg;
  };

  // const noticeCheckValue = title !== "" && content !== "";
  const noticeSubmitBtn = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img1", imgValue.img1);
    formData.append("img2", imgValue.img2);
    formData.append("img3", imgValue.img3);
    formData.append("title", uploadData.title);
    formData.append("content", uploadData.content);

    axios
      .post(`http://threemonth.shop/announcement/notices`, formData, {
        headers: {
          Authorization: `Bearer ${USER_TOKEN}`,
        },
      })
      .catch((error) => error(error.message))
      .then((res) => {
        setUploadData(res.data);
        navigate("/noticelist");
      });
  };
  return (
    <NoticeInputContainer>
      <NoticeInputWrapper>
        <NoticeInputTitle>공지사항 입력폼</NoticeInputTitle>
        <InputWrapper>
          <InputTitle
            type="text"
            name="noticetitle"
            placeholder="제목을 입력하세요."
            onChange={uploadContent}
          />
          <InputContentWrapper>
            <InputContent
              type="text"
              name="noticeContent"
              placeholder="내용을 입력해주세요."
              wrap="hard"
              rows="20"
              cols="20"
              onChange={uploadContent}
            />
            <InputImage
              type="file"
              accept="image/*"
              onChange={uploadImg}
              multiple
              name="img"
              id="imageinput"
              style={{ display: "none" }}
            />
          </InputContentWrapper>
          {prevImg[0] && <PreviewImg src={prevImg[0]} />}
          {prevImg[1] && <PreviewImg src={prevImg[1]} />}
          {prevImg[2] && <PreviewImg src={prevImg[2]} />}
          <NoticeInputFileBtn htmlFor="imageinput">
            파일 선택하기
          </NoticeInputFileBtn>
        </InputWrapper>

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

const InputImage = styled.input`
  /* margin-top: 20px; */
`;

const NoticeInputFileBtn = styled.label`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  border-style: none;
  height: 40px;
  padding: 10px;
  font-size: 14px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bgColor};
  border: 2px solid ${({ theme }) => theme.fontColor};
  color: ${({ theme }) => theme.fontColor};
  font-family: ${({ theme }) => theme.fontFamily};
`;

const PreviewImg = styled.img`
  width: 200px;
  margin-top: 15px;
  padding-left: 10px;
`;

const PreveiwImgDelBtn = styled.button`
  border-style: none;
  width: 40px;
  height: 40px;
  font-size: 14px;
  margin-left: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bgColor};
  border: 2px solid ${({ theme }) => theme.fontColor};
  color: ${({ theme }) => theme.fontColor};
  font-family: ${({ theme }) => theme.fontFamily};
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
