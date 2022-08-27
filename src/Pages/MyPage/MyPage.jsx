import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../config";
import styled from "styled-components";
import OrderListNoContents from "./MyOrderList/OrderListNoContents";
import MyOrderList from "./MyOrderList/MyOrderList";
import MyReviewList from "./MyReviewList/MyReviewList";
import ReviewListNoContents from "./MyReviewList/ReviewListNoContents";

const MyPage = () => {
  const [orderList, setOrderList] = useState([
    {
      id: 0,
      title: "",
      created_at: "",
      review: false,
    },
  ]);
  console.log(orderList);
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
      .get("/data/reviewData.json")
      .then((res) => setOrderList(res.data.result));
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
      <MyReviewList reviewList={reviewList} />
    </MyPageContainer>
  );
};

export default MyPage;

const MyPageContainer = styled.div`
  width: 100%;
`;
const MyPageTitle = styled.h2``;
