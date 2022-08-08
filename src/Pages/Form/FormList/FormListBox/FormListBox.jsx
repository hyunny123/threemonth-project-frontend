import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const FormListBox = ({ sortedList }) => {
  const navigate = useNavigate();

  const goFormDetail = (id) => {
    navigate(`/formdetail/${id}`, { state: { checkValid: true } });
  };
  return (
    <FormListBoxWrapper>
      <ListBox>
        <ListBoxMenu>
          <MenuNum>글 번호</MenuNum>
          <MenuSub>제목</MenuSub>
          <MenuDate>작성일</MenuDate>
          <MenuWriter>작성자</MenuWriter>
          <MenuIsChecked>컨펌여부</MenuIsChecked>
        </ListBoxMenu>
        <List>
          {sortedList.map((list, idx) => (
            <ListBoxContents key={idx}>
              <ListBoxContent>{list.id}</ListBoxContent>
              <ListBoxContent
                onClick={() => {
                  goFormDetail(list.id);
                }}
              >
                {list.title}
              </ListBoxContent>
              <ListBoxContent>{list.created_at.slice(0, 10)}</ListBoxContent>
              <ListBoxContent>{list.customer_name}님</ListBoxContent>
              {list.status === "not_confirmed" ? (
                <ListFormStatus status={list.status}>신청완료</ListFormStatus>
              ) : list.status === "confirmed" ||
                list.status === "can't_cancel" ? (
                <ListFormStatus status={list.status}>컨펌완료</ListFormStatus>
              ) : (
                <ListFormStatus status={list.status}>완료</ListFormStatus>
              )}
            </ListBoxContents>
          ))}
        </List>
      </ListBox>
    </FormListBoxWrapper>
  );
};

export default FormListBox;

const FormListBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
`;

const ListBoxMenu = styled.div`
  display: grid;
  align-items: end;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  grid-template-rows: 50px;
  box-sizing: border-box;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 4px solid ${(props) => props.theme.bgColor};
  @media (max-width: 580px) {
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr 2fr 1fr;
    font-size: 14px;
    /* place-items: flex-start; */
  }
`;
const MenuNum = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 400px;
`;
const MenuSub = styled(MenuNum)`
  @media (max-width: 580px) {
  }
`;
const MenuDate = styled(MenuNum)``;
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

const ListBox = styled.div`
  width: 100%;
  min-height: 400px;
  border-radius: 20px;
`;

const List = styled.ul`
  width: 100%;
  min-height: 100px;
  border-radius: 10px;
`;

const ListBoxContents = styled.button`
  border-style: none;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  width: 100%;
  background-color: white;
  font-family: ${({ theme }) => theme.fontFamily};
  border-bottom: 1px solid ${(props) => props.theme.bgColor};
  margin-top: 20px;
  font-size: 1em;
  cursor: pointer;
  @media (max-width: 450px) {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 1fr;
    place-items: flex-start;
  }
`;
const ListBoxContent = styled.div`
  display: flex;
  justify-content: center;
  &:nth-child(2),
  &:nth-child(3) {
    justify-content: flex-start;
    text-align: start;
    cursor: pointer;
  }
  @media (max-width: 1400px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    font-size: 0.7em;
  }
  @media (max-width: 640px) {
  }
  @media (max-width: 450px) {
    font-size: 12px;
  }
  @media (max-width: 320px) {
  }
`;

const ListFormStatus = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ status }) =>
    status === "not_confirmed"
      ? "blue"
      : status === "confirmed"
      ? "green"
      : status === "completed"
      ? "gray"
      : "green"};
  &:nth-child(2) {
    justify-content: flex-start;
    text-align: start;
  }
  @media (max-width: 1400px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
  @media (max-width: 640px) {
  }
  @media (max-width: 450px) {
    font-size: 12px;
  }
  @media (max-width: 320px);
`;
