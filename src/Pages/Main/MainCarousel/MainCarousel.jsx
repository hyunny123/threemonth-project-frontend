import React, { useEffect, useState, useRef } from "react";
import { API } from "../../../config";
import styled from "styled-components";

const MainCarousel = () => {
  const [carouselList, setCarouselList] = useState([]);
  const [bannerBtnNum, setBannerBtnNum] = useState(0);

  const bannerContainer = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBannerBtnNum((bannerBtnNum) =>
        bannerBtnNum < 3 ? bannerBtnNum + 1 : 0
      );
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [bannerBtnNum]);

  const { MAIN_CAROUSEL } = API;

  useEffect(() => {
    fetch(`${MAIN_CAROUSEL}`)
      .then((res) => res.json())
      .then((data) => setCarouselList(data));
  }, [MAIN_CAROUSEL]);

  return (
    <Container>
      <CarouselBox ref={bannerContainer}>
        {carouselList.map(({ img_src }, idx) => {
          return (
            <CarouselBoxItem
              key={idx}
              className={`inner ${bannerBtnNum === idx && "active"}`}
            >
              <CarouselBoxImg className="item" src={img_src} alt="img" />
            </CarouselBoxItem>
          );
        })}
      </CarouselBox>
    </Container>
  );
};

export default MainCarousel;

const Container = styled.div`
  padding-bottom: 10px;
`;

const CarouselBox = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  @media screen and (max-width: 1400px) {
    height: 1000px;
  }
  @media screen and (max-width: 781px) {
    height: 500px;
  }
  @media screen and (max-width: 640px) {
    height: 450px;
  }
  @media screen and (max-width: 515px) {
    height: 400px;
  }
  @media screen and (max-width: 400px) {
    height: 350px;
  }
`;

const CarouselBoxItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s;
  &.active {
    opacity: 1;
    transition: opacity 1s;
  }
`;

const CarouselBoxImg = styled.img`
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
`;
