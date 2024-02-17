/** @jsxImportSource @emotion/react */

import { css, Global } from '@emotion/react';
import { COLORS } from './colors';
import React from 'react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* Firefox */
        input[type='number'] {
          -moz-appearance: textfield;
        }
        body {
          margin: 30px auto;
          max-width: 1500px;
          background-color: ${COLORS.primary};
          font-family: 'Inter', sans-serif;
        }
      `}
    />
  );
};

export default GlobalStyles;
