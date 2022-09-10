import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { USER_TOKEN } from "../../../../config";

const AdminNoticeEdit = () => {
  return <NoticeInputContainer>edit</NoticeInputContainer>;
};

export default AdminNoticeEdit;

const NoticeInputContainer = styled.div`
  width: 100%;
`;
