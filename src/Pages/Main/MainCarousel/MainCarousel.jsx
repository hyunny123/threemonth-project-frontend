import React from "react";
import Carousel from "react-material-ui-carousel";
// import { Paper, Button } from "@mui/material";

const CAROUSEL_DATA = [
  {
    img_url: "./images/main/carousel/package_main_carousel01.png",
  },
  {
    img_url: "./images/main/carousel/package_main_carousel02.png",
  },
  {
    img_url: "./images/main/carousel/package_main_carousel03.png",
  },
  {
    img_url: "./images/main/carousel/package_main_carousel04.png",
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
        {CAROUSEL_DATA.map((item, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: "auto",
              margin: "0 auto",
              paddingTop: "30px",
            }}
          >
            <img
              src={item.img_url}
              style={{ width: "100%", height: "900px", marginBottom: "20px" }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselMain;
