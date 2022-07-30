import React, { useEffect, useState } from "react";
import FormListBox from "./FormListBox/FormListBox";
import styled from "styled-components";
import Loading from "../../../components/Loading";

const FormList = () => {
  const [formList, setFormList] = useState([
    {
      id: 0,
      customer_name: "",
      status: "",
      title: "",
      create_at: "",
    },
  ]);
  useEffect(() => {
    fetch("http://15.164.163.31:8001/orders")
      .then((res) => res.json())
      .then((data) => setFormList(data));
  }, []);

  const sortedList = [...formList]
    .sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    })
    .reverse();

  if (formList[0].id === 0) {
    return <Loading />;
  }
  return (
    <FormListWrapper>
      <FormListWidth>
        <FormListTitle>뜨리먼뜨 Form</FormListTitle>
        <FormListBox sortedList={sortedList} />
      </FormListWidth>
    </FormListWrapper>
  );
};

export default FormList;

const FormListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.fontColor};
`;

const FormListWidth = styled.div`
  margin: 80px 0;
  width: 85%;
`;

const FormListTitle = styled.p`
  font-size: 1.6em;
`;
