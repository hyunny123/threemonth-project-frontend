import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const AdminProductListBox = ({ props }) => {
  const navigate = useNavigate();
  const adminProductDesHTML = (value) => {
    return {
      __html: String(value).replace(/\n/g, "<br>\n"),
    };
  };
  const productDelete = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      axios.delete("", { headers: {} }).then((res) => console.log(res));
    }
  };
  return (
    <Test>
      {props.map((x, idx) => (
        <AdminProductContentWrap key={idx}>
          <AdminProductContent>{x.id}</AdminProductContent>
          <AdminProductContent>상품명: {x.product_name}</AdminProductContent>
          <AdminProductContent props={x.is_active}>
            {x.is_active ? "판매중" : "판매중이 아님"}
          </AdminProductContent>
          <AdminProductContent
            dangerouslySetInnerHTML={adminProductDesHTML(x.description)}
          />
          <AdminProducts>
            {x.product_images.map((x, idx) => (
              <AdminProduct key={idx} src={x.img_src} alt="asdf" />
            ))}
          </AdminProducts>
          <AdminProductEditDiv>
            <i
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(`/admin/productEdit/${x.id}`, { state: { data: x } });
              }}
              className="fa-regular fa-pen-to-square"
            />
            <i
              onClick={() => {
                productDelete(x.id);
              }}
              style={{ cursor: "pointer" }}
              className="fa-solid fa-trash-can"
            />
          </AdminProductEditDiv>
        </AdminProductContentWrap>
      ))}
    </Test>
  );
};

export default AdminProductListBox;

const Test = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(20px, auto);
  grid-gap: 20px;
  box-sizing: border-box;
  padding: 20px;
`;

const AdminProductContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 10px;
`;
const AdminProductContent = styled.p`
  margin: 10px 0;
  &:nth-child(3) {
    color: ${({ props }) => (props ? "blue" : "red")};
  }
`;
const AdminProducts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;
const AdminProduct = styled.img`
  width: 150px;
  margin: 0 5px;
  border: 1px solid ${({ theme }) => theme.fontColor};
`;
const AdminProductEditDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50px;
`;
