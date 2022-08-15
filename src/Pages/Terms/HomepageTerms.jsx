import React from "react";
import styled from "styled-components";

const HomePageTerms = () => {
  const iframeTermsPart = () => {
    return {
      __html: '<iframe src="/Terms.html" width="100%" height="700px"></iframe>',
    };
  };
  return (
    <TermsWrap>
      <TermsTitle>홈페이지 이용약관</TermsTitle>
      <TermsContent dangerouslySetInnerHTML={iframeTermsPart()} />
    </TermsWrap>
  );
};

export default HomePageTerms;

const TermsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TermsTitle = styled.p`
  margin: 100px 0;
  font-size: 20px;
`;

const TermsContent = styled.div`
  width: 1000px;
  border: 3px solid lightgray;
  margin-bottom: 100px;
  @media (max-width: 1000px) {
    width: 800px;
  }
  @media (max-width: 800px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: 400px;
  }
  @media (max-width: 400px) {
    width: 200px;
  }
`;
