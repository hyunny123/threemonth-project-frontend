import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { USER_TOKEN } from "../../../../config";

const AdminNoticeEdit = () => {
  const location = useLocation();
  const initData = location.state.data;
  const [noticeEditForm, setNoticeEditForm] = useState(initData);

  const navigate = useNavigate();
  const { noticeId } = useParams();

  const [imgValue, setImgValue] = useState([]);
  const [prevImg, setPrevImg] = useState([]);

  const uploadNoticeEditFile = (e) => {
    const { target } = e;
    setNoticeEditForm({
      ...noticeEditForm,
      [target.name]: target.value,
    });
  };

  const uploadImg = (e) => {
    const { files } = e.target;
    setImgValue({
      ...imgValue,
      img1_url: files[0],
      img2_url: files[1],
      img3_url: files[2],
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
  };
  const noticeSubmitBtn = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", noticeEditForm.title);
    formData.append("content", noticeEditForm.content);
    formData.append("img1", imgValue.img1_url);
    formData.append("img2", imgValue.img2_url);
    formData.append("img3", imgValue.img3_url);

    const fetchAPI =
      imgValue === []
        ? `https://threemonth.shop/announcements/notices/${noticeId}?img_delete=[img1,img2,img3]`
        : `https://threemonth.shop/announcements/notices/${noticeId}`;
    axios
      .patch(`${fetchAPI}`, formData, {
        headers: {
          Authorization: `Bearer ${USER_TOKEN}`,
        },
      })
      .catch((error) => error(error.message))
      .then((res) => {
        setNoticeEditForm(res.data);
        navigate(-1);
      });
  };
  return (
    <NoticeInputContainer>
      <NoticeInputWrapper>
        <NoticeInputTitle>공지사항 수정폼</NoticeInputTitle>
        <InputWrapper>
          <InputTitle
            type="text"
            name="title"
            placeholder="제목을 입력하세요."
            onChange={uploadNoticeEditFile}
            value={noticeEditForm.title}
          />
          <InputContentWrapper>
            <InputContent
              type="text"
              name="content"
              placeholder="내용을 입력해주세요."
              wrap="hard"
              rows="20"
              cols="20"
              onChange={uploadNoticeEditFile}
              value={noticeEditForm.content}
            />
            <InputImage
              type="file"
              accept="image/*"
              onChange={uploadImg}
              multiple
              id="imageinput"
              style={{ display: "none" }}
            />
          </InputContentWrapper>
          {noticeEditForm.img1_url && (
            <NoticeEditImg src={noticeEditForm.img1_url} />
          )}
          {noticeEditForm.img2_url && (
            <NoticeEditImg src={noticeEditForm.img2_url} />
          )}
          {noticeEditForm.img3_url && (
            <NoticeEditImg src={noticeEditForm.img3_url} />
          )}

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

export default AdminNoticeEdit;

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
const NoticeEditImg = styled.img`
  width: 200px;
  margin-top: 15px;
  padding-left: 10px;
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
