import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
// import { USER_TOKEN } from "../../../../config";

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
                <ListBoxContent>신청완료</ListBoxContent>
              ) : list.status === "confirmed" ||
                list.status === "can't_cancel" ? (
                <ListBoxContent>컨펌완료</ListBoxContent>
              ) : (
                <ListBoxContent>완료</ListBoxContent>
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
  grid-template-columns: 0.4fr 2fr 0.5fr 0.5fr 0.5fr;
  width: 100%;
  background-color: white;
  font-family: "GangwonEdu_OTFBoldA";
  border-bottom: 1px solid ${(props) => props.theme.bgColor};
  margin-top: 20px;
  font-size: 1em;
`;
const ListBoxContent = styled.div`
  display: flex;
  justify-content: center;
  &:nth-child(2) {
    justify-content: flex-start;
    text-align: start;
  }
`;
