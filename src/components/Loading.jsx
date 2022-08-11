import React from "react";
import styled from "styled-components";
import { TailSpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <LoadingWrapper>
      <TailSpin
        color="#331211"
        width="80"
        wrapperStyle={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </LoadingWrapper>
  );
};

export default Loading;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 450px;
`;
