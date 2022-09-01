import React from "react";
import styled from "styled-components";

const AdminPageAside = ({ setAsideState }) => {
  const ChangeAdminState = (state) => {
    setAsideState(state);
  };
  return (
    <AdminPageAsideContainer>
      <AdminAsideState
        onClick={() => {
          ChangeAdminState("orderedList");
        }}
      >
        주문서 목록
      </AdminAsideState>
      <AdminAsideState
        onClick={() => {
          ChangeAdminState("handleReview");
        }}
      >
        리뷰 관리
      </AdminAsideState>
      <AdminAsideState
        onClick={() => {
          ChangeAdminState("productHandle");
        }}
      >
        상품 관리
      </AdminAsideState>
      <AdminAsideState
        onClick={() => {
          ChangeAdminState("faq");
        }}
      >
        FAQ
      </AdminAsideState>
      {/* <AdminAsideState
        onClick={() => {
          ChangeAdminState("notice");
        }}
      >
        공지사항 관리
      </AdminAsideState> */}
    </AdminPageAsideContainer>
  );
};

export default AdminPageAside;

const AdminPageAsideContainer = styled.div`
  border-right: 2px solid ${({ theme }) => theme.fontColor};
  min-height: 200px;
  box-sizing: border-box;
  padding: 20px;
`;
const AdminAsideState = styled.button`
  border-style: none;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  background-color: transparent;
  border-bottom: 1px solid black;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fontFamily};
  cursor: pointer;
  &:focus {
    background-color: ${({ theme }) => theme.bgColor};
  }
`;
