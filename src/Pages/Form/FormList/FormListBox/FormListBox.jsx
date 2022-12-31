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
  box-sizing: border-box;
  @media (max-width: 580px) {
    width: 100vw;
  }
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
const MenuSub = styled(MenuNum)`
  @media (max-width: 580px) {
  }
`;
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

const ListBoxContents = styled.div`
  border-style: none;
  display: grid;
  grid-template-columns: 0.5fr 3fr 1fr 1fr 1fr;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid ${(props) => props.theme.bgColor};
  font-size: 1em;
  cursor: pointer;
  box-sizing: border-box;
  padding: 10px 10px;
  @media (max-width: 450px) {
    grid-template-columns: 0.5fr 2fr 1fr;
    grid-template-rows: 1fr 0.4fr;
    padding: 5px;
    align-items: center;
    font-size: 2em;
  }
`;
const ListBoxContent = styled.div`
  display: flex;
  justify-content: center;

  &:nth-child(2) {
    justify-content: flex-start;
    align-items: center;
    text-align: start;
    cursor: pointer;
  }
  &:nth-child(3) {
    place-items: center;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
  }
  &:nth-child(4) {
    align-items: center;
  }
  @media (max-width: 768px) {
    font-size: 0.7em;
  }
  @media (max-width: 580px) {
    font-size: 10px;
    &:nth-child(3) {
      justify-content: flex-end;
    }
  }
`;

const ListFormStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ status }) =>
    status === "not_confirmed"
      ? "blue"
      : status === "confirmed"
      ? "green"
      : status === "completed"
      ? "gray"
      : "green"};
  text-align: start;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
  @media (max-width: 450px) {
    font-size: 10px;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 5px;
  }
`;
