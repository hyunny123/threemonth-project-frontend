import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router";

const AdminProductEdit = () => {
  const location = useLocation();
  const initData = location.state.data;
  const [productEditText, setProductEditText] = useState(initData);
  const {
    id,
    product_name,
    category,
    description,
    is_active,
    price,
    product_images,
  } = productEditText;

  const [editActive, setEditActive] = useState(String(initData.is_active));
  const [productImg, setProductImg] = useState();
  const [editPrevImg, setEditPrevImg] = useState();
  const productTextHandle = (e) => {
    const { name, value } = e.target;
    setProductEditText({ ...productEditText, [name]: value });
  };
  const activeHandle = (e) => {
    setEditActive(e.target.value);
  };
  const imgHandle = (e) => {
    const { files } = e.target;
  };
  console.log(initData);
  return (
    <AdminProductEditWrap>
      <Testp>{initData.id}</Testp>
      <AdminProductEditText
        onChange={productTextHandle}
        name="product_name"
        value={product_name}
        placeholder="상품 이름 수정"
      />
      <Testp>{initData.category}</Testp>
      <AdminProductEditTextarea
        name="description"
        onChange={productTextHandle}
        value={description}
        placeholder="상품 설명 수정"
      />
      <label>
        <ProductEditActive
          onChange={activeHandle}
          type="checkbox"
          checked={editActive === "true"}
          value="true"
        />
        활성화
      </label>
      <label>
        <ProductEditActive
          onChange={activeHandle}
          type="checkbox"
          checked={editActive === "false"}
          value="false"
        />
        비활성화
      </label>
      <Testp>기존 상품 이미지</Testp>
      <div>
        {product_images.map((x, idx) => (
          <TestImg key={idx} src={x.img_src} alt="x" />
        ))}
      </div>
      <Testp>새로 올릴 상품 이미지</Testp>
      <label>
        <ProductEditActive
          style={{ display: "none" }}
          onChange={activeHandle}
          type="file"
        />
        파일 변경하기
      </label>

      <AdminProductEditText
        onChange={productTextHandle}
        value={price}
        name="price"
        type="number"
        step="100"
        placeholder="상품 가격 수정"
      />
    </AdminProductEditWrap>
  );
};

export default AdminProductEdit;

const AdminProductEditWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
`;
const Testp = styled.p`
  margin: 20px 0;
`;
const TestImg = styled.img`
  width: 100px;
`;
const AdminProductEditText = styled.input``;
const AdminProductEditTextarea = styled.textarea``;
const ProductEditActive = styled.input``;
