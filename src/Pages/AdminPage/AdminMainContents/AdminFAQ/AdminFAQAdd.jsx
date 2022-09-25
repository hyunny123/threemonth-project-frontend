import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { API, USER_TOKEN } from "../../../../config";

const AdminFAQAdd = ({
  setAdminFAQAddOpen,
  adminFAQAddOpen,
  adminFAQList,
  setAdminFAQList,
}) => {
  const { ADMIN_FAQ } = API;
  const [addFAQContents, setAddFAQContents] = useState("");
  const addFAQHandle = (e) => {
    const { name, value } = e.target;
    setAddFAQContents({ ...addFAQContents, [name]: value });
  };

  const postAddFAQ = () => {
    axios
      .post(
        `${ADMIN_FAQ}`,
        {
          answer: addFAQContents.addAnswer,
          question: addFAQContents.addQuestion,
        },
        {
          headers: {
            Authorization: `Bearer ${USER_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      )
      .catch((error) => {
        const { status } = error.response;
        alert(`${status}, 다시 시도해 주세요`);
      })
      .then((res) => {
        setAdminFAQList([...adminFAQList, res.data]);
        setAdminFAQAddOpen(!adminFAQAddOpen);
      });
  };
  return (
    <AdminFAQAddWrap>
      <AdminFAQAddQuestion
        placeholder="질문을 입력해 주세요"
        name="addQuestion"
        onChange={addFAQHandle}
        required
      />
      <AdminFAQAddAnswer
        placeholder="답변을 입력해 주세요"
        name="addAnswer"
        onChange={addFAQHandle}
        required
        wrap="hard"
        cols="20"
        rows="15"
      />
      <AddFAQPOSTBtn onClick={postAddFAQ}>추가</AddFAQPOSTBtn>
    </AdminFAQAddWrap>
  );
};

export default AdminFAQAdd;

const AdminFAQAddWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const AdminFAQAddQuestion = styled.input`
  margin: 20px 0;
  box-sizing: border-box;
  padding-left: 15px;
  height: 50px;
  border-radius: 10px;
  font-family: ${({ theme }) => theme.fontFamily};
  &:focus {
    outline: none;
  }
`;
const AdminFAQAddAnswer = styled.textarea`
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
const AddFAQPOSTBtn = styled.button`
  border-style: none;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 10px;
  width: 200px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily};
`;
