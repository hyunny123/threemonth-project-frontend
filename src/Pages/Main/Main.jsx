import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../../components/Loading";
import { API } from "../../config";

import MainCarousel from "./MainCarousel/MainCarousel";
import MainGrid from "./MainGrid/MainGrid";
import MainCakeList from "./MainCakeList/MainCakeList";
import MainList from "./MainList/MainList";
import axios from "axios";

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
      product_images: [
        {
          img_src: "",
          id: 0,
          description: null,
          product: 0,
        },
      ],
    },
  ]);
  const [mainList, setMainList] = useState([
    {
      id: 0,
      product_name: "",
      price: 0,
      description: null,
      optional_description: null,
      product_images: [
        {
          img_src: "",
          id: 0,
          description: null,
          product: 0,
        },
      ],
    },
  ]);

  const { MAIN_DETAILLIST, MAIN_GRID, MAIN_CAROUSEL } = API;
  useEffect(() => {
    axios.get(`${MAIN_CAROUSEL}`).then((res) => {
      if (res.status === 200) {
        setCarouselData(res.data);
      }
    });
    axios.get(`${MAIN_GRID}`).then((res) => {
      if (res.status === 200) {
        setGridData(res.data);
      }
    });
    axios.get(`${MAIN_DETAILLIST}?category=cake`).then((res) => {
      if (res.status === 200) {
        setMainCakeList(res.data);
      }
    });
    axios.get(`${MAIN_DETAILLIST}?category=bread`).then((res) => {
      if (res.status === 200) {
        setMainList(res.data);
      }
    });
  }, [MAIN_CAROUSEL, MAIN_GRID, MAIN_DETAILLIST]);

  if (mainList.id === 0) {
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
