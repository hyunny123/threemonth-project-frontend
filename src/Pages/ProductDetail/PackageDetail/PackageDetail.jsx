import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { USER_TOKEN, API } from "../../../config";
import PackageDetailMain from "./PackageDetailMain";

const PackageDetail = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [packageReviewList, setPackageReviewList] = useState([
    { id: 0, content: "", order: 0 },
  ]);

  useEffect(() => {
    axios
      .get(`${API.GET_PACKAGE_REVIEW}`)
      .then((res) => setPackageReviewList(res.data));
  }, []);

  const goReservGiftBox = () => {
    if (USER_TOKEN) {
      navigate("/reserveform", { state: { formType: "package" } });
    } else {
      if (
        window.confirm("로그인이 필요한 서비스입니다. 로그인 하시겠습니까?")
      ) {
        localStorage.setItem("prevpath", pathname);
        navigate("/loginpage");
      }
    }
  };
  return (
    <PackageDetailWrapper>
      <PackageDetailWidth>
        <PackageDetailMain />
        <DetailIndividualReservBtnWrap>
          <DetailIndividualReservBtn onClick={goReservGiftBox}>
            기프트박스 신청하기
          </DetailIndividualReservBtn>
        </DetailIndividualReservBtnWrap>
      </PackageDetailWidth>
      <DetailCommentWrap>
        <DetailCommentTitle>Review</DetailCommentTitle>
        {packageReviewList.map((x, idx) => (
          <PackageReviewListWrap key={idx}>
            <PackageReviewUserWrap>
              <PackageReviewUserName>{x.user_nickname}님</PackageReviewUserName>
              <PackageReviewTime>
                {String(x.created_at).slice(0, 10)}
              </PackageReviewTime>
            </PackageReviewUserWrap>
            <PackageReviewContents>
              <PackageReviewContent>{x.content}</PackageReviewContent>
              {x.img_url && <TestImg src={x.img_url} alt="ReviewImage" />}
            </PackageReviewContents>
          </PackageReviewListWrap>
        ))}
        <ReviewWriteNotice>
          * 리뷰는 마이페이지에서 작성할 수 있습니다.
        </ReviewWriteNotice>
      </DetailCommentWrap>
    </PackageDetailWrapper>
  );
};

export default PackageDetail;

const PackageDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.fontColor};
  @media (max-width: 630px) {
  }
`;

const PackageDetailWidth = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 50px;
  min-height: 400px;
  width: 85%;
  @media (max-width: 630px) {
    grid-template-columns: 1fr;
  }
`;

const DetailIndividualReservBtnWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 630px) {
    position: inherit;
  }
`;

const DetailIndividualReservBtn = styled.button`
  position: sticky;
  top: 40px;
  margin-top: 50px;
  border-style: none;
  height: 60px;
  width: 70%;
  border-radius: 5px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.fontColor};
  border: 1px solid ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.bgColor};
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 15px;
  }
  @media (max-width: 630px) {
    position: inherit;
    margin-top: -20px;
    margin-bottom: 50px;
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
const PackageReviewListWrap = styled.div`
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
const PackageReviewUserWrap = styled.div`
  margin-right: 40px;
  border-right: 1px solid black;
  width: 200px;
`;
const PackageReviewUserName = styled.p`
  color: ${({ theme }) => theme.fontColor};
  margin-bottom: 10px;
`;
const PackageReviewTime = styled.p`
  color: ${({ theme }) => theme.fontColor};
`;
const PackageReviewContents = styled.div`
  width: 100%;
`;
const PackageReviewContent = styled.p`
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
  color: ${({ theme }) => theme.fontColor};
`;
