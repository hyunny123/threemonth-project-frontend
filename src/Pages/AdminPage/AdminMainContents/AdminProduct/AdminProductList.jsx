import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../../../../components/Loading";
import AdminProductListBox from "./AdminProductListBox";

const AdminProductList = () => {
  const [adminProduct, setAdminProduct] = useState([
    {
      id: 0,
      product_name: "",
      category: "",
    },
  ]);
  useEffect(() => {
    axios
      .get(`http://15.164.163.31:8001/products/`)
      .catch((error) => alert(`${error}`))
      .then((res) => setAdminProduct(res.data));
  }, []);

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
        <AdminAddProduct>상품 추가하기</AdminAddProduct>
      </AdminProductBoxs>
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
const AdminAddProduct = styled.button`
  border-style: none;
  margin-top: 100px;
  margin-left: 10px;
  width: 100px;
  height: 50px;
  border-radius: 5px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.fontColor};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily};
  cursor: pointer;
`;
