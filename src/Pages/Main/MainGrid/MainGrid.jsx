import React from "react";
import styled from "styled-components";

const GridMain = () => {
  return (
    <GridContainer>
      <GridTitle>뜨리먼뜨 Form</GridTitle>
      <GridBox>
        <GridImgBox1>
          <ImgItem1 src="./images/main/grid/gridmain-giftSet.png" />
          <TitleItem>Package Form</TitleItem>
        </GridImgBox1>
        <ImgItem2 src="./images/main/grid/logo.png" />
        <GridImgBox3>
          <ImgItem3 src="./images/main/grid/gridmain06.png" />
          <TitleItem>All Handmade </TitleItem>
        </GridImgBox3>
        <GridImgBox4>
          <ImgItem4 src="./images/main/grid/gridmain-cake04.png" />
          <TitleItem>Cake Form</TitleItem>
        </GridImgBox4>
      </GridBox>
    </GridContainer>
  );
};

export default GridMain;

const GridContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  /* background-color: RGB(241, 230, 209); */
  padding: 150px 0px;
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
  /* grid-gap: 5px; */
  width: 100%;
  /* height: 600px; */
`;
const GridImgBox1 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  grid-column: 1/3;
  grid-row: 1/3;
  cursor: pointer;
  /* border: 3px solid #331211; */
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
  height: 100%;
  background: #fff;
`;
const GridImgBox3 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
  align-items: center;
  overflow: hidden;
  grid-column: 3/4;
  grid-row: 2/3;
  cursor: pointer;
  /* border: 3px solid #331211; */
`;
const ImgItem4 = styled.img`
  width: 100%;
  height: 100%;
  background: #fff;
`;
