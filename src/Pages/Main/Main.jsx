import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../../components/Loading";
import { API } from "../../config";

import MainCarousel from "./MainCarousel/MainCarousel";
import MainGrid from "./MainGrid/MainGrid";
import MainCakeList from "./MainCakeList/MainCakeList";
import MainList from "./MainList/MainList";

const Main = () => {
  const [carouselData, setCarouselData] = useState([
    {
      img_src: "",
      description: "",
    },
  ]);
  const [gridData, setGridData] = useState([
    {
      img_src: "",
      description: "",
    },
  ]);
  const [mainCakeList, setMainCakeList] = useState([
    {
      id: 0,
      product_name: "",
      price: 0,
      description: null,
      optional_description: null,
      main_list_image_src: "",
    },
  ]);
  const [mainList, setMainList] = useState([
    {
      id: 0,
      product_name: "",
      price: 0,
      description: null,
      optional_description: null,
      main_list_image_src: "",
    },
  ]);

  const { MAIN_DETAILLIST, MAIN_GRID, MAIN_CAROUSEL } = API;
  // console.log(carouselData);
  // console.log(gridData);
  // console.log(cakeList);
  // console.log(mainList);

  useEffect(() => {
    fetch(`${MAIN_CAROUSEL}`)
      .then((response) => response.json())
      .then((data) => setCarouselData(data));
    fetch(`${MAIN_GRID}`)
      .then((response) => response.json())
      .then((data) => setGridData(data));
    fetch(`${MAIN_DETAILLIST}?category=cake`)
      .then((response) => response.json())
      .then((data) => setMainCakeList(data));
    fetch(`${MAIN_DETAILLIST}?category=bread`)
      .then((response) => response.json())
      .then((data) => setMainList(data));
  }, []);

  if (!(carouselData && gridData && mainCakeList && mainList)) {
    return <Loading />;
  }

  return (
    <Container>
      <MainCarousel carouselData={carouselData} />
      <MainGrid gridData={gridData} />
      <MainCakeList mainCakeList={mainCakeList} />
      <MainList mainList={mainList} />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
`;
