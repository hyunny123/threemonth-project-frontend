import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { LOGIN_URI } from "./AuthData";

const LoginPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (localStorage.getItem("prevpath")) {
      if (sessionStorage.getItem("token")) {
        window.location = `${localStorage.getItem("prevpath")}`;
      }
    }
  }, [pathname, navigate]);

  return (
    <div>
      <div>ssdf</div>
      <a href={LOGIN_URI}>asdfasdfasdf</a>
    </div>
  );
};

export default LoginPage;
