import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import axios from "axios";
import { USER_TOKEN } from "../../../config";

const MyReviewInput = () => {
  const [uploadDataForm, setUploadDataForm] = useState({
    content: "",
    img: null,
    title: "",
    order: 0,
  });
  // const [uploadData, setUploadData] = useState({
  //   file: null,
  //   id: 0,
  //   content: "",
  // });

  // const uploadReview = (e) => {
  //   setUploadDataForm();
  // };
  const navigate = useNavigate();
  const uploadFile = (e) => {
    const { target } = e;
    // const { name } = target;
    if (typeof target.value === typeof "") {
      // const { value } = target;
      setUploadDataForm({ ...uploadDataForm, [target.name]: target.value });
    } else {
      // const { files } = target;
      setUploadDataForm({ ...uploadDataForm, [target.name]: target.files });
    }
  };
  console.log(uploadDataForm);

  const submitReviewData = {
    content: uploadDataForm.content,
    img: uploadDataForm.img,
    order: uploadDataForm.order,
    title: uploadDataForm.title,
  };

  const uploadHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", e.target.files);
    axios
      .post(
        `http://15.164.163.31:8001/orders/reviews`,
        {
          ...submitReviewData,
          title: "",
          order: 0,
        },
        {
          headers: {
            Authorization: `Bearer ${USER_TOKEN}`,
          },
        }
      )
      .catch((error) => console.log(error.response))
      .then((res) => setUploadDataForm(res.data));
    navigate("/mypage");
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
                // onChange={uploadReview}
                onChange={uploadFile}
              />
              <ReviewInputFileContent
                type="file"
                onChange={uploadFile}
                accept="image/*"
                name="img"
                id="imageinput"
                style={{ display: "none" }}
              />
              <ReviewInputFileBtnContent
                style={{ marginBottom: "20px" }}
                htmlFor="imageinput"
              >
                파일 선택하기
              </ReviewInputFileBtnContent>
            </Wrap>

            <ReviewInputFileBtn onClick={uploadHandler}>
              리뷰 입력완료
            </ReviewInputFileBtn>
            {/* <ReviewInputBtn onClick={uploadHandler}>리뷰 입력</ReviewInputBtn> */}
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
  /* display: flex; */
  font-size: 16px;
  /* flex-direction: column; */
  margin: 20px 0;
  border-radius: 10px;
  width: 100%;
  min-height: 100px;
  background-color: ${({ theme }) => theme.bgColor};
  font-family: ${({ theme }) => theme.fontFamily};
`;
const ReviewInputWrap = styled.div`
  display: grid;
  grid-template-rows: 50px;
  grid-template-columns: 7fr 1fr;
  place-items: center;
  margin-bottom: 20px;
`;

const Wrap = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
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
`;

const ReviewInputBtn = styled.button`
  border-style: none;
  width: 70%;
  height: 100%;
  font-size: 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bgColor};
  border: 2px solid ${({ theme }) => theme.fontColor};
  color: ${({ theme }) => theme.fontColor};
  font-family: ${({ theme }) => theme.fontFamily};
`;

const ReviewInputFileContent = styled.input``;

const ReviewInputFileBtnContent = styled.label``;

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
`;
