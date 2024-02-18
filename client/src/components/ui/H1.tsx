/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { COLORS } from '../../styles/colors';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export default function H1({ children, ...rest }: Props) {
  return (
    <h1
      {...rest}
      css={css`
        font-size: 2.5em;
        font-weight: bold;
        color: ${COLORS.white};
      `}
    >
      {children}
    </h1>
  );
}
