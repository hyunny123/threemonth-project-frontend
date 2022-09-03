import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { USER_TOKEN } from "../../../config";

const MyReviewEdit = () => {
  const navigate = useNavigate();
  const { reviewId } = useParams();
  // console.log(params);
  const [reviewEditData, setReviewEditData] = useState({
    content: "",
    img_url: "",
  });
  const [imgValue, setImgValue] = useState({ name: "" });
  const [previewImg, setPreviewImg] = useState(null);
  const [deleteValue, setDeleteValue] = useState(false);
  const { content, id, img_url, order } = reviewEditData;

  useEffect(() => {
    axios
      .get(`https://threemonth.shop/orders/reviews/${reviewId}`)
      .then((res) => setReviewEditData(res.data));
  }, []);
  const uploadEditFile = (e) => {
    const { name, value } = e.target;
    setReviewEditData({ ...reviewEditData, [name]: value });
  };
  // console.log(imgValue);

  const postpatch = () => {
    const existURL = () => {
      const formData = new FormData();
      formData.append("content", reviewEditData.content);
      if (imgValue.name !== "") {
        formData.append("img", imgValue);
      } else {
        const img = "img";
        formData.append("img_delete", [img]);
      }
      return formData;
    };
    const noURL = () => {
      const formData = new FormData();
      formData.append("content", reviewEditData.content);
      if (imgValue.name !== "") {
        formData.append("img", imgValue);
      }
      return formData;
    };
    const a = img_url ? existURL() : noURL();

    axios
      .patch(`https://threemonth.shop/orders/reviews/${reviewId}`, a, {
        headers: {
          Authorization: `Bearer ${USER_TOKEN}`,
        },
      })
      .catch((error) => console.log(error.response))
      .then((res) => console.log(res));
  };
  const imgHandle = (e) => {
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
  const asdf = () => {
    setImgValue({ name: "" });
    setPreviewImg(null);
    setDeleteValue(true);
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
                value={content}
                onChange={uploadEditFile}
              />
              <ReviewInputFileContent
                type="file"
                onChange={imgHandle}
                // value={reviewEditData.img_url}
                accept="image/*"
                name="img"
                id="imageinput"
                style={{ display: "none" }}
              />
              {!previewImg &&
                (img_url ? (
                  <ReviewInputFileBtnContent
                    style={{ marginBottom: "20px" }}
                    htmlFor="imageinput"
                  >
                    파일 변경하기 Click
                  </ReviewInputFileBtnContent>
                ) : (
                  <ReviewInputFileBtnContent
                    style={{ marginBottom: "20px" }}
                    htmlFor="imageinput"
                  >
                    파일 추가하기 Click
                  </ReviewInputFileBtnContent>
                ))}

              {img_url ? (
                deleteValue ? (
                  <div />
                ) : (
                  <PreviewImg
                    src={previewImg ? previewImg : img_url && img_url}
                  />
                )
              ) : imgValue ? (
                <PreviewImg
                  src={previewImg ? previewImg : img_url && img_url}
                />
              ) : (
                <div />
              )}
              {/* <PreviewImg src={previewImg ? previewImg : img_url && img_url} /> */}
              {/* {img_url ? <div /> : <button onClick={asdf}>삭제</button>} */}
              {/* {sdfg && <button onClick={asdf}>삭제</button>} */}
              {/* {img_url ? (
                <button onClick={asdf}>삭제</button>
              ) : (
                previewImg && <button onClick={asdf}>삭제</button>
              )} */}
              {/* {previewImg ? (
                <button onClick={asdf}>삭제</button>
              ) : (
                img_url && <button onClick={asdf}>삭제</button>
              )} */}
              {img_url
                ? !deleteValue && <button onClick={asdf}>삭제</button>
                : !deleteValue && <button onClick={asdf}>삭제</button>}
            </Wrap>

            <ReviewInputFileBtn onClick={postpatch}>
              리뷰 입력완료
            </ReviewInputFileBtn>
          </ReviewInputWrap>
        </ReviewInputContainer>
      </MyReviewInputWrap>
    </MyReviewInputContainer>
  );
};

export default MyReviewEdit;

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
  min-height: 120px;
  background-color: ${({ theme }) => theme.bgColor};
  font-family: ${({ theme }) => theme.fontFamily};
`;
const ReviewInputWrap = styled.div`
  display: grid;
  grid-template-rows: 50px;
  grid-template-columns: 5fr 1fr;
`;

const PreviewImg = styled.img`
  width: 150px;
`;

const Wrap = styled.div`
  margin-right: 20px;
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

const ReviewInputFileContent = styled.input`
  margin-top: 20px;
`;

const ReviewInputFileBtnContent = styled.label`
  display: inline-block;
  margin-top: 15px;
  cursor: pointer;
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
`;
