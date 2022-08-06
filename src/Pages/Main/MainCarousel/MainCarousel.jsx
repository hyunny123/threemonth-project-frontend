import React from "react";
import Carousel from "react-material-ui-carousel";

const CarouselMain = ({ carouselData }) => {
  const componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  };

  const getMainDivHeight = () => {
    const mainImageWidth = 1920;
    const mainImageHeight = 900;
    return Math.floor((window.innerWidth * mainImageHeight) / mainImageWidth);
  };

  const updateDimensions = () => {
    this.setHeightList({ height: this.getMainDivHeight() });
  };
  return (
    <div>
      <Carousel
        indicators={true}
        getMainDivHeight={getMainDivHeight}
        componentDidMount={componentDidMount}
        updateDimensions={updateDimensions}
      >
        {carouselData.map((item, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: "auto",
              margin: "0 auto",
            }}
          >
            <img
              src={item.img_src}
              style={{
                width: "100%",
                height: "900px",
                marginBottom: "20px",
                "@media(max-width:768px)": { height: "700px" },
                "@media(max-width:320px)": { height: "300px" },
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselMain;
