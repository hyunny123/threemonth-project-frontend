import { IsoTwoTone } from "@mui/icons-material";
import React from "react";

import styled from "styled-components";

const GridItems = [
  {
    id: 1,
    img_url: "./images/main/grid/package-main-grid-package.png",
    grid_title: "GiftBox Form",
  },
  {
    id: 2,
    img_url: "./images/main/grid/package-main-grid-logo.png",
    grid_title: "",
  },
  {
    id: 3,
    img_url: "./images/main/grid/package-main-grid-handmade.png",
    grid_title: "Handmade",
  },
  {
    id: 4,
    img_url: "./images/main/grid/package-main-grid-cake.png",
    grid_title: "Cake Form",
  },
];

const GridMain = () => {
  // const makeQueryString =()=>{
  //   cosnt {id,img_url, grid_title} = checkedList;
  //   let queryString =
  // }
  // const CakeDetailClickHandler = () => {
  //   navigate("/");
  // };
  return (
    <GridContainer>
      <GridTitle>뜨리먼뜨 Form</GridTitle>
      <GridBox>
        {/* {GridItems.map((item, idx) => (
          <GridImgBox key={idx}>
            <ImgItem1 src={item.img_url} />
            <GridTitle>{item.grid_title}</GridTitle>
          </GridImgBox>
        ))} */}
        <GridImgBox1>
          <ImgItem1 src="./images/main/grid/package-main-grid-package.png" />
          <TitleItem>Package Form</TitleItem>
        </GridImgBox1>
        <ImgItem2 src="./images/main/grid/package-main-grid-logo.png" />
        <GridImgBox3>
          <ImgItem3 src="./images/main/grid/package-main-grid-handmade.png" />
          <TitleItem>All Handmade </TitleItem>
        </GridImgBox3>
        <GridImgBox4>
          <ImgItem4 src="./images/main/grid/package-main-grid-cake.png" />
          <TitleItem>Cake Form</TitleItem>
        </GridImgBox4>
      </GridBox>
    </GridContainer>
  );
};

export default GridMain;

const GridContainer = styled.div`
  width: 85%;
  /* height: 100%; */
  margin: 0 auto;
  /* background-color: RGB(241, 230, 209); */
  /* padding: 150px 0px; */
`;

const GridTitle = styled.h2`
  margin-bottom: 30px;
  /* margin-left: 10px; */
  font-size: 3em;
  color: #331211;
  border-bottom: 3px solid #331211;
  /* text-shadow: 3px 3px 7px; */
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  background-color: ${(props) => props.theme.bgColor};
  /* grid-gap: 5px; */
  width: 100%;
  height: 800px;

  &:nth-child(3) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    grid-column: 4/4;
    grid-row: 1/3;
    cursor: pointer;
    /* border: 3px solid #331211; */
  }
  &:nth-child(4) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    grid-column: 3/4;
    grid-row: 2/3;
    cursor: pointer;
    border: 3px solid #331211;
  }
`;
const GridImgBox1 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  grid-column: 1/3;
  grid-row: 1/3;
  cursor: pointer;
  /* border: 3px solid #331211; */

  &:nth-child(2) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    grid-column: 1/3;
    grid-row: 1/3;
    cursor: pointer;
    /* border: 3px solid #331211; */
  }
`;
const ImgItem1 = styled.img`
  width: 100%;
  height: 100%;
  background: #fff;
`;
const TitleItem = styled.h3`
  position: absolute;
  left: 10px;
  bottom: 10px;
  font-size: 30px;
  font-weight: 500;
  text-shadow: 3px 3px 7px RGB(51, 18, 17);
`;
const ImgItem2 = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  grid-column: 3/4;
  width: 100%;
  height: 100%;
  background: #fff;
  /* border: 3px solid #331211; */
`;
const ImgItem3 = styled.img`
  width: 100%;
  height: 70%;
  background: #fff;
`;
const GridImgBox3 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  grid-column: 4/4;
  grid-row: 1/3;
  cursor: pointer;
  /* border: 3px solid #331211; */
`;
const GridImgBox4 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  grid-column: 3/4;
  grid-row: 2/3;
  cursor: pointer;
  /* border: 3px solid #331211; */
`;
const ImgItem4 = styled.img`
  width: 100%;
  height: 80%;
  background: #fff;
`;
