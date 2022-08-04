import React from "react";
import { useLocation } from "react-router";
import CakeInputForm from "./CakeInputForm";
import CafeInputForm from "./CafeInputForm";
import PackageInputForm from "./PackageInputForm";
import NotValidBtn from "../../../components/NotValidBtn";

const ReserveForm = () => {
  const location = useLocation();
  if (location.state === null) {
    return <NotValidBtn />;
  }
  return (
    <div>
      {location.state.formType === "cake" ? (
        <CakeInputForm />
      ) : location.state.formType === "cafe" ? (
        <CafeInputForm />
      ) : location.state.formType === "package" ? (
        <PackageInputForm />
      ) : (
        <div />
      )}
    </div>
  );
};

export default ReserveForm;
