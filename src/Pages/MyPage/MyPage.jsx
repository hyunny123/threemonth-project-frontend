import axios from "axios";
import React, { useEffect, useState } from "react";
import { USER_TOKEN } from "../../config";
import styled from "styled-components";

import MyOrderList from "./MyOrderList/MyOrderList";
import MyReviewList from "./MyReviewList/MyReviewList";
import MyOrderReview from "./MyOrderReview/MyOrderReview";

const MyPage = () => {
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
      .get(`https://threemonth.shop/orders/userorders?all=True`, {
        headers: {
          Authorization: `Bearer ${USER_TOKEN}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => setOrderList(res.data));
    axios
      .get(`https://threemonth.shop/orders/userorders`, {
        headers: {
          Authorization: `Bearer ${USER_TOKEN}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => setOrderReviewList(res.data));
    axios
      .get(`https://threemonth.shop/orders/reviews?user_review=True`, {
        headers: {
          Authorization: `Bearer ${USER_TOKEN}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => setReviewList(res.data));
  }, []);

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
