/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { COLORS } from '../styles/colors';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading: boolean;
}

const FormSubmitButton: React.FC<Props> = ({
  children,
  loading,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      css={css`
        flex-grow: 1;
        margin-top: 15px;
        width: 100%;
        padding: 15px 10px;
        font-size: 18px;
        border-radius: 10px;
        border: 0;
      `}
      color={loading ? COLORS.lightGray : ''}
      disabled={loading}
    >
      {children}
    </button>
  );
};

export default FormSubmitButton;
