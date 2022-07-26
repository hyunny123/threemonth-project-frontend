import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
import FormListBox from "./FormListBox/FormListBox";
import styled from "styled-components";
import Loading from "../../../components/Loading";

const FormList = () => {
  const [formList, setFormList] = useState([
    {
      id: 0,
      title: "",
      createDate: "",
      writer: "",
      isChecked: false,
    },
  ]);
  useEffect(() => {
    fetch("/data/formlistdata.json")
      .then((res) => res.json())
      .then((data) => {
        setFormList(data.result);
      });
  }, []);
  const sortList = [...formList]
    .sort(function (a, b) {
      if (a.createDate > b.createDate) {
        return 1;
      } else if (a.createDate < b.createDate) {
        return -1;
      } else {
        return 0;
      }
    })
    .reverse();

  // 페이지네이션 구현 시 사용
  // const asdf = Math.ceil(sortList.length / 10);

  if (formList[0].title === "") {
    return <Loading />;
  }

  return (
    <FormListWrapper>
      <FormListWidth>
        <FormListTitle>뜨리먼뜨 Form</FormListTitle>
        <FormListBox sortList={sortList} />
        <FormListPageBtnWrap>
          <FormListPageBtn>1</FormListPageBtn>
          <FormListPageBtn>2</FormListPageBtn>
          <FormListPageBtn>3</FormListPageBtn>
          <FormListPageBtn>4</FormListPageBtn>
          <FormListPageBtn>5</FormListPageBtn>
          <FormListPageBtn>6</FormListPageBtn>
          <FormListPageBtn>7</FormListPageBtn>
        </FormListPageBtnWrap>
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

const FormListPageBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  /* border: 1px solid red; */
  * {
    margin-right: 5px;
  }
`;
const FormListPageBtn = styled.button`
  border-style: none;
  background-color: transparent;
  border-bottom: 0.5px solid black;
`;
