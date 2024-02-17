import styled from '@emotion/styled';
import { COLORS } from './colors';

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-weight: bold;
  row-gap: 8px;
  label {
    color: white;
  }
  input:active,
  input:focus {
    outline: none;
  }

  input {
    padding: 5px;
    font-size: 15px;
    border: none;
    border-radius: 5px;
    color: white;
    height: 25px;
    background-color: ${COLORS.lightGray};
`;

export default FormGroup;
