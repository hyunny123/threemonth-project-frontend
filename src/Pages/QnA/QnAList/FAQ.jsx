import React, { useState } from "react";
import styled from "styled-components";

const FAQ = ({ faqList }) => {
  const sortedFAQList = [...faqList].map((x) => {
    return { ...x, is_open: false };
  });
  const [faqOpen, setFaqOpen] = useState(sortedFAQList);
  const openHandle = (id) => {
    const productIdx = faqOpen.findIndex((product) => product.id === id);
    const newSortedList = [...faqOpen];
    newSortedList[productIdx].is_open = !newSortedList[productIdx].is_open;
    setFaqOpen(newSortedList);
  };
  const FAQContent = (value) => {
    return {
      __html: value.replace(/\n/g, "<br>\n"),
    };
  };
  return (
    <FAQWrap>
      <FAQWidth>
        <FAQTitle>FAQ</FAQTitle>
        {faqOpen.map((x, idx) => (
          <FAQMap key={idx}>
            <FAQQuestion
              onClick={() => {
                openHandle(x.id);
              }}
            >
              Q: {x.question}
            </FAQQuestion>
            {x.is_open && (
              <FAQAnswer>
                A:
                <div dangerouslySetInnerHTML={FAQContent(x.answer)} />
              </FAQAnswer>
            )}
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
  margin-bottom: 5px;
`;
const FAQQuestion = styled.p`
  padding: 5px;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;
  font-size: 20px;
  border: 1.5px solid ${({ theme }) => theme.bgColor};
  cursor: pointer;
  margin-bottom: 5px;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;
const FAQAnswer = styled.p`
  padding: 5px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  border: 1.5px solid #d1c5b0;
  border-radius: 10px;
  margin-bottom: 20px;
  word-break: break-all;
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;
