import React, { useState } from "react";
import styled from "styled-components";

const FAQ = ({ faqList }) => {
  const [faqOpen, setFaqOpen] = useState(false);
  return (
    <FAQWrap>
      <FAQWidth>
        <FAQTitle>FAQ</FAQTitle>
        {faqList.map((x, idx) => (
          <FAQMap key={idx}>
            <FAQQuestion
              faqOpen={faqOpen}
              onClick={() => {
                setFaqOpen(!faqOpen);
              }}
            >
              {x.question}
            </FAQQuestion>
            {faqOpen && <FAQAnswer>{x.answer}</FAQAnswer>}
          </FAQMap>
        ))}
      </FAQWidth>
    </FAQWrap>
  );
};

export default FAQ;

const FAQWrap = styled.div`
  display: flex;
  width: 100%;
  min-height: 200px;
`;
const FAQWidth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;
const FAQTitle = styled.p`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 20px;
`;
const FAQMap = styled.div`
  width: 100%;
  min-height: 40px;
  box-sizing: border-box;
  padding: 15px;
  /* border: 1px solid black; */
`;
const FAQQuestion = styled.p`
  padding: 5px;
  box-sizing: border-box;
  font-size: 20px;
  /* border-bottom: ${({ faqOpen }) =>
    faqOpen ? "1px solid blue" : "none"}; */
  border-bottom: 1px solid ${({ theme }) => theme.fontColor};
  cursor: pointer;
`;
const FAQAnswer = styled.p`
  padding: 5px;
  box-sizing: border-box;
`;
