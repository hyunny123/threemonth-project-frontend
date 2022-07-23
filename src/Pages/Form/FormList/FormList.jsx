import React from "react";
import FormListBox from "./FormListBox/FormListBox";
import styled from "styled-components";

const FormList = () => {
  return (
    <FormListWrapper>
      <FormListWidth>
        <FormListTitle>뜨리먼뜨 Form</FormListTitle>
        <FormListBox />
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
