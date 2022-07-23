import React, { useEffect, useState } from "react";
import styled from "styled-components";

import MainCarousel from "./MainCarousel/MainCarousel";
import MainGrid from "./MainGrid/MainGrid";
import MainList from "./MainList/MainList";

const Main = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [gridData, setGridData] = useState([
    {
      img_src: "",
      description: "",
    },
  ]);
  const [mainList, setMainList] = useState([]);
  // console.log(carouselData);
  // console.log(gridData);
  // console.log(mainList);

  useEffect(() => {
    fetch(
      "http://15.164.163.31:8000/products/independentimages?page=main&place=carousel"
    )
      .then((response) => response.json())
      .then((data) => setCarouselData(data));
  }, []);

  useEffect(() => {
    fetch(
      "http://15.164.163.31:8000/products/independentimages?page=main&place=grid"
    )
      .then((response) => response.json())
      .then((data) => setGridData(data));
  }, []);

  useEffect(() => {
    fetch("http://15.164.163.31:8000/products")
      .then((response) => response.json())
      .then((data) => setMainList(data));
  }, []);

  return (
    <Container>
      <MainCarousel carouselData={carouselData} />
      <MainGrid gridData={gridData} />
      <MainList mainList={mainList} />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
`;
