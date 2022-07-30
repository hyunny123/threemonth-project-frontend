import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { USER_TOKEN } from "../../../config";
import CafeFormDetail from "./CafeFormDetail/CafeFormDetail";
import CakeFormDetail from "./CakeFormDetail/CakeFormDetail";
import PackageFormDetail from "./PackageFormDetail/PackageFormDetail";

const FormDetail = () => {
  const [detailFormData, setDetailFormData] = useState([]);
  console.log(detailFormData);

  const params = useParams();

  // useEffect(() => {
  //   fetch(
  //     `http://15.164.163.31:8001/orders/106`,
  //     { method: "post" },
  //     { headers: { Authorization: `Bearer ${USER_TOKEN}` } }
  //   ).then((res) => {
  //     if (res.status === 200) {
  //       fetch(`http://15.164.163.31:8001/orders/106`)
  //         .then((res) => res.json())
  //         .then((data) => setDetailFormData(data));
  //     }
  //   });
  // }, [params.formId]);

  useEffect(() => {
    fetch(`http://15.164.163.31:8001/orders/106`)
      .then((res) => res.json())
      .then((data) => setDetailFormData(data));
  }, [params.formId]);
  return (
    <FormDetailContainer>
      {detailFormData.type === "package" ? (
        <PackageFormDetail detailFormData={detailFormData} />
      ) : detailFormData.type === "cafe" ? (
        <CafeFormDetail detailFormData={detailFormData} />
      ) : (
        <CakeFormDetail detailFormData={detailFormData} />
      )}
    </FormDetailContainer>
  );
};

export default FormDetail;

const FormDetailContainer = styled.div`
  width: 100%;
`;
