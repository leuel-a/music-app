import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { COLORS } from '../../styles/colors';

const StyledButton = styled.button`
    color: ${COLORS.white};
    font-weight: bold;
    font-family: inherit;
    background: transparent;
    font-size: 1.1rem;
    padding: 10px 30px;
    border-radius: 5px;
    border: 2px solid ${COLORS.white};

    &:hover {
        color: ${COLORS.green};
        border: 2px solid ${COLORS.lightGray};
    }
`;

interface ButtonProps {
  children?: ReactNode;
  form?: boolean;
}

export default function Button({ children }: ButtonProps) {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
}