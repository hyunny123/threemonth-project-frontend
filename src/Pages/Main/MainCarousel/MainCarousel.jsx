import React from "react";
import Carousel from "react-material-ui-carousel";
// import { Paper, Button } from "@mui/material";

let items = [
  {
    imgAddress: "./images/main/carousel/main_carousel01.png",
  },
  {
    imgAddress: "./images/main/carousel/main_carousel02.png",
  },
  {
    imgAddress: "./images/main/carousel/main_carousel03.png",
  },
  {
    imgAddress: "./images/main/carousel/main_carousel04.png",
  },
];

const CarouselMain = () => {
  //   const [heightList, setHeightList] = useState({ height: 0 });
  //   const componentDidMount = () => {
  //     window.addEventListener("resize", this.updateDimensions);
  //     this.updateDimensions();
  //   };

  //   const getMainDivHeight = () => {
  //     const mainImageWidth = 1920;
  //     const mainImageHeight = 900;
  //     return Math.floor((window.innerWidth * mainImageHeight) / mainImageWidth);
  //   };

  //   const updateDimensions = () => {
  //     this.setHeightList({ height: this.getMainDivHeight() });
  //   };
  return (
    <div>
      <Carousel
        indicators={true}

        // getMainDivHeight={getMainDivHeight}
        // componentDidMount={componentDidMount}
        // updateDimensions={updateDimensions}
      >
        {items.map((item, i) => (
          <div
            style={{
              width: "100%",
              height: "auto",
              margin: "0 auto",
              paddingTop: "30px",
            }}
          >
            <img
              src={item.imgAddress}
              style={{ width: "100%", height: "900px", marginBottom: "20px" }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselMain;
