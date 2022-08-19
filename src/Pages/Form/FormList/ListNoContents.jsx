import React from "react";
import { useNavigate, useLocation } from "react-router";
import styled from "styled-components";
import { USER_TOKEN } from "../../../config";

const ListNoContents = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <FormListWrapper>
      <FormListWidth>
        <FormListTitle>주문서 목록</FormListTitle>
        <ListBox>
          <ListBoxMenu>
            <MenuNum>글 번호</MenuNum>
            <MenuSub>제목</MenuSub>
            <MenuDate>작성일</MenuDate>
            <MenuWriter>작성자</MenuWriter>
            <MenuIsChecked>컨펌여부</MenuIsChecked>
          </ListBoxMenu>
          <NoContentWrap>
            <NoContent>신청 내역이 없습니다.</NoContent>
          </NoContentWrap>
        </ListBox>
        <ReserveBtnWrap>
          <ReserveBtn
            onClick={() => {
              if (USER_TOKEN) {
                navigate("/reserveform", { state: { formType: "cake" } });
              } else {
                if (
                  window.confirm(
                    "로그인이 필요한 서비스입니다. 로그인 하시겠습니까?"
                  )
                ) {
                  localStorage.setItem("prevpath", pathname);
                  navigate("/loginpage");
                }
              }
            }}
          >
            케이크 신청하기
          </ReserveBtn>
          <ReserveBtn
            onClick={() => {
              if (USER_TOKEN) {
                navigate("/reserveform", { state: { formType: "package" } });
              } else {
                if (
                  window.confirm(
                    "로그인이 필요한 서비스입니다. 로그인 하시겠습니까?"
                  )
                ) {
                  localStorage.setItem("prevpath", pathname);
                  navigate("/loginpage");
                }
              }
            }}
          >
            기프트박스 신청하기
          </ReserveBtn>
        </ReserveBtnWrap>
      </FormListWidth>
    </FormListWrapper>
  );
};

export default ListNoContents;

const FormListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  box-sizing: border-box;
  @media (max-width: 580px) {
    width: 100vw;
  }
`;

const FormListWidth = styled.div`
  margin: 80px 0;
  width: 85%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormListTitle = styled.p`
  font-size: 1.6em;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
const ListBox = styled.div`
  width: 100%;
  min-height: 400px;
  border-radius: 20px;
`;
const ListBoxMenu = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr 1fr 1fr 1fr;
  grid-template-rows: 50px;
  box-sizing: border-box;
  border-bottom: 4px solid ${(props) => props.theme.bgColor};
  margin-top: 50px;
  @media (max-width: 580px) {
    grid-template-columns: 0.5fr 3fr 1fr 1fr 1fr;
    grid-template-rows: 30px;
  }
  @media (max-width: 450px) {
    grid-template-columns: 0.5fr 2fr 1fr;
    grid-template-rows: 20px;
    font-size: 14px;
  }
`;
const MenuNum = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 580px) {
    font-size: 13px;
  }
`;
const MenuSub = styled(MenuNum)``;
const MenuDate = styled(MenuNum)`
  @media (max-width: 580px) {
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 0 10px;
  }
`;
const MenuWriter = styled(MenuNum)`
  @media (max-width: 450px) {
    display: none;
  }
`;
const MenuIsChecked = styled(MenuNum)`
  @media (max-width: 450px) {
    display: none;
  }
`;

const NoContentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 20px;
`;
const NoContent = styled.p`
  color: ${({ theme }) => theme.fontColor};
`;

const ReserveBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;
const ReserveBtn = styled.button`
  border-style: none;
  width: 150px;
  height: 40px;
  font-size: 17px;
  margin-left: 20px;
  background-color: ${({ theme }) => theme.bgColor};
  font-family: ${({ theme }) => theme.fontFamily};
  border: 1px solid ${({ theme }) => theme.fontColor};
  color: ${({ theme }) => theme.fontColor};
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100px;
    height: 25px;
    font-size: 0.6em;
    font-weight: bold;
  }
`;
