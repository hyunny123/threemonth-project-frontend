import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

const AdminFAQEdit = () => {
  const { faqEditId } = useParams();
  const [editFAQContents, setEditFAQContents] = useState();
  useEffect(() => {
    axios.get(`${faqEditId}`).then((res) => setEditFAQContents(res.data));
  }, [faqEditId]);
  const EditFAQHandle = () => {};
  const postEditFAQ = () => {};
  return (
    <AdminFAQEditWrap>
      <AdminFAQEditWidth>
        <AdminFAQEditQuestion
          placeholder="질문을 입력해 주세요"
          name="editQuestion"
          onChange={EditFAQHandle}
          required
        />
        <AdminFAQEditAnswer
          placeholder="답변을 입력해 주세요"
          name="editAnswer"
          onChange={EditFAQHandle}
          required
          wrap="hard"
          cols="20"
          rows="20"
        />
        <EditFAQPOSTBtn onClick={postEditFAQ}>추가</EditFAQPOSTBtn>
      </AdminFAQEditWidth>
    </AdminFAQEditWrap>
  );
};

export default AdminFAQEdit;

const AdminFAQEditWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AdminFAQEditWidth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;
const AdminFAQEditQuestion = styled.input`
  margin: 20px 0;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 10px;
  font-family: ${({ theme }) => theme.fontFamily};
  &:focus {
    outline: none;
  }
`;
const AdminFAQEditAnswer = styled.textarea`
  margin: 20px 0;
  box-sizing: border-box;
  padding: 10px;
  resize: none;
  border-radius: 10px;
  font-family: ${({ theme }) => theme.fontFamily};
  &:focus {
    outline: none;
  }
`;
const EditFAQPOSTBtn = styled.button`
  border-style: none;
  box-sizing: border-box;
  padding: 10px;
  width: 200px;
  font-size: 18px;
  border: 1px solid ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 10px;
  font-family: ${({ theme }) => theme.fontFamily};
`;
