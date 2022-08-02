import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../../components/Loading";
import CafeFormEdit from "./CafeFormEdit.jsx";
import CakeFormEdit from "./CakeFormEdit.jsx";
import PackageFormEdit from "./PackageFormEdit.jsx";

const FormEdit = () => {
  const { formId } = useParams();
  const [editData, setEditData] = useState({ id: 0, type: "cake" });
  useEffect(() => {
    fetch(`http://15.164.163.31:8001/orders/${formId}`)
      .then((res) => res.json())
      .then((data) => setEditData(data));
  }, [formId]);

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
