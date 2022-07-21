import React from "react";
import FormListBox from "./FormListBox/FormListBox";
import styled from "styled-components";

const FormList = () => {
  return (
    <FormListContainer>
      <FormListBox />
    </FormListContainer>
  );
};

export default FormList;

const FormListContainer = styled.div`
  width: 100%;
`;
