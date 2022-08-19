import React from "react";
import styled from "styled-components";

const QnAList = () => {
  return (
    <QnAListWrap>
      <QnAListWidth>QnAList</QnAListWidth>
    </QnAListWrap>
  );
};

export default QnAList;

const QnAListWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;
const QnAListWidth = styled.div`
  border: 1px solid blue;
  width: 85%;
`;
