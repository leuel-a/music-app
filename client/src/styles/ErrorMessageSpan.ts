import styled from '@emotion/styled';

interface ErrorMessageSpanProps {
  size?: string;
  margintop?: string;
}

const ErrorMessageSpan = styled.span<ErrorMessageSpanProps>`
  color: red;
  margin-top: ${(props) => props.margintop || '10px'};
  font-size: ${(props) => props.size || '18px'};
`;

export default ErrorMessageSpan;
