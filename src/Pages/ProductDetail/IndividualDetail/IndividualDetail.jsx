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
          <DetailCommentTitle>Review</DetailCommentTitle>
          {cakeCommentList.map((x, idx) => (
            <CakeCommentListWrap key={idx}>
              <CakeCommentUserWrap>
                <CakeCommentUserName>{x.user_nickname}님</CakeCommentUserName>
                <CakeCommentTime>
                  {String(x.created_at).slice(0, 10)}
                </CakeCommentTime>
              </CakeCommentUserWrap>
              <CakeCommentContents>
                <CakeCommentContent>{x.content}</CakeCommentContent>
                {x.img_url && <TestImg src={x.img_url} alt="ReviewImage" />}
              </CakeCommentContents>
            </CakeCommentListWrap>
          ))}
          <ReviewWriteNotice>
            리뷰는 마이페이지에서 작성할 수 있습니다.
          </ReviewWriteNotice>
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
  background-color: #deb17a;
  font-family: ${({ theme }) => theme.fontFamily};
`;
const DetailCommentTitle = styled.p`
  font-size: 30px;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.fontColor};
`;
const CakeCommentListWrap = styled.div`
  display: flex;
  justify-items: center;
  min-height: 100px;
  margin-bottom: 40px;
  box-sizing: border-box;
  padding: 20px;
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 10px;
  color: ${({ theme }) => theme.fontColor};
`;
const CakeCommentUserWrap = styled.div`
  margin-right: 40px;
  border-right: 1px solid black;
  width: 200px;
`;
const CakeCommentUserName = styled.p`
  color: ${({ theme }) => theme.fontColor};
  margin-bottom: 10px;
`;
const CakeCommentTime = styled.p`
  color: ${({ theme }) => theme.fontColor};
`;
const CakeCommentContents = styled.div`
  width: 100%;
`;
const CakeCommentContent = styled.p`
  width: 100%;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.fontColor};
`;
const TestImg = styled.img`
  width: 300px;
`;
const ReviewWriteNotice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.fontColor};
`;
