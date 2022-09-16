import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import axios from "axios";
import { API, USER_TOKEN } from "../../../config";

const MyReviewInput = () => {
  const { REVIEW_EDIT } = API;
  const [uploadDataForm, setUploadDataForm] = useState({
    content: "",
  });
  const [imgValue, setImgValue] = useState();
  const [previewImg, setPreviewImg] = useState(null);
  const [deleteValue, setDeleteValue] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const uploadFile = (e) => {
    const { target } = e;
    setUploadDataForm({ ...uploadDataForm, [target.name]: target.value });
  };
  const uploadImg = (e) => {
    const { files } = e.target;
    setImgValue(files[0]);
    previewURLImg(files[0]);
    setDeleteValue(false);
  };
  const previewURLImg = (prev) => {
    const reader = new FileReader();
    reader.readAsDataURL(prev);
    reader.onloadend = () => {
      setPreviewImg(reader.result);
    };
    return previewImg;
  };

  const prevDeleteHandler = () => {
    setImgValue();
    setPreviewImg(null);
    setDeleteValue(!deleteValue);
  };

  const uploadHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", imgValue);
    formData.append("content", uploadDataForm.content);
    formData.append("title", "title_test");
    formData.append("order", location.state.selectedId);

    axios
      .post(`${REVIEW_EDIT}`, formData, {
        headers: {
          Authorization: `Bearer ${USER_TOKEN}`,
        },
      })
      .catch((error) => error(error.response))
      .then((res) => {
        setUploadDataForm(res.data);
        navigate("/mypage");
      });
  };

  return (
    <MyReviewInputContainer>
      <MyReviewInputWrap>
        <MyReviewInputTitle>리뷰 입력</MyReviewInputTitle>
        <ReviewInputContainer>
          <ReviewInputWrap>
            <Wrap>
              <ReviewInputContent
                type="text"
                name="content"
                placeholder="리뷰를 입력해주세요."
                onChange={uploadFile}
              />
              <PreviewImg src={previewImg && previewImg} />
              <ReviewInputFileContent
                type="file"
                onChange={uploadImg}
                accept="image/*"
                name="img"
                id="imageinput"
                style={{ display: "none" }}
              />
              <ReviewInputFileBtnWrap>
                <ReviewInputFileBtnContent
                  style={{ marginBottom: "20px" }}
                  htmlFor="imageinput"
                >
                  파일 선택하기
                </ReviewInputFileBtnContent>

                {previewImg && (
                  <PreveiwImgDelBtn onClick={prevDeleteHandler}>
                    삭제
                  </PreveiwImgDelBtn>
                )}
              </ReviewInputFileBtnWrap>
            </Wrap>

            <ReviewInputFileBtn onClick={uploadHandler}>
              리뷰 입력완료
            </ReviewInputFileBtn>
          </ReviewInputWrap>
        </ReviewInputContainer>
      </MyReviewInputWrap>
    </MyReviewInputContainer>
  );
};

export default MyReviewInput;

const MyReviewInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
  color: ${({ theme }) => theme.fontColor};
  @media (max-width: 580px) {
    width: 100%;
  }
`;

const MyReviewInputWrap = styled.div`
  margin: 80px 0;
  width: 85%;
  @media (max-width: 580px) {
    width: 100%;
  }
`;
const MyReviewInputTitle = styled.p`
  font-size: 1.6em;
  @media (max-width: 580px) {
    padding: 0 20px;
  }
`;

const ReviewInputContainer = styled.div`
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  font-size: 16px;
  flex-direction: column;
  margin: 20px 0;
  border-radius: 10px;
  width: 100%;
  min-height: 350px;
  background-color: ${({ theme }) => theme.bgColor};
  font-family: ${({ theme }) => theme.fontFamily};
`;
const ReviewInputWrap = styled.div`
  display: grid;
  grid-template-rows: 50px;
  grid-template-columns: 5fr 1fr;
  @media (max-width: 400px) {
    grid-template-rows: 30px 30px;
    grid-template-columns: 1fr;
  }
`;

const Wrap = styled.div`
  margin-right: 20px;
  @media (max-width: 400px) {
    margin-right: 0px;
  }
`;

const ReviewInputContent = styled.input`
  border-style: none;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 20px;

  &:focus {
    outline: none;
  }
  font-family: ${({ theme }) => theme.fontFamily};
  @media (max-width: 1010px) {
    font-size: 0.8em;
  }
  @media (max-width: 640px) {
    font-size: 0.6em;
  }
`;

const ReviewInputFileContent = styled.input`
  margin-top: 20px;
`;

const ReviewInputFileBtnWrap = styled.div`
  display: flex;
`;

const ReviewInputFileBtnContent = styled.label`
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
  @media (max-width: 900px) {
    font-size: 0.8em;
  }
  @media (max-width: 640px) {
    font-size: 0.6em;
    padding: 13px;
  }
`;

const PreviewImg = styled.img`
  width: 200px;
  margin-top: 15px;
  padding-left: 10px;
  @media (max-width: 450px) {
    width: 150px;
  }
  @media (max-width: 400px) {
    margin-top: 60px;
  }
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
  @media (max-width: 900px) {
    font-size: 0.8em;
  }
  @media (max-width: 640px) {
    font-size: 0.6em;
  }
`;

const ReviewInputFileBtn = styled.button`
  border-style: none;
  width: 70%;
  height: 100%;
  font-size: 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bgColor};
  border: 2px solid ${({ theme }) => theme.fontColor};
  color: ${({ theme }) => theme.fontColor};
  font-family: ${({ theme }) => theme.fontFamily};

  @media (max-width: 1010px) {
    font-size: 0.8em;
  }
  @media (max-width: 855px) {
    font-size: 1em;
  }
  @media (max-width: 750px) {
    font-size: 0.8em;
  }
  @media (max-width: 640px) {
    font-size: 0.6em;
    width: 100%;
  }
  @media (max-width: 450px) {
    font-size: 0.6em;
    width: 100%;
  }
  @media (max-width: 435px) {
    font-size: 0.6em;
    width: 80%;
  }

  @media (max-width: 435px) {
    font-size: 0.6em;
    width: 80%;
  }
  @media (max-width: 400px) {
    font-size: 0.6em;
    width: 100%;
    margin: 10px 0;
  }
  @media (max-width: 365px) {
    font-size: 0.6em;
  }
  @media (max-width: 340px) {
    font-size: 0.5em;
  }
`;
