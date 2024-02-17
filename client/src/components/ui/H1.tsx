import React from 'react';
import styled from '@emotion/styled';
import { COLORS } from '../../styles/colors';

const StyledH1 = styled.h1`
    font-size: 2.5em;
    font-weight: bold;
    color: ${COLORS.white};
`;

interface Props {
  children: React.ReactNode;
}

export default function H1({ children }: Props) {
  return (
    <StyledH1>{children}</StyledH1>
  );
}