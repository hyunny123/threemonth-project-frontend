import React, { useState } from "react";
import styled from "styled-components";
import AdminProductList from "./AdminMainContents/AdminProduct/AdminProductList";
import AdminOrderedList from "./AdminMainContents/AdminOrderedList/AdminOrderedList";
import AdminReviews from "./AdminMainContents/AdminReview/AdminReviews";
import AdminPageAside from "./AdminPageAside";
import AdminFAQ from "./AdminMainContents/FAQList/AdminFAQ";
// import AdminNotice from "./AdminMainContents/NoticeList/AdminNotice";

const AdminPage = () => {
  const [asideState, setAsideState] = useState("productHandle");
  const switchStatus = (status) => {
    switch (status) {
      case "orderedList":
        return <AdminOrderedList />;
      case "handleReview":
        return <AdminReviews />;
      case "productHandle":
        return <AdminProductList />;
      case "faq":
        return <AdminFAQ />;
      // case "notice":
      //   return <AdminNotice />;
      default:
        return <AdminOrderedList />;
    }
  };
  return (
    <AdminContainer>
      <AdminPageAside setAsideState={setAsideState} />
      <AdminpageMain>{switchStatus(asideState)}</AdminpageMain>
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
`;
