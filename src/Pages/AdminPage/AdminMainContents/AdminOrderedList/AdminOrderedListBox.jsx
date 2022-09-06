import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { API, USER_TOKEN } from "../../../../config";

const AdminOrderedListBox = ({ props }) => {
  const navigate = useNavigate();
  const { DETAIL_FORM } = API;
  return (
    <>
      {props.map((x, idx) => (
        <AdminCafeListBox key={idx}>
          <p>{String(x.title).slice(0, 50)}</p>
          <p>{String(x.created_at.slice(0, 10))}</p>
          <p>{x.customer_name}님</p>
          <p
            onClick={() => {
              navigate(`/formdetail/${x.id}`, { state: { editCheck: true } });
            }}
          >
            수정
          </p>
          <i
            className="fa-solid fa-trash-can"
            onClick={() => {
              if (window.confirm("정말 정말 삭제하시겠습니까?")) {
                axios
                  .delete(`${DETAIL_FORM}${x.id}`, {
                    headers: {
                      Authorization: `Bearer ${USER_TOKEN}`,
                      "Content-Type": "application/json;charset=UTF-8",
                    },
                  })
                  .then((res) => {
                    if (res.status === 204) {
                      alert("삭제되었습니다.");
                      navigate("/adminpage");
                      window.location.reload();
                    }
                  });
              }
            }}
          />
        </AdminCafeListBox>
      ))}
    </>
  );
};

export default AdminOrderedListBox;

const AdminCafeListBox = styled.div`
  display: grid;
  grid-template-rows: 20px;
  grid-template-columns: 5fr 1fr 1fr 0.5fr 0.3fr;
  box-sizing: border-box;
  padding: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.fontColor};
  margin-bottom: 5px;
  align-items: center;
`;
