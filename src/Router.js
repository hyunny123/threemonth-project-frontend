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
import HomePageTerms from "./Pages/Terms/HomepageTerms";
import Privacy from "./Pages/Terms/Privacy";
import QnA from "./Pages/QnA/QnA";
import Notice from "./Pages/Notice/Notice";
import QnAList from "./Pages/QnA/QnAList/QnAList";
import QnAEdit from "./Pages/QnA/QnAEdit/QnAEdit";
import QnAInput from "./Pages/QnA/QnAInput/QnAInput";
import NoticeList from "./Pages/Notice/NoticeList/NoticeList";
import NoticeInput from "./Pages/Notice/NoticeInput/NoticeInput";
import NoticeEdit from "./Pages/Notice/NoticeEdit/NoticeEdit";
import MyPage from "./Pages/MyPage/MyPage";
import MyReviewInput from "./Pages/MyPage/MyReviewInput/MyReviewInput";

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
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/formdetail/:formId/edit" element={<FormEdit />} />
        <Route path="/terms" element={<HomePageTerms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/qna/:qnaId" element={<QnA />} />
        <Route path="/qnalist" element={<QnAList />} />
        <Route path="/qnainput" element={<QnAInput />} />
        <Route path="/qna/:qnaId/edit" element={<QnAEdit />} />
        <Route path="/noticelist" element={<NoticeList />} />
        <Route path="/notice/:noticeId" element={<Notice />} />
        <Route path="/noticeinput" element={<NoticeInput />} />
        <Route path="/notice/:noticeId/edit" element={<NoticeEdit />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/myreviewinput" element={<MyReviewInput />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
