import React, { useState } from "react";
import { useRef } from "react";
import styled from "styled-components";

const LoginSignUp = () => {
  const [userName, setUserName] = useState("");
  const [enteredUserName, setEnteredUserName] = useState(false);
  const [nickName, setNickName] = useState("");
  const [enteredNickName, setEnteredNickName] = useState(false);
  const [useEmail, setUseEmail] = useState("");
  const [enteredEmail, setEnteredEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [enteredPassword, setEnteredPassword] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState("");
  const [enteredPasswordCheck, setEnteredPasswordCheck] = useState(false);
  const [phone, setPhone] = useState("");
  const [enteredPhone, setEnteredPhone] = useState(false);
  // const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const enteredUserNameValid = userName.trim() && userName.length < 5 !== "";
  const enteredNickNameValid = nickName.trim() && nickName.length < 10 !== "";
  const enteredEmailValid = useEmail.includes("@") !== "";
  const enteredPasswordValid = password.trim() && password.length < 10 !== "";
  const enteredPasswordCheckValid = enteredPasswordValid;
  const enteredPhoneValid = phone.trim() && phone.length < 12 !== "";

  const userNameInputInValid = !enteredUserNameValid && enteredUserName;
  const nickNameInputInValid = !enteredNickNameValid && enteredNickName;
  const emailInputInValid = !enteredEmailValid && enteredEmail;
  const passwordInputInValid = !enteredPasswordValid && enteredPassword;
  const passwordChecktInputInValid =
    !enteredPasswordCheckValid && enteredPasswordCheck;
  const phoneInputInValid = !enteredPhoneValid && enteredPhone;

  const userNameInputHandler = (e) => {
    setUserName(e.target.value);
  };

  const nickNameInputHandler = (e) => {
    setNickName(e.target.value);
  };

  const emailInputHandler = (e) => {
    setUseEmail(e.target.value);
  };
  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };

  const passwordCheckInputHandler = (e) => {
    setPasswordCheck(e.target.value);
  };

  const phoneInputHandler = (e) => {
    setPhone(e.target.value);
  };

  const signupSubmitHandler = (e) => {
    e.preventDefault();

    setEnteredUserName(true);
    setEnteredNickName(true);
    setEnteredEmail(true);
    setEnteredPassword(true);
    setEnteredPasswordCheck(true);
    setEnteredPhone(true);

    if (
      !enteredUserNameValid &&
      !enteredNickNameValid &&
      !enteredEmailValid &&
      !enteredPasswordValid &&
      !enteredPasswordCheckValid &&
      !enteredPhoneValid
    ) {
      return;
    }

    console.log(userName);
    console.log(nickName);
    console.log(useEmail);

    setUserName("");
    setEnteredUserName(false);
    setNickName("");
    setEnteredNickName(false);
    setUseEmail("");
    setEnteredEmail(false);
    setPassword("");
    setEnteredPassword(false);
    setPasswordCheck("");
    setEnteredPasswordCheck(false);
    setPhone("");
    setEnteredPhone(false);
  };
  return (
    <Container>
      <SingupContainer>
        <SignupWrapper>
          <SignupTitle>회원가입</SignupTitle>
          <SignupSub>다음 빈칸을 채워주세요!</SignupSub>
          <SignupFormCard>
            <SignupFormUserName>
              <FormUserNameLabel>이름</FormUserNameLabel>
              <FormInput
                type="text"
                id="name"
                onChange={userNameInputHandler}
                value={userName}
              />
            </SignupFormUserName>
            <SignupFormNickName>
              <FormNickNameLabel>닉네임</FormNickNameLabel>
              <FormInput
                type="text"
                id="nickname"
                onChange={nickNameInputHandler}
                value={nickName}
              />
            </SignupFormNickName>
            <SignupFormEmail>
              <FormEmailLabel>이메일</FormEmailLabel>
              <FormInput
                type="email"
                id="email"
                required
                onChange={emailInputHandler}
                value={useEmail}
                ref={emailInputRef}
              />
            </SignupFormEmail>
            <SignupFormPW>
              <FormPWLabel>비밀번호</FormPWLabel>
              <FormInput
                type="password"
                required
                onChange={passwordInputHandler}
                value={password}
              />
            </SignupFormPW>
            <SignupFormPW>
              <FormPWCheckLabel>비밀번호 확인</FormPWCheckLabel>
              <FormInput
                type="password"
                required
                onChange={passwordCheckInputHandler}
                value={passwordCheck}
              />
            </SignupFormPW>
            <SignupFormPhone>
              <FormPhoneLabel>폰번호</FormPhoneLabel>
              <FormInput
                type="text"
                required
                onChange={phoneInputHandler}
                value={phone}
              />
            </SignupFormPhone>
            <SignupFormSubmit>
              <FormSubmit onClick={signupSubmitHandler}>가입하기</FormSubmit>
            </SignupFormSubmit>
          </SignupFormCard>
        </SignupWrapper>
      </SingupContainer>
    </Container>
  );
};

export default LoginSignUp;

const Container = styled.div`
  margin: 100px auto;
`;

const SingupContainer = styled.div`
  /* background: #f1e6d1; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignupTitle = styled.h1`
  color: ${({ theme }) => theme.fontColor};
  font-size: 2.5rem;
`;

const SignupSub = styled.p`
  padding: 10px;
`;

const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  min-height: 500px;
  margin: 100px auto;
  background: #f1e6d1;
  border: 1px solid #000;
  padding: 20px 0px;
  /* padding: 50px 20px; */
`;

const SignupFormCard = styled.form``;

const SignupFormUserName = styled.div`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  margin-bottom: 10px;
`;

const SignupFormNickName = styled.div`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  margin-bottom: 10px;
`;

const SignupFormEmail = styled.div`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  margin-bottom: 10px;
`;

const SignupFormPW = styled.div`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  margin-bottom: 10px;
`;

const SignupFormPhone = styled.div`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  margin-bottom: 10px;
`;

const FormUserNameLabel = styled.label``;

const FormNickNameLabel = styled.label``;

const FormEmailLabel = styled.label``;

const FormPWLabel = styled.label``;

const FormPWCheckLabel = styled.label``;

const FormPhoneLabel = styled.label``;

const FormInput = styled.input`
  border: none;
  outline: none;
  padding: 20px 30px;
  border-radius: 100px;
  /* padding-left: calc(1rem * 3.5); */
  background: rgba(255, 255, 255, 0.5);
  margin-left: 20px;
`;

const SignupFormSubmit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const FormSubmit = styled.button`
  border: none;
  outline: none;
  padding: 1rem 1.5rem;
  border-radius: 100px;
  background: ${({ theme }) => theme.fontColor};
  color: ${({ theme }) => theme.bgColor};
`;
