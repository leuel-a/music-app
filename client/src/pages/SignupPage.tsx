/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

import GlobalStyles from '../styles/GlobalStyles';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { COLORS } from '../styles/colors';
import FormSubmitButton from '../components/FormSubmitButton';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux';
import {
  registerRequest,
} from '../redux/authentication/authSlice';
import { useNavigate } from 'react-router-dom';
import ErrorMessageSpan from '../styles/ErrorMessageSpan';

const FormInput = styled.input`
  border: 0;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  margin-top: 10px;
  padding: 15px 10px;
  border-radius: 10px;
  background-color: ${COLORS.lightGray};

  &:active,
  &:focus {
    outline: none;
  }
`;

const SignupPage: React.FC = () => {
  // States for the inputs
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [passwordError, setPasswordError] = useState<string>('');

  const {
    registerLoading,
    registerFailure,
    registerErrorMessage,
    registerUserSuccess,
  } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters long');
      return;
    }

    dispatch(
      registerRequest({
        name,
        email,
        password,
        confirmPassword,
      }),
    );
  };

  useEffect(() => {
    if (registerUserSuccess === true) {
      navigate('/login');
    }
  }, [registerUserSuccess, navigate]);

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <h3
        css={css`
          color: white;
          text-align: center;
          margin-top: 80px;
          margin-bottom: 30px;
          font-size: 3rem;
          font-weight: bold;
        `}
      >
        Glad you have decided to join us.
      </h3>
      <h4
        css={css`
          text-align: center;
          color: white;
        `}
      >
        Please fill the form below to register.
      </h4>
      <form
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 500px;
          margin: 0 auto;
        `}
        onSubmit={handleSubmit}
      >
        <FormInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name"
        />
        <FormInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <FormInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        {passwordError && <ErrorMessageSpan margintop='5px' size='15px'>{passwordError}</ErrorMessageSpan>}
        <FormInput
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirm Password"
        />
        <FormSubmitButton loading={registerLoading}>Submit</FormSubmitButton>
        {registerFailure && (
          <ErrorMessageSpan>{registerErrorMessage}</ErrorMessageSpan>
        )}
      </form>
    </>
  );
};

export default SignupPage;
