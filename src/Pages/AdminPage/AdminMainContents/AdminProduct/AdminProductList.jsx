import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../../../../components/Loading";
import { API } from "../../../../config";
import AdminAddProduct from "./AdminAddProduct";
import AdminProductListBox from "./AdminProductListBox";

const AdminProductList = () => {
  const { ITEM_GET } = API;
  const [addProductOpen, setAddProductOpen] = useState(false);
  const [adminProduct, setAdminProduct] = useState([
    {
      id: 0,
      product_name: "",
      category: "",
    },
  ]);
  useEffect(() => {
    axios
      .get(`${ITEM_GET}`)
      .catch((error) => alert(`${error}`))
      .then((res) => setAdminProduct(res.data));
  }, [ITEM_GET]);

  if (adminProduct[0].id === 0) {
    return <Loading />;
  }
  const breadList = [...adminProduct].filter((x) => x.category === "bread");
  const cakeList = [...adminProduct].filter((x) => x.category === "cake");
  return (
    <AdminProductContainer>
      <AdminProductTitle>상품 관리</AdminProductTitle>
      <AdminProductBoxs>
        <AdminProductListBreadTitle>구움과자</AdminProductListBreadTitle>
        <AdminProductListBox props={breadList} />
        <AdminProductListCakeTitle>케이크</AdminProductListCakeTitle>
        <AdminProductListBox props={cakeList} />
      </AdminProductBoxs>
      <AdminAddProductBtn
        onClick={() => {
          setAddProductOpen(!addProductOpen);
        }}
      >
        상품 추가하기
      </AdminAddProductBtn>
      {addProductOpen && <AdminAddProduct />}
    </AdminProductContainer>
  );
};

export default AdminProductList;

const AdminProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
`;
const AdminProductTitle = styled.p`
  font-size: 30px;
  margin-bottom: 30px;
`;
const AdminProductBoxs = styled.div`
  box-sizing: border-box;
  padding: 30px;
`;

const AdminProductListBreadTitle = styled.p`
  box-sizing: border-box;
  padding: 20px;
  font-size: 20px;
  border-bottom: 3px solid ${({ theme }) => theme.fontColor};
`;

const AdminProductListCakeTitle = styled(AdminProductListBreadTitle)``;
const AdminAddProductBtn = styled.button`
  border-style: none;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 10px;
  width: 200px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily};
  cursor: pointer;
`;
