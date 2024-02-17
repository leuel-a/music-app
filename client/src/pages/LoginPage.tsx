/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppDispatch, RootState } from '../redux';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../redux/authentication/authSlice';

import Navbar from '../components/Navbar';
import GlobalStyles from '../styles/GlobalStyles';
import FormSubmitButton from '../components/FormSubmitButton';
import FormInput from '../styles/FormInput';
import Form from '../styles/Form';
import ErrorMessageSpan from '../styles/ErrorMessageSpan';

const LoginPage: React.FC = () => {
  const { failure, loading, errorMessage, isAuthenticated } = useSelector(
    (state: RootState) => state.auth,
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(loginRequest({ email, password }));

    if (isAuthenticated) {
      return navigate('/');
    }
  };

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <h3
        css={css`
          color: white;
          text-align: center;
          margin-top: 180px;
          margin-bottom: 30px;
          font-size: 3rem;
          font-weight: bold;
        `}
      >
        Welcome Back.
      </h3>
      <h4
        css={css`
          text-align: center;
          color: white;
        `}
      >
        Please fill the form below to login.
      </h4>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.currentTarget.value);
          }}
          type="email"
          placeholder="Email"
        />
        <FormInput
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.currentTarget.value)
          }
          type="password"
          placeholder="Password"
        />
        <FormSubmitButton type="submit" loading={loading}>
          Login
        </FormSubmitButton>
        {failure && <ErrorMessageSpan>{errorMessage}</ErrorMessageSpan>}
      </Form>
    </>
  );
};

export default LoginPage;
