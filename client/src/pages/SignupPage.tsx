/** @jsxImportSource @emotion/react */
import React from 'react';
import Navbar from '../components/Navbar';

import { SubmitHandler, useForm } from 'react-hook-form';
import GlobalStyles from '../styles/GlobalStyles';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { COLORS } from '../styles/colors';
import FormSubmitButton from '../components/FormSubmitButton';

const FormInput = styled.input`
    border: 0;
    width: 100%;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    margin-top: 10px;
    padding: 15px 10px;
    border-radius: 10px;
    background-color: ${COLORS.lightGray};

    &:active, &:focus {
        outline: none;
    }
`;

const Form = styled.form`
`;

type FormFields = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};


const SignupPage: React.FC = () => {
  const { register, handleSubmit } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <h3 css={css`
          color: white;
          text-align: center;
          margin-top: 80px;
          margin-bottom: 30px;
          font-size: 3.0rem;
          font-weight: bold;

      `}>Glad you have decided to join us.</h3>
      <h4
        css={css`
            text-align: center;
            color: white;
        `}
      >Please fill the form below to register.</h4>
      <form css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 500px;
          margin: 0 auto;
      `} onSubmit={handleSubmit(onSubmit)} >
        <FormInput {...register('name')} type="text" placeholder="Full Name" />
        <FormInput {...register('email')} type="email" placeholder="Email" />
        <FormInput {...register('password')} type="password" placeholder="Password" />
        <FormInput {...register('confirmPassword')} type="password" placeholder="Confirm Password" />
        {/* <FormSubmitButton>
          Signup
        </FormSubmitButton> */}
      </form>
    </>
  );
};

export default SignupPage;