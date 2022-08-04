import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import Loading from "../../../components/Loading";
import NotValidBtn from "../../../components/NotValidBtn";
import { USER_TOKEN } from "../../../config";
import CafeFormEdit from "./CafeFormEdit.jsx";
import CakeFormEdit from "./CakeFormEdit.jsx";
import PackageFormEdit from "./PackageFormEdit.jsx";

const FormEdit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formId } = useParams();
  const [editData, setEditData] = useState({ id: 0, type: "cake" });
  useEffect(() => {
    fetch(`http://15.164.163.31:8001/orders/${formId}`, {
      method: "get",
      headers: {
        Authorization: `Bearer ${USER_TOKEN}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === "token_not_valid") {
          alert("권한이 없습니다");
          navigate(-1);
        } else {
          setEditData(res);
        }
      });
  }, [formId, navigate]);

  if (location.state === null) {
    return <NotValidBtn />;
  }

  if (editData.id === 0) {
    return <Loading />;
  }
  return (
    <div>
      {editData.type === "cake" ? (
        <CakeFormEdit editData={editData} />
      ) : editData.type === "cafe" ? (
        <CafeFormEdit editData={editData} />
      ) : (
        <PackageFormEdit editData={editData} />
      )}
    </div>
  );
};

export default FormEdit;
