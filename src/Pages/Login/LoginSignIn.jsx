import React from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { Mail, Lock } from "tabler-icons-react";

const LoginSignIn = () => {
  const navigate = useNavigate();
  return (
    <LoginCardContainer>
      <LoginCard>
        <LoginCardHeader>
          <LoginCardHeaderTitle>로그인</LoginCardHeaderTitle>
          <LoginCardHeaderSubTitle>
            다음 진행을 위해서는 로그인이 필요합니다.
          </LoginCardHeaderSubTitle>
        </LoginCardHeader>
        <LoginCardForm>
          <FormItem>
            <FormItemIcon>
              <Mail size={20} strokeWidth={2} color="black" />
            </FormItemIcon>
            <MailFormInput
              type="text"
              placeholder="이메일을 입력하세요"
              required
              autoFocus
            />
          </FormItem>
          <FormItem>
            <FormItemIcon>
              <Lock size={20} strokeWidth={2} color="black" />
            </FormItemIcon>
            <LockFormInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              required
            />
          </FormItem>
          <FormItemOther>
            <FormCheckBox>
              <RememberCheckBox type="checkbox" id="rememberCheckbox" />
              <RememberCheckBoxLabel for="rememberCheckbox">
                아이디 저장
              </RememberCheckBoxLabel>
            </FormCheckBox>
            <FormFindPassword
              onClick={() => {
                navigate("signuppage");
              }}
            >
              비밀번호 찾기
            </FormFindPassword>
          </FormItemOther>
          <FormSubmitBtn>로그인</FormSubmitBtn>
        </LoginCardForm>
        <LoginCardSignUp>
          <LoginCardSignUpSub>아직 가입하지시 않으셨나요?</LoginCardSignUpSub>
          <LoginCardSignUpTag
            onClick={() => {
              navigate("/signuppage");
            }}
          >
            회원가입
          </LoginCardSignUpTag>
        </LoginCardSignUp>
      </LoginCard>
    </LoginCardContainer>
  );
};

export default LoginSignIn;

const LoginCardContainer = styled.div`
  background: #f1e6d1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginCard = styled.div`
  width: 450px;
  background: rgba(255, 255, 255, 0.5);
  padding: 4rem;
  border-radius: 10px;
  position: relative;
`;

const LoginCardHeader = styled.div`
  margin-bottom: 2rem;
`;

const LoginCardHeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const LoginCardHeaderSubTitle = styled.div`
  font-size: 0.8rem;
  opacity: 0.8;
`;

const LoginCardForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormItem = styled.div`
  position: relative;
`;

const FormItemIcon = styled.span`
  position: absolute;
  top: 0.82rem;
  left: 1.4rem;
  font-size: 1.3rem;
  opacity: 0.4;
`;

const MailFormInput = styled.input`
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.5);
  padding: 1rem 1.5rem;
  padding-left: calc(1rem * 3.5);
  border-radius: 100px;
  width: 100%;
  transition: background 0.5s;
`;

const LockFormInput = styled.input`
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.5);
  padding: 1rem 1.5rem;
  padding-left: calc(1rem * 3.5);
  border-radius: 100px;
  width: 100%;
  transition: background 0.5s;
`;

const FormItemOther = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormCheckBox = styled.div`
  display: flex;
  align-items: center;
`;

const RememberCheckBox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #000;
`;

const RememberCheckBoxLabel = styled.label``;

const FormFindPassword = styled.div``;

const FormSubmitBtn = styled.button`
  background: ${({ theme }) => theme.fontColor};
  color: #fff;
  padding: 1rem;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: background 0.5s;
`;

const LoginCardSignUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

const LoginCardSignUpTag = styled.div`
  cursor: pointer;
`;

const LoginCardSignUpSub = styled.div``;
