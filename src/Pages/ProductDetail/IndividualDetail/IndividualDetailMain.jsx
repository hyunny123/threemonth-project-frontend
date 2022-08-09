import React from "react";
import styled from "styled-components";

const IndividualDetailMain = ({ individualData }) => {
  const { product_images } = individualData;

  return (
    <IndividualDetailMainWrapper>
      {product_images.map((img, idx) => (
        <div key={idx}>
          <ProductImg src={img.img_src} alt="image" />
        </div>
      ))}
      <Origin>
        <OriginTitle>원산지</OriginTitle>
        <OriginContent>
          국내산 딸기 당근 밀가루 꿀 계란 설탕 버터 프랑스산 / 뉴질랜드산 /
          다크초콜릿 프랑스산 / 화이트 초콜릿 벨기에산 / 둘세초콜릿 프랑스산 /
          얼그레이티 영국산
        </OriginContent>
      </Origin>
    </IndividualDetailMainWrapper>
  );
};

export default IndividualDetailMain;

const IndividualDetailMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 0.5px solid ${({ theme }) => theme.fontColor};
  box-sizing: border-box;
  padding: 20px;

  @media (max-width: 768px) {
    border-right: none;
  }
`;

const ProductImg = styled.img`
  margin-top: 30px;
  min-width: 150px;
  height: 250px;
  @media (max-width: 768px) {
  }
`;

const Origin = styled.div`
  margin-top: 150px;
  display: grid;
  width: 70%;
  grid-template-rows: repeat(2, 50px);
  grid-template-columns: 1fr;
  border: 1px solid ${({ theme }) => theme.fontColor};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bgColor};
  @media (max-width: 768px) {
    width: 80%;
    margin-top: 40px;
    grid-template-rows: repeat(2, 40px);
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
const OriginTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/5;
  border-bottom: 0.5px solid ${({ theme }) => theme.fontColor};
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
const OriginContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  box-sizing: border-box;
  padding: 10px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
