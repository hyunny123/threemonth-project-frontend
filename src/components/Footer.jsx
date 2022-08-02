import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();

  const cafeFormClickHandler = () => {
    navigate("/cafeinputform");
  };
  const adminClickHandler = () => {
    navigate("/adminpage");
  };
  return (
    <Container>
      <Wrapper>
        <FooterSns>
          <Title>Follow us</Title>
          <Sns>
            <IconWrapper href="https://www.instagram.com/th_reemonths/">
              <Icon src="/images/instagram-logo.png" />
            </IconWrapper>
            <SnsTitle>INSTAGRAM</SnsTitle>
          </Sns>
          <Sns>
            <IconWrapper href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EB%9C%A8%EB%A6%AC%EB%A8%BC%EB%9C%A8">
              <Icon src="/images/naver-logo.png" />
            </IconWrapper>
            <SnsTitle>NAVER</SnsTitle>
          </Sns>
          <CafeFormButton onClick={cafeFormClickHandler}>
            카페납품 제휴
          </CafeFormButton>
          <AdminButton onClick={adminClickHandler}>Admin</AdminButton>
        </FooterSns>

        <Company>
          <CompanyTitle>Business Hours</CompanyTitle>

          <Info>Mon - Wed, Fri - Sun </Info>
          <Info>Open 12:00 - Closed 20:00</Info>
          <Info>Every Thursday OFF</Info>
          <Rights>ⓒthreemonths. All Rights Reserved</Rights>
        </Company>
        <Company>
          <CompanyTitle>Threemonths's Info</CompanyTitle>

          <Info>BusinessName : 뜨리먼뜨</Info>
          <Info>Owner : 최주희</Info>
          <Info>BusinessNumber : 3661201580</Info>
          <Info>
            Address : 서울 강서구 등촌로5가길 40 뜨리먼뜨 (우 : 07740)
          </Info>
          <Info>Email : rse_0507@naver.com</Info>
          <Info>통신판매정보 : 2021-서울강서-0412</Info>
        </Company>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  height: 250px;
  margin: 0 auto;
  padding: 30px 0px;
  background-color: #f1e6d1;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  width: 85%;
`;

const FooterSns = styled.div``;

const Title = styled.p`
  padding: 10px 0px;
  font-size: 1.3em;
  font-weight: 700;
  color: #331211;
`;

const Sns = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const SnsTitle = styled.div`
  padding: 5px 0px;
  font-size: 1.1em;
  color: #331211;
`;

const Icon = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 5px;
  border-radius: 15px;
  cursor: pointer;
`;

const CafeFormButton = styled.button`
  border-style: none;
  height: 35px;
  width: 85%;
  font-size: 1em;
  font-family: "GangwonEdu_OTFBoldA";
  background-color: #332211;
  color: #f1e6d1;
  border-radius: 5px;
  margin-top: 5px;
  cursor: pointer;
`;
const AdminButton = styled.button`
  border-style: none;
  height: 35px;
  width: 85%;
  font-size: 1em;
  font-family: "GangwonEdu_OTFBoldA";
  background-color: #332211;
  color: #f1e6d1;
  border-radius: 5px;
  margin-top: 5px;
  cursor: pointer;
`;

const IconWrapper = styled.a``;

const Company = styled.div``;

const CompanyTitle = styled(Title)``;

const Info = styled(Sns)``;

const Rights = styled(Sns)`
  font-size: 1.2em;
  font-weight: 700;
  padding-top: 20px;
  color: #331211;
`;
