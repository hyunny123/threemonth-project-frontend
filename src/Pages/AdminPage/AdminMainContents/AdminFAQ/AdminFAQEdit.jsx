import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { API, USER_TOKEN } from "../../../../config";

const AdminFAQEdit = () => {
  const { FAQ_LIST } = API;
  const navigate = useNavigate();
  const { faqEditId } = useParams();

  const [editFAQContents, setEditFAQContents] = useState({
    question: "",
    answer: "",
  });
  useEffect(() => {
    axios
      .get(`${FAQ_LIST}/${faqEditId}`)
      .then((res) => setEditFAQContents(res.data));
  }, [faqEditId, FAQ_LIST]);
  const EditFAQHandle = (e) => {
    const { name, value } = e.target;
    setEditFAQContents({ ...editFAQContents, [name]: value });
  };
  const postEditFAQ = () => {
    axios
      .patch(
        `${FAQ_LIST}/${faqEditId}`,
        { ...editFAQContents },
        {
          headers: {
            Authorization: `Bearer ${USER_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      )
      .catch((error) => alert(`${error}`))
      .then(navigate("/admin"));
  };
  return (
    <AdminFAQEditWrap>
      <AdminFAQEditWidth>
        <AdminFAQEditQuestion
          placeholder="질문을 입력해 주세요"
          name="question"
          value={editFAQContents.question}
          onChange={EditFAQHandle}
          required
        />
        <AdminFAQEditAnswer
          placeholder="답변을 입력해 주세요"
          name="answer"
          value={editFAQContents.answer}
          onChange={EditFAQHandle}
          required
          wrap="hard"
          cols="20"
          rows="20"
        />
        <EditFAQPOSTBtn
          onClick={() => {
            postEditFAQ();
          }}
        >
          수정하기
        </EditFAQPOSTBtn>
      </AdminFAQEditWidth>
    </AdminFAQEditWrap>
  );
};

export default AdminFAQEdit;

const AdminFAQEditWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AdminFAQEditWidth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 20px 0;
`;
const AdminFAQEditQuestion = styled.input`
  margin: 20px 0;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
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
  width: 100%;
  &:focus {
    outline: none;
  }
`;
const EditFAQPOSTBtn = styled.button`
  border-style: none;
  box-sizing: border-box;
  padding: 10px;
  width: 150px;
  font-size: 18px;
  border: 1px solid ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 10px;
`;
