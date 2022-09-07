import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { USER_TOKEN } from "../../../../config";

const AdminAddProduct = () => {
  const [addProductContentValue, setAddProductContentValue] = useState("");
  const [addProductImgValue, setAddProductImgValue] = useState({});
  const [productCategory, setProductCategory] = useState("");
  const [addProductImgPrev, setAddProductImgPrev] = useState([]);
  const addProductTextHandle = (e) => {
    const { name, value } = e.target;
    setAddProductContentValue({ ...addProductContentValue, [name]: value });
  };
  const addProductCheckboxHandle = (e) => {
    setProductCategory(e.target.value);
  };
  const addProductImgHandle = (e) => {
    const { files } = e.target;
    setAddProductImgValue({
      ...addProductImgValue,
      img1: files[0],
      img2: files[1],
    });
    productPrevImg(files);
  };
  const productPrevImg = (value) => {
    const fileArr = value;
    let fileUrls = [];
    for (let i = 0; i < fileArr.length; i++) {
      let files = fileArr[i];
      let reader = new FileReader();
      reader.onload = () => {
        fileUrls[i] = reader.result;
        setAddProductImgPrev([...fileUrls]);
      };
      reader.readAsDataURL(files);
    }
  };
  const addProductBtn = (e) => {
    if (window.confirm("상품을 추가하시겠습니까?")) {
      e.preventDefault();
      const formData = new FormData();
      formData.append("img1", addProductImgValue.img1);
      formData.append("img2", addProductImgValue.img2);
      formData.append("title", addProductContentValue.title);
      formData.append("content", addProductContentValue.content);
      formData.append("category", productCategory);
      axios
        .post("", formData, {
          headers: {
            Authorization: `Bearer ${USER_TOKEN}`,
          },
        })
        .catch((error) => console.log(error.response.status))
        .then((res) => console.log(res));
    }
  };
  return (
    <AdminAddProductWrap>
      <AdminAddProductName onChange={addProductTextHandle} />
      <p>카테고리를 선택하세요</p>
      <label>
        <input
          onChange={addProductCheckboxHandle}
          type="checkbox"
          checked={productCategory === "cake"}
          value="cake"
        />
        케이크
      </label>
      <label>
        <input
          onChange={addProductCheckboxHandle}
          type="checkbox"
          checked={productCategory === "bread"}
          value="bread"
        />
        빵
      </label>
      <AdminAddProductPrice onChange={addProductTextHandle} />
      <AdminAddProductInfo onChange={addProductTextHandle} />
      <AdminAddProductImgs onChange={addProductImgHandle} multiple required />
      <AdminAddProductInputImgBtn htmlFor="imageinput">
        파일 선택하기
      </AdminAddProductInputImgBtn>
      <AdminAddProductPrevImgWrap>
        {addProductImgPrev[0] && (
          <AdminAddProductPrevImg src={addProductImgPrev[0]} />
        )}
        {addProductImgPrev[1] && (
          <AdminAddProductPrevImg src={addProductImgPrev[1]} />
        )}
      </AdminAddProductPrevImgWrap>
      <AdminAddProductPostBtn onClick={addProductBtn}>
        추가
      </AdminAddProductPostBtn>
    </AdminAddProductWrap>
  );
};

export default AdminAddProduct;

const AdminAddProductWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
`;
const AdminAddProductName = styled.input.attrs((props) => ({
  type: "text",
  name: "",
  placeholder: "상품 이름을 입력하세요",
}))`
  border-style: none;
  border: 1px solid black;
  width: 400px;
  font-family: ${({ theme }) => theme.fontFamily};
  box-sizing: border-box;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;
const AdminAddProductPrice = styled.input.attrs((props) => ({
  type: "number",
  name: "",
  step: "100",
  placeholder: "상품 가격을 입력하세요",
}))`
  border-style: none;
  border: 1px solid black;
  width: 400px;
  font-family: ${({ theme }) => theme.fontFamily};
  box-sizing: border-box;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;
const AdminAddProductInfo = styled.textarea.attrs((props) => ({
  type: "text",
  name: "",
  placeholder: "상품 설명을 입력하세요",
  rows: "10",
  cols: "10",
}))`
  border-style: none;
  border: 1px solid black;
  resize: none;
  font-family: ${({ theme }) => theme.fontFamily};
  box-sizing: border-box;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;
const AdminAddProductImgs = styled.input.attrs((props) => ({
  type: "file",
  placeholder: "상품 설명을 입력하세요",
  accept: "image/*",
  id: "imageinput",
}))`
  display: none;
`;
const AdminAddProductInputImgBtn = styled.label`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  border-style: none;
  width: 200px;
  height: 40px;
  padding: 10px;
  font-size: 18px;
  border-radius: 10px;
  margin: 10px 0;
  background-color: ${({ theme }) => theme.bgColor};
  border: 2px solid ${({ theme }) => theme.fontColor};
  color: ${({ theme }) => theme.fontColor};
  font-family: ${({ theme }) => theme.fontFamily};
`;
const AdminAddProductPrevImgWrap = styled.div`
  display: flex;
  margin: 10px 0;
`;
const AdminAddProductPrevImg = styled.img`
  width: 150px;
  margin-left: 20px;
  border: 1px solid black;
`;
const AdminAddProductPostBtn = styled.button`
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
