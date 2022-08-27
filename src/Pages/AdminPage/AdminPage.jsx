import React, { useState } from "react";
import styled from "styled-components";
import AdminAddProduct from "./AdminMainContents/AdminAddProduct";
import AdminOrderedList from "./AdminMainContents/AdminOrderedList/AdminOrderedList";
import AdminReviews from "./AdminMainContents/AdminReviews";
import AdminPageAside from "./AdminPageAside";

const AdminPage = () => {
  const [asideState, setAsideState] = useState("orderedList");
  return (
    <AdminContainer>
      <AdminPageAside asideState={asideState} setAsideState={setAsideState} />
      <AdminpageMain>
        {asideState === "orderedList" ? (
          <AdminOrderedList />
        ) : asideState === "handleReview" ? (
          <AdminReviews />
        ) : (
          <AdminAddProduct />
        )}
      </AdminpageMain>
    </AdminContainer>
  );
};

export default AdminPage;

const AdminContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 4fr;
  justify-content: center;
  min-height: 500px;
  width: 100%;
  margin: 50px 0;
`;

const AdminpageMain = styled.div`
  display: flex;
  /* border: 1px solid blue; */
`;
