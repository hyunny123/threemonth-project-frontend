import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from "../../../../config";
import AdminFAQAdd from "./AdminFAQAdd";
import AdminFAQBox from "./AdminFAQBox";

const AdminFAQ = () => {
  const [adminFAQList, setAdminFAQList] = useState([
    { id: 0, question: "", answer: "", created_at: "" },
  ]);
  const [adminFAQAddOpen, setAdminFAQAddOpen] = useState(false);
  const { FAQ_LIST } = API;
  useEffect(() => {
    axios
      .get(`${FAQ_LIST}`)
      .catch((error) => error(error.response))
      .then((res) => setAdminFAQList(res.data));
  }, [FAQ_LIST]);

  return (
    <AdminFAQWrap>
      <AdminFAQTitle>FAQ 관리</AdminFAQTitle>
      <AdminFAQListBoxs>
        {adminFAQList.map((x, idx) => (
          <AdminFAQLists key={idx}>
            <AdminFAQBox adminFAQList={x} />
          </AdminFAQLists>
        ))}
      </AdminFAQListBoxs>
      <AdminFAQAddContain>
        <AdminFAQAddBtn
          onClick={() => {
            setAdminFAQAddOpen(!adminFAQAddOpen);
          }}
        >
          FAQ 추가하기
        </AdminFAQAddBtn>
        {adminFAQAddOpen && (
          <AdminFAQAdd
            adminFAQAddOpen={adminFAQAddOpen}
            setAdminFAQAddOpen={setAdminFAQAddOpen}
            setAdminFAQList={setAdminFAQList}
            adminFAQList={adminFAQList}
          />
        )}
      </AdminFAQAddContain>
    </AdminFAQWrap>
  );
};

export default AdminFAQ;

const AdminFAQWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 500px;
  box-sizing: border-box;
  padding: 20px;
`;
const AdminFAQTitle = styled.p`
  font-size: 30px;
  margin-bottom: 30px;
`;
const AdminFAQListBoxs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(300px, auto);
  gap: 20px;
  box-sizing: border-box;
  padding: 20px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
const AdminFAQAddBtn = styled.button`
  border-style: none;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 10px;
  width: 200px;
  font-size: 18px;
`;
const AdminFAQLists = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 2fr 2fr 1fr;
  border: 1px solid black;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 15px;
  background-color: ${({ theme }) => theme.bgColor};
  align-items: center;
`;

const AdminFAQAddContain = styled.div`
  box-sizing: border-box;
  padding: 20px;
`;
