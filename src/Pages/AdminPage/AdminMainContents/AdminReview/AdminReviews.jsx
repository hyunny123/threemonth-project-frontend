import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../../../../components/Loading";
import { API } from "../../../../config";
import AdminReviewBox from "./AdminReviewBox";

const AdminReviews = () => {
  const { ADMIN_ORDER_REVIEW } = API;
  const [adminCakeReview, setAdminCakeReview] = useState([]);
  const [adminGiftReview, setAdminGiftReview] = useState([]);

  if (adminCakeReview === "") <Loading />;
  useEffect(() => {
    axios
      .get(`${ADMIN_ORDER_REVIEW}?type=cake`)
      .then((res) => setAdminCakeReview(res.data));
    axios
      .get(`${ADMIN_ORDER_REVIEW}?type=package`)
      .then((res) => setAdminGiftReview(res.data));
  }, []);
  return (
    <AdminReviewsWrap>
      <AdminReviewsTitle>리뷰 관리</AdminReviewsTitle>
      <AdminReviewBoxs>
        <AdminReviewCakeTitle>케이크 리뷰</AdminReviewCakeTitle>
        <AdminReviewCakeLists>
          {adminCakeReview.length > 0 ? (
            <AdminReviewBox props={adminCakeReview} />
          ) : (
            <p>no list</p>
          )}
        </AdminReviewCakeLists>
        <AdminReviewPackageTitle>기프트박스 리뷰</AdminReviewPackageTitle>
        <AdminReviewGiftLists>
          {adminGiftReview.length > 0 ? (
            <AdminReviewBox props={adminGiftReview} />
          ) : (
            <p>no list</p>
          )}
        </AdminReviewGiftLists>
      </AdminReviewBoxs>
    </AdminReviewsWrap>
  );
};

export default AdminReviews;

const AdminReviewsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 500px;
  box-sizing: border-box;
  padding: 20px;
`;

const AdminReviewsTitle = styled.p`
  font-size: 30px;
  margin-bottom: 30px;
`;
const AdminReviewBoxs = styled.div`
  box-sizing: border-box;
  padding: 20px;
`;

const AdminReviewCakeTitle = styled.p`
  box-sizing: border-box;
  padding: 20px;
  font-size: 20px;
  border-bottom: 3px solid ${({ theme }) => theme.fontColor};
`;
const AdminReviewPackageTitle = styled(AdminReviewCakeTitle)``;

const AdminReviewCakeLists = styled.div`
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 30px;
`;
const AdminReviewGiftLists = styled(AdminReviewCakeLists)``;
