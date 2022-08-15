import React from "react";
import { useLocation } from "react-router";
import NotValidBtn from "../../components/NotValidBtn";
import HomePageTerms from "./HomepageTerms";
import Privacy from "./Privacy";

const Terms = () => {
  const location = useLocation();

  if (location.state === null) {
    return <NotValidBtn />;
  }
  return (
    <div>
      {location.state.info === "privacy" ? <Privacy /> : <HomePageTerms />}
    </div>
  );
};

export default Terms;
