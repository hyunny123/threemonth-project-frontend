import React from "react";
import styled from "styled-components";

const QnANoList = () => {
  return (
    <QnANoListWrap>
      <QnANoListTitle>작성된 QnA가 없습니다.</QnANoListTitle>
    </QnANoListWrap>
  );
};

export default QnANoList;

const QnANoListWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  margin: 50px 0;
`;

const QnANoListTitle = styled.p`
  font-size: 20px;
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;
