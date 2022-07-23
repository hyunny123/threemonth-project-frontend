import React from "react";
import styled from "styled-components";

const IndividualDetailMain = ({ data }) => {
  const { productImages } = data;
  const { contents } = productImages;

  return (
    <IndividualDetailMainWrapper>
      {contents.map((x, idx) => (
        <div key={idx}>
          <ProductImg src={x} alt="image" />
        </div>
      ))}
      <Origin>
        <OriginTitle>원산지</OriginTitle>
        <OriginContent>
          "국내산 딸기 당근 밀가루 꿀 계란 설탕 버터 프랑스산 / 뉴질랜드산 /
          다크초콜릿 프랑스산 / 화이트 초콜릿 벨기에산 / 둘세초콜릿 프랑스산 /
          얼그레이티 영국산"
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
  border-right: 0.5px solid #331211;
  box-sizing: border-box;
  padding: 20px;

  @media (max-width: 700px) {
    border-right: none;
  }
`;

const ProductImg = styled.img`
  margin-top: 20px;
  width: 100%;
  min-width: 300px;
  height: 300px;
`;

const Origin = styled.div`
  margin-top: 150px;
  display: grid;
  width: 70%;
  grid-template-rows: repeat(2, 50px);
  grid-template-columns: 1fr;
  border: 1px solid #331211;
  border-radius: 10px;
  background-color: #f1e6d1;
`;
const OriginTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/5;
  border-bottom: 0.5px solid #331211;
`;
const OriginContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  box-sizing: border-box;
  padding: 10px;
`;
