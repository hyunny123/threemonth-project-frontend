import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const AdminFAQBox = ({ adminFAQList }) => {
  const navigate = useNavigate();
  const { id, question, answer, created_at } = adminFAQList;
  const AdminFAQQuestionHTML = () => {
    return {
      __html: question.replace(/\n/g, "<br>\n"),
    };
  };
  const AdminFAQAnswerHTML = () => {
    return {
      __html: answer.replace(/\n/g, "<br>\n"),
    };
  };
  return (
    <>
      <AdminFAQContent>{id}</AdminFAQContent>
      <AdminFAQContent dangerouslySetInnerHTML={AdminFAQQuestionHTML()} />
      <AdminFAQContent dangerouslySetInnerHTML={AdminFAQAnswerHTML()} />
      <AdminFAQContent>{String(created_at).slice(0, 10)}</AdminFAQContent>
      <i
        className="fa-regular fa-pen-to-square"
        onClick={() => {
          navigate(`/admin/faqEdit/${id}`);
        }}
      />
      <i className="fa-solid fa-trash-can" />
    </>
  );
};

export default AdminFAQBox;

const AdminFAQContent = styled.p`
  box-sizing: border-box;
  padding: 5px;
  word-break: break-all;
  &:first-child {
    /* id */
    grid-column: 1/4;
  }
  &:nth-child(2) {
    /* question */
    grid-column: 1/4;
    font-size: 18px;
  }
  &:nth-child(3) {
    /* answer */
    grid-column: 1/4;
    font-size: 14px;
  }
  &:nth-child(4) {
    /* created_at */
    font-size: 14px;
  }
  &:nth-child(5) {
    /* modify */
  }
  &:last-child {
    /* delete */
  }
`;
