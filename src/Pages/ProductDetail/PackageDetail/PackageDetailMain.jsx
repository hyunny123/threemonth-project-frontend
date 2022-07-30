import React from "react";
import styled from "styled-components";

const PackageDetailMain = ({ packageData }) => {
  return (
    <PackageDetailMainWrapper>
      <PackageDetailMainDes>
        저희 뜨리먼뜨는 기프트 박스 상품을 통해서
        <br /> 각종 행사 및 기업에 납품을 하고 있습니다.
      </PackageDetailMainDes>
      <PackageDetailMainDes>
        기프트 박스 구성은 원하시는 대로 구성하실 수 있으며,
        <br /> 행사 분위기나 장소에 따라 저희가 제안할 수 있습니다.
      </PackageDetailMainDes>
      {packageData.map((img, idx) => (
        <PackageImgWrapper key={idx}>
          <PackageImg src={img} alt="images" />
        </PackageImgWrapper>
      ))}
      <PackageDetailMainDes>
        기프트 박스는 상기 이미지와 다소 다를 수 있습니다.
      </PackageDetailMainDes>
      <PackageDetailMainDes>
        주문 수량, 종류에 따라 단가가 소폭 달라질 수 있기 때문에 <br />
        가격에 대한 문의는 기프트박스 신청하신 후 <br /> 컨펌 과정에서 별도로
        안내 드리고 있습니다.
      </PackageDetailMainDes>
    </PackageDetailMainWrapper>
  );
};

export default PackageDetailMain;

const PackageDetailMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
`;

const PackageDetailMainDes = styled.p`
  font-size: 20px;
  margin-bottom: 100px;
  text-align: center;
  &:nth-child(1) {
    margin-top: 100px;
  }
  &:last-child {
    margin-bottom: 200px;
  }
`;

const PackageImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PackageImg = styled.img`
  width: 100%;
  height: 80%;
`;
