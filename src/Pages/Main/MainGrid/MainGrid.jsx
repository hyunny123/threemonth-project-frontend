import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Loading from "../../../components/Loading";

const GridMain = ({ gridData }) => {
  const navigate = useNavigate();

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
  // console.log(packagedesfilter);
  const goToCakeList = () => {
    document.getElementById("cakeList").scrollIntoView(true);
  };

  const goToPackageForm = () => {
    navigate("/packagedetail");
  };

  return (
    <GridContainer>
      <GridTitle>뜨리먼뜨 Form</GridTitle>
      <GridBox>
        <GridImgBox1 onClick={goToPackageForm}>
          <ImgItem1 src={packagedesfilter.img_src} />

          <TitleItem>Package Form</TitleItem>
        </GridImgBox1>
        <ImgItem2 src={logodesfilter.img_src} />

        <GridImgBox3>
          <ImgItem3 src={madedesfilter.img_src} />

          <TitleItem>All Handmade </TitleItem>
        </GridImgBox3>
        <GridImgBox4 onClick={goToCakeList}>
          <ImgItem4 src={cakedesfilter.img_src} />

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
`;

const GridTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 3em;
  color: #331211;
  border-bottom: 3px solid #331211;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  height: 800px;
  background-color: ${(props) => props.theme.bgColor};
`;

const GridImgBox1 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  grid-column: 1/3;
  grid-row: 1/3;
  cursor: pointer;
`;
const ImgItem1 = styled.img`
  width: 100%;
  height: 100%;
  background: #fff;

  &:nth-child(4) {
    width: 100%;
    height: 80%;
    background: #fff;
  }
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
  grid-column: 3/4;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: #fff;
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
  /* cursor: pointer; */
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
