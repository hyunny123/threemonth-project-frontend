import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router";
import { USER_TOKEN, API } from "../../../config";
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
  const { DETAIL_FORM } = API;

  useEffect(() => {
    axios
      .get(`${DETAIL_FORM}${params.formId}`, {
        headers: {
          Authorization: `Bearer ${USER_TOKEN}`,
          "Content-Type": "application/json",
        },
      })
      .catch((error) => {
        const { response } = error;
        if (response.status === 403) {
          alert("권한이 없습니다.");
          navigate(-1);
        } else {
          alert("다시 시도 부탁드립니다.");
          navigate(-1);
        }
      })
      .then((res) => setDetailFormData(res.data));
  }, [DETAIL_FORM, navigate, params.formId]);

  // useEffect(() => {
  //   fetch(`${DETAIL_FORM}${params.formId}`, {
  //     method: "get",
  //     headers: {
  //       Authorization: `Bearer ${USER_TOKEN}`,
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (
  //         res.code === "token_not_valid" ||
  //         res.detail === "You do not have permission to perform this action."
  //       ) {
  //         alert("권한이 없습니다.");
  //         navigate(-1);
  //       } else {
  //         setDetailFormData(res);
  //       }
  //     });
  // }, [params.formId, navigate, DETAIL_FORM]);

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
