import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { USER_TOKEN } from "../../../config";
import { LOGIN_URI } from "../../Login/AuthData";

const ListNoContents = () => {
  const navigate = useNavigate();
  return (
    <FormListWrapper>
      <FormListWidth>
        <FormListTitle>뜨리먼뜨 Form</FormListTitle>
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
              USER_TOKEN
                ? navigate("/reserveform", { state: { formType: "cake" } })
                : window.confirm(
                    "로그인이 필요한 서비스입니다. 로그인 하시겠습니까?"
                  )
                ? (window.location = `${LOGIN_URI}`)
                : navigate("/formlist");
            }}
          >
            케이크 신청하기
          </ReserveBtn>
          <ReserveBtn
            onClick={() => {
              USER_TOKEN
                ? navigate("/reserveform", { state: { formType: "package" } })
                : window.confirm(
                    "로그인이 필요한 서비스입니다. 로그인 하시겠습니까?"
                  )
                ? (window.location = `${LOGIN_URI}`)
                : navigate("/formlist");
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
  width: 100%;
  color: ${(props) => props.theme.fontColor};
`;

const FormListWidth = styled.div`
  margin: 80px 0;
  width: 85%;
`;

const FormListTitle = styled.p`
  font-size: 1.6em;
`;
const ListBox = styled.div`
  width: 100%;
  min-height: 400px;
  border-radius: 20px;
`;
const ListBoxMenu = styled.div`
  display: grid;
  align-items: end;
  grid-template-columns: 0.4fr 2fr 0.5fr 0.5fr 0.5fr;
  grid-template-rows: 50px;
  box-sizing: border-box;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 4px solid ${(props) => props.theme.bgColor};
`;
const MenuNum = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 400px;
`;
const MenuSub = styled(MenuNum)``;
const MenuDate = styled(MenuNum)``;
const MenuWriter = styled(MenuNum)``;
const MenuIsChecked = styled(MenuNum)``;

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
`;
