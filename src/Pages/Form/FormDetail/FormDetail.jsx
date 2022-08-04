import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { USER_TOKEN } from "../../../config";
import styled from "styled-components";
import Loading from "../../../components/Loading";

import PackageFormDetail from "./PackageFormDetail/PackageFormDetail";
import CafeFormDetail from "./CafeFormDetail/CafeFormDetail";
import CakeFormDetail from "./CakeFormDetail/CakeFormDetail";
import NotValidBtn from "../../../components/NotValidBtn";

const FormDetail = () => {
  const [detailFormData, setDetailFormData] = useState({ id: 0 });

  const navigate = useNavigate();

  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    fetch(`http://15.164.163.31:8001/orders/${params.formId}`, {
      method: "get",
      headers: {
        Authorization: `Bearer ${USER_TOKEN}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === "token_not_valid") {
          alert("권한이 없습니다.");
          navigate(-1);
        } else {
          setDetailFormData(res);
        }
      });
  }, [params.formId, navigate]);

  if (location.state === null) {
    return <NotValidBtn />;
  }

  if (detailFormData.id === 0) {
    return <Loading />;
  }
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
