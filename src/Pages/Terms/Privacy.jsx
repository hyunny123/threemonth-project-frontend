import React from "react";
import styled from "styled-components";

const Privacy = () => {
  const iframePrivacyPart = () => {
    return {
      __html:
        '<iframe src="/Privacy.html" width="100%" height="700px"></iframe>',
    };
  };
  return (
    <PrivacyWrap>
      <PrivacyTitle>개인 정보 처리 방침</PrivacyTitle>
      <PrivacyContent dangerouslySetInnerHTML={iframePrivacyPart()} />
    </PrivacyWrap>
  );
};

export default Privacy;

const PrivacyWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const PrivacyTitle = styled.p`
  margin: 100px 0;
  font-size: 20px;
`;

const PrivacyContent = styled.div`
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
