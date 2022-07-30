import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./Pages/Main/Main";
import PackageDetail from "./Pages/ProductDetail/PackageDetail/PackageDetail";
import IndividualDetail from "./Pages/ProductDetail/IndividualDetail/IndividualDetail";
import LoginKakao from "./Pages/Login/LoginKakao";
import FormList from "./Pages/Form/FormList/FormList";
import CafeInputForm from "./Pages/Form/FormInput/CafeInputForm";
import CakeInputForm from "./Pages/Form/FormInput/CakeInputForm";
import PackageInputForm from "./Pages/Form/FormInput/PackageInputForm";
import FormDetail from "./Pages/Form/FormDetail/FormDetail";
import AdminPage from "./Pages/AdminPage/AdminPage";
import Footer from "./components/Footer";
import CafeFormEdit from "./Pages/Form/FormEdit/CafeFormEdit";
import CakeFormEdit from "./Pages/Form/FormEdit/CakeFormEdit";
import PackageFormEdit from "./Pages/Form/FormEdit/PackageFormEdit";

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
        <Route path="/formlist" element={<FormList />} />
        <Route path="/cafeinputform" element={<CafeInputForm />} />
        <Route path="/cakeinputform" element={<CakeInputForm />} />
        <Route path="/packageinputform" element={<PackageInputForm />} />
        <Route path="/formdetail/:formId" element={<FormDetail />} />
        <Route path="/adminpage" element={<AdminPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
