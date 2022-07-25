import React from "react";
import styled from "styled-components";
import CafeFormDetail from "./CafeFormDetail/CafeFormDetail";
import CakeFormDetail from "./CakeFormDetail/CakeFormDetail";
import PackageFormDetail from "./PackageFormDetail/PackageFormDetail";

const FormDetail = () => {
  // const [detailFormData, setDetailFormData] = useState([]);
  return (
    <FormDetailContainer>
      <CafeFormDetail />
      <PackageFormDetail />
      <CakeFormDetail />
    </FormDetailContainer>
  );
};

export default FormDetail;

const FormDetailContainer = styled.div`
  width: 100%;
`;
