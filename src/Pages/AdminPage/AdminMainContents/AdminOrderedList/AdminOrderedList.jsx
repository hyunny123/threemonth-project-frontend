import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../../../../components/Loading";
import { API } from "../../../../config";
import AdminOrderedListBox from "./AdminOrderedListBox";

const AdminOrderedList = () => {
  const [orderedList, setOrderedList] = useState([
    {
      id: 0,
      type: "",
      title: "",
    },
  ]);
  const { FORM_LIST } = API;
  useEffect(() => {
    axios
      .get(`${FORM_LIST}`)
      .catch((error) => alert(error.response.status))
      .then((res) => setOrderedList(res.data));
  }, [FORM_LIST]);

  if (orderedList[0].id === 0) {
    return <Loading />;
  }

  const cafeList = [...orderedList].filter((x) => x.type === "cafe");
  const cakeList = [...orderedList].filter((x) => x.type === "cake");
  const packageList = [...orderedList].filter((x) => x.type === "package");

  return (
    <AdminOrderedListContain>
      <AdminOrderedListTitle>주문서 목록</AdminOrderedListTitle>
      <AdminOrderedListBoxs>
        <AdminOrderedListCafeTitle>카페 납품</AdminOrderedListCafeTitle>
        <AdminCafeList>
          <AdminOrderedListBox props={cafeList} />
        </AdminCafeList>
        <AdminOrderedListCakeTitle>케이크</AdminOrderedListCakeTitle>
        <AdminCakeList>
          <AdminOrderedListBox props={cakeList} />
        </AdminCakeList>
        <AdminOrderedListPackageTitle>기프트박스</AdminOrderedListPackageTitle>
        <AdminPackageList>
          <AdminOrderedListBox props={packageList} />
        </AdminPackageList>
      </AdminOrderedListBoxs>
    </AdminOrderedListContain>
  );
};

export default AdminOrderedList;

const AdminOrderedListContain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 500px;
  box-sizing: border-box;
  padding: 20px;
`;
const AdminOrderedListTitle = styled.p`
  font-size: 30px;
  margin-bottom: 30px;
`;
const AdminOrderedListBoxs = styled.div`
  box-sizing: border-box;
  padding: 20px;
`;

const AdminOrderedListCafeTitle = styled.p`
  box-sizing: border-box;
  padding: 20px;
  font-size: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.fontColor};
`;
const AdminOrderedListCakeTitle = styled(AdminOrderedListCafeTitle)``;
const AdminOrderedListPackageTitle = styled(AdminOrderedListCafeTitle)``;

const AdminCafeList = styled.div`
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 30px;
`;
const AdminCakeList = styled(AdminCafeList)``;
const AdminPackageList = styled(AdminCafeList)``;
