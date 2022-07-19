import React from "react";
import styled from "styled-components";

import MainCarousel from "./MainCarousel/MainCarousel";
import MainGrid from "./MainGrid/MainGrid";
import MainList from "./MainList/MainList";

const Main = () => {
  return (
    <Container>
      <MainCarousel />
      <MainGrid />
      <MainList />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
`;
