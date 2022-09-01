import axios from "axios";
import React, { useEffect, useState } from "react";
import { API, USER_TOKEN } from "../../config";
import styled from "styled-components";
import OrderListNoContents from "./MyOrderList/OrderListNoContents";
import MyOrderList from "./MyOrderList/MyOrderList";
import MyReviewList from "./MyReviewList/MyReviewList";
import MyOrderReview from "./MyOrderReview/MyOrderReview";
import ReviewListNoContents from "./MyReviewList/ReviewListNoContents";

const MyPage = () => {
  const [orderList, setOrderList] = useState([
    {
      id: 0,
      title: "",
      created_at: "",
    },
  ]);
  // console.log(orderList);
  const [orderReviewList, setOrderReviewList] = useState([
    {
      id: 0,
      type: "",
      title: "",
    },
  ]);
  console.log(orderReviewList);
  const [reviewList, setReviewList] = useState([
    {
      id: 0,
      content: "",
      order: 0,
    },
  ]);
  console.log(reviewList);
  useEffect(() => {
    axios
      .get(`http://15.164.163.31:8001/orders/`)
      .then((res) => setOrderList(res.data));
    axios
      .get(`http://15.164.163.31:8001/orders/userorders`, {
        headers: {
          Authorization: `Bearer ${USER_TOKEN}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => setOrderReviewList(res.data));
    axios
      .get(`http://15.164.163.31:8001/orders/reviews`)
      .then((res) => setReviewList(res.data));
  }, []);

  if (orderList.length === 0) {
    return <OrderListNoContents />;
  }

  if (reviewList.length === 0) {
    return <ReviewListNoContents />;
  }

  return (
    <MyPageContainer>
      <MyPageTitle>MyPage</MyPageTitle>
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
const MyPageTitle = styled.h2``;
