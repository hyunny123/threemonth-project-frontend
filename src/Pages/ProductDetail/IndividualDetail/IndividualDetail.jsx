import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import Loading from "../../../components/Loading";
import { API } from "../../../config";
import IndividualDetailAside from "./IndividualDetailAside";
import IndividualDetailMain from "./IndividualDetailMain";

const IndividualDetail = () => {
  const navigate = useNavigate();
  const [individualData, setIndividualData] = useState({
    buying: false,
    description: null,
    id: 0,
    is_active: false,
    optional_description: null,
    price: 0,
    product_images: [],
    product_name: "",
    category: "bread",
  });
  const { category } = individualData;

  const [cakeCommentList, setCakeCommentList] = useState([
    { id: 0, content: "", order: 0 },
  ]);
  const params = useParams();
  const { productId } = params;
  const { ITEM_GET } = API;

  useEffect(() => {
    axios
      .get(`${ITEM_GET}/${productId}`)
      .catch((error) => {
        const { response } = error;
        alert(`error: ${response.status}`);
        navigate(-1);
      })
      .then((res) => setIndividualData(res.data));
    axios
      .get(`http://15.164.163.31:8001/orders/reviews?type=cake`)
      .catch((error) => new Error(error.response))
      .then((res) => {
        console.log(res.data);
        setCakeCommentList(res.data);
      });
  }, [ITEM_GET, productId, navigate]);

  if (individualData.id === 0) {
    return <Loading />;
  }

  return (
    <IndividualDetailWrapper>
      <IndividualDetailWidth>
        <IndividualDetailMain individualData={individualData} />
        <IndividualDetailAside individualData={individualData} />
      </IndividualDetailWidth>
      {category === "cake" && (
        <DetailCommentWrap>
          <div style={{ marginBottom: "20px" }}>내돈 내산 솔직 리뷰들</div>
          {cakeCommentList.map((x, idx) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100px",
                border: "1px solid red",
              }}
              key={idx}
            >
              <p style={{ marginRight: "40px", width: "50px" }}>
                {x.user_nickname}님
              </p>
              <div>
                <p>{x.content}</p>
                {x.img_url && <TestImg src={x.img_url} alt="ReviewImage" />}
              </div>
            </div>
          ))}
        </DetailCommentWrap>
      )}
    </IndividualDetailWrapper>
  );
};

export default IndividualDetail;

const IndividualDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.fontColor};
`;

const IndividualDetailWidth = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 50px;
  min-height: 400px;
  width: 85%;

  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr;
    width: 90%;
    margin-top: 0px;
  }
  @media (max-width: 640px) {
    place-items: center;
  }
`;
const DetailCommentWrap = styled.div`
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  font-size: 16px;
  flex-direction: column;
  margin: 20px 0;
  border-radius: 10px;
  width: 85%;
  min-height: 100px;
  background-color: ${({ theme }) => theme.bgColor};
  font-family: ${({ theme }) => theme.fontFamily};
`;
const TestImg = styled.img`
  width: 50px;
  height: 50px;
`;
