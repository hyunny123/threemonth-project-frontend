import axios from "axios";
import React from "react";
import styled from "styled-components";
import { USER_TOKEN } from "../../../../config";

const AdminReviewBox = ({ props }) => {
  const adminDeleteReview = (id) => {
    if (window.confirm("정말 정말 삭제하시겠습니까?")) {
      if (window.confirm("정말 정말 정말 정말 삭제하시겠습니까?")) {
        axios
          .delete(`https://threemonth.shop/orders/reviews/${id}`, {
            headers: {
              Authorization: `Bearer ${USER_TOKEN}`,
              "Content-Type": "application/json",
            },
          })
          .then(alert("삭제되었습니다."));
      }
    }
  };
  return (
    <>
      {props.map((x, idx) => (
        <AdminReviewList props={x.img_url} key={idx}>
          <AdminReviewDate>{String(x.created_at).slice(0, 10)}</AdminReviewDate>
          <AdminReviewName>{x.user_nickname}님</AdminReviewName>
          <AdminReviewContent>{x.content}</AdminReviewContent>
          {x.img_url && <AdminReviewImg src={x.img_url} alt="이미지" />}
          <i
            className="fa-solid fa-trash-can"
            onClick={() => {
              adminDeleteReview(x.id);
            }}
          />
        </AdminReviewList>
      ))}
    </>
  );
};

export default AdminReviewBox;

const AdminReviewList = styled.div`
  display: flex;
  margin: 20px 0;
  padding: 20px;
  width: 100%;
  min-height: 20px;
  box-sizing: border-box;
  border-bottom: 2px solid ${({ theme }) => theme.bgColor};
  i {
    cursor: pointer;
    justify-content: flex-end;
  }
`;
const AdminReviewDate = styled.p`
  margin-right: 10px;
`;
const AdminReviewName = styled(AdminReviewDate)`
  width: 100px;
  word-break: break-all;
`;
const AdminReviewContent = styled(AdminReviewDate)`
  width: 60%;
  word-break: break-all;
`;
const AdminReviewImg = styled.img`
  width: 150px;
  margin: 0 20px;
`;
