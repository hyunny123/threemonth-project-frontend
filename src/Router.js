import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./Pages/Main/Main";
import PackageDetail from "./Pages/ProductDetail/PackageDetail/PackageDetail";
import IndividualDetail from "./Pages/ProductDetail/IndividualDetail/IndividualDetail";
import LoginKakao from "./Pages/Login/LoginKakao";
import FormList from "./Pages/Form/FormList/FormList";
import FormDetail from "./Pages/Form/FormDetail/FormDetail";
import AdminPage from "./Pages/AdminPage/AdminPage";
import Footer from "./components/Footer";
import FormEdit from "./Pages/Form/FormEdit/FormEdit";
import ReserveForm from "./Pages/Form/FormInput/ReserveForm";
import LoginPage from "./Pages/Login/LoginPage";
import Terms from "./components/Terms";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/packagedetail" element={<PackageDetail />} />
        <Route
          path="/individualdetail/:productId"
          element={<IndividualDetail />}
        />
        <Route path="/kakaologin" element={<LoginKakao />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/formlist" element={<FormList />} />
        <Route path="/reserveform" element={<ReserveForm />} />
        <Route path="/formdetail/:formId" element={<FormDetail />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/formdetail/:formId/edit" element={<FormEdit />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
