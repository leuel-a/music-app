import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { COLORS } from '../../styles/colors';

const StyledH2 = styled.h2`
    font-size: 1.8rem;
    font-weight: bold;
    color: ${COLORS.white}
`;

interface H2Props {
  children: ReactNode;
}

export default function H2({ children }: H2Props) {
  return (
    <StyledH2>
      {children}
    </StyledH2>
  );
}