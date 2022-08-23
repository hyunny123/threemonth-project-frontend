import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Loading from "../../../components/Loading";
import { API, USER_TOKEN } from "../../../config";
import IndividualDetailAside from "./IndividualDetailAside";
import IndividualDetailMain from "./IndividualDetailMain";

const IndividualDetail = () => {
  const [individualData, setIndividualData] = useState({
    buying: false,
    description: null,
    id: 0,
    is_active: false,
    optional_description: null,
    price: 0,
    product_images: [],
    product_name: "",
    category: "bread",
  });
  const { category } = individualData;
  const [detailComment, setDetailComment] = useState("");
  const params = useParams();
  const { productId } = params;
  const { ITEM_GET } = API;

  useEffect(() => {
    fetch(`${ITEM_GET}/${productId}`)
      .then((res) => res.json())
      .then((data) => setIndividualData(data));
  }, [ITEM_GET, productId]);

  if (individualData.id === 0) {
    return <Loading />;
  }
  const detailCommentHandle = (e) => {
    const { name, value } = e.target;
    setDetailComment({ ...detailComment, [name]: value });
  };
  const postDetailComment = () => {
    axios
      .post(
        // `http://15.164.163.31:8001/products/${productId}/comments`,
        { content: detailComment.comment },
        {
          headers: {
            Authorization: `Bearer ${USER_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          window.location.reload();
        }
      });
  };

  return (
    <IndividualDetailWrapper>
      <IndividualDetailWidth>
        <IndividualDetailMain individualData={individualData} />
        <IndividualDetailAside individualData={individualData} />
      </IndividualDetailWidth>
      {category === "cake" && (
        <DetailCommentWrap>
          <IndividualDetailInputWrap>
            <IndividualDetailCommentInput
              name="comment"
              onChange={detailCommentHandle}
              placeholder="댓글을 입력해 주세요"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  postDetailComment();
                }
              }}
            />
            <PostDetailCommentBtn onClick={postDetailComment}>
              댓글 입력
            </PostDetailCommentBtn>
          </IndividualDetailInputWrap>
        </DetailCommentWrap>
      )}
    </IndividualDetailWrapper>
  );
};

export default IndividualDetail;

const IndividualDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.fontColor};
`;

const IndividualDetailWidth = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 50px;
  min-height: 400px;
  width: 85%;

  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr;
    width: 90%;
    margin-top: 0px;
  }
  @media (max-width: 640px) {
    place-items: center;
  }
`;
const DetailCommentWrap = styled.div`
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  font-size: 16px;
  flex-direction: column;
  margin: 20px 0;
  border-radius: 10px;
  width: 85%;
  min-height: 100px;
  background-color: ${({ theme }) => theme.bgColor};
  font-family: ${({ theme }) => theme.fontFamily};
`;
const IndividualDetailInputWrap = styled.div`
  display: grid;
  grid-template-rows: 50px;
  grid-template-columns: 8fr 1fr;
  place-items: center;
  margin-bottom: 20px;
`;
const IndividualDetailCommentInput = styled.input`
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
const PostDetailCommentBtn = styled.button`
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
