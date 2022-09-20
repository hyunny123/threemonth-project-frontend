import React from "react";
import { useNavigate } from "react-router";
import Loading from "../../../components/Loading";
import styled from "styled-components";

const GridMain = ({ gridData }, props) => {
  const navigate = useNavigate();
  const classes = "true";
  const packages = "true";

  const packagedesfilter = [...gridData].find(
    (v) => v.description === "package-main-grid-package"
  );

  const cakedesfilter = [...gridData].find(
    (v) => v.description === "package-main-grid-cake"
  );
  const madedesfilter = [...gridData].find(
    (v) => v.description === "package-main-grid-handmade"
  );
  const logodesfilter = [...gridData].find(
    (v) => v.description === "package-main-grid-logo"
  );
  if (!(packagedesfilter && cakedesfilter && madedesfilter && logodesfilter)) {
    return <Loading />;
  }

  const goToCakeList = () => {
    document.getElementById("cakeList").scrollIntoView(true);
  };

  const goToPackageForm = () => {
    navigate("/packagedetail");
  };

  return (
    <GridContainer>
      <GridTitle>뜨리먼뜨 신청하기</GridTitle>
      <GridBox>
        <GridImgBox1 onClick={goToPackageForm}>
          <ImgItem1 src={packagedesfilter.img_src} />

          <TitleItem packages={packages}>답례품 패키지 신청서 Click!</TitleItem>
        </GridImgBox1>
        <GridImgBox2>
          <ImgItem2 src={logodesfilter.img_src} />
        </GridImgBox2>

        <GridImgBox3>
          <ImgItem3 src={madedesfilter.img_src} />

          <TitleItem classes={classes} />
        </GridImgBox3>
        <GridImgBox4 onClick={goToCakeList}>
          <ImgItem4 src={cakedesfilter.img_src} />

          <TitleItem classes={classes}>홀케이크 주문서 Click!</TitleItem>
        </GridImgBox4>
      </GridBox>
    </GridContainer>
  );
};

export default GridMain;

const GridContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  letter-spacing: 0.05em;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const GridTitle = styled.h2`
  margin-bottom: 30px;
  margin-top: 100px;
  font-size: 2.5em;
  line-height: 1.2;
  color: ${({ theme }) => theme.fontColor};
  border-bottom: 3px solid ${({ theme }) => theme.fontColor};
  @media screen and (max-width: 1400px) {
    font-size: 1.7em;
    margin-top: 70px;
  }
  @media screen and (max-width: 750px) {
    font-size: 1.5em;
    margin-top: 70px;
  }
  @media screen and (max-width: 500px) {
    font-size: 1em;
    margin-top: 70px;
  }
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  height: 800px;
  background-color: ${({ theme }) => theme.bgColor};
  @media screen and (max-width: 1400px) {
    height: 700px;
  }
  @media screen and (max-width: 1300px) {
    height: 600px;
  }
  @media screen and (max-width: 1200px) {
    height: 550px;
  }
  @media screen and (max-width: 1100px) {
    height: 450px;
  }
  @media screen and (max-width: 1000px) {
    height: 600px;
  }
  @media screen and (max-width: 640px) {
    height: 500px;
  }
  @media screen and (max-width: 440px) {
    height: 450px;
  }
  @media screen and (max-width: 380px) {
    height: 400px;
  }
  @media screen and (max-width: 320px) {
    height: 300px;
  }
`;

const TitleItem = styled.h3`
  position: absolute;
  left: 10px;
  bottom: 10px;
  font-size: 25px;
  font-weight: 500;
  /* color: ${({ classes, theme }) =>
    classes === "true" ? "white" : theme.fontColor}; */
  color: ${({ theme }) => theme.fontColor};
  /* text-shadow: 3px 3px 7px RGB(51, 18, 17); */
  @media screen and (max-width: 2560px) {
    font-size: 25px;
    color: ${({ theme, packages }) =>
      packages === "true" ? "white" : theme.fontColor};
  }

  @media screen and (max-width: 1400px) {
    font-size: 25px;
  }
  @media screen and (max-width: 1050px) {
    font-size: 25px;
  }
  @media screen and (max-width: 990px) {
    font-size: 25px;
    color: ${({ classes, theme, packages }) =>
      classes || packages === "true" ? "white" : theme.fontColor};
  }
  @media screen and (max-width: 640px) {
    font-size: 20px;
  }
  @media screen and (max-width: 440px) {
    font-size: 15px;
  }
  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`;

const GridImgBox1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  grid-column: 1/3;
  grid-row: 1/3;
  cursor: pointer;
  @media screen and (max-width: 990px) {
    grid-column: 1/3;
    grid-row: 1/2;
  }
`;
const ImgItem1 = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.bgColor};
  @media screen and (max-width: 990px) {
    height: 100%;
  }
`;

const GridImgBox2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 3/4;
  overflow: hidden;
  @media screen and (max-width: 990px) {
    grid-column: 3/5;
    grid-row: 1/2;
  }
`;

const ImgItem2 = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.bgColor};
  @media screen and (max-width: 990px) {
    height: 100%;
  }
`;
const ImgItem3 = styled.img`
  object-fit: cover;
  width: 100%;
  height: 70%;
  background: ${({ theme }) => theme.bgColor};
  @media screen and (max-width: 990px) {
    height: 100%;
  }
`;
const GridImgBox3 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  grid-column: 4/4;
  grid-row: 1/3;
  @media screen and (max-width: 990px) {
    grid-column: 1/3;
    grid-row: 2/3;
  }
`;
const GridImgBox4 = styled.div`
  object-fit: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  grid-column: 3/4;
  grid-row: 2/3;
  cursor: pointer;
  @media screen and (max-width: 990px) {
    grid-column: 3/5;
    grid-row: 2/3;
  }

  @media screen and (max-width: 320px) {
    grid-column: 3/5;
    grid-row: 2/3;
  }
`;
const ImgItem4 = styled.img`
  width: 100%;
  height: 80%;
  background: ${({ theme }) => theme.bgColor};
  @media screen and (max-width: 990px) {
    height: 100%;
  }
`;
