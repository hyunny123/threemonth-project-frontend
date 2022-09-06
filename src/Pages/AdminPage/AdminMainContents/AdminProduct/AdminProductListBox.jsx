import React from "react";
import styled from "styled-components";

const AdminProductListBox = ({ props }) => {
  return (
    <>
      {props.map((x, idx) => (
        <Grid key={idx}>
          <p>{x.id}</p>
          <p>{x.product_name}</p>
          {x.product_images.map((x, idx) => (
            <img
              key={idx}
              style={{ width: "100px" }}
              src={x.img_src}
              alt="asdf"
            />
          ))}
          <p>수정</p>
          <p>삭제</p>
        </Grid>
      ))}
    </>
  );
};

export default AdminProductListBox;

const Grid = styled.div`
  display: grid;
  border: 1px solid red;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  grid-template-columns: 0.4fr 0.5fr 1fr 1fr 0.4fr 0.4fr;
  grid-template-rows: 100px;
`;
