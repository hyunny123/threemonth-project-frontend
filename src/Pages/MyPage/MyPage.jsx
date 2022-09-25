import axios from "axios";
import React, { useEffect, useState } from "react";
import { API, USER_TOKEN } from "../../config";
import styled from "styled-components";

import MyOrderList from "./MyOrderList/MyOrderList";
import MyReviewList from "./MyReviewList/MyReviewList";
import MyOrderReview from "./MyOrderReview/MyOrderReview";

const MyPage = () => {
  const { MY_ORDER_LIST, MY_REVIEWABLE_LIST, MY_REVIEW_LIST } = API;
  const [orderList, setOrderList] = useState([
    {
      id: 0,
      title: "",
      created_at: "",
    },
  ]);

  const [orderReviewList, setOrderReviewList] = useState([
    {
      id: 0,
      type: "",
      title: "",
    },
  ]);

  const [reviewList, setReviewList] = useState([
    {
      id: 0,
      content: "",
      order: 0,
    },
  ]);

  useEffect(() => {
    axios
      .get(`${MY_ORDER_LIST}`, {
        headers: {
          Authorization: `Bearer ${USER_TOKEN}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => setOrderList(res.data));
    axios
      .get(`${MY_REVIEWABLE_LIST}`, {
        headers: {
          Authorization: `Bearer ${USER_TOKEN}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => setOrderReviewList(res.data));
    axios
      .get(`${MY_REVIEW_LIST}`, {
        headers: {
          Authorization: `Bearer ${USER_TOKEN}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => setReviewList(res.data));
  }, [MY_ORDER_LIST, MY_REVIEWABLE_LIST, MY_REVIEW_LIST]);

  return (
    <MyPageContainer>
      <MyOrderList orderList={orderList} />
      <MyOrderReview orderReviewList={orderReviewList} />
      <MyReviewList reviewList={reviewList} />
    </MyPageContainer>
  );
};

export default MyPage;

const MyPageContainer = styled.div`
  width: 100%;
`;
