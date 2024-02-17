import styled from "@emotion/styled";
import { COLORS } from "./colors";

const FormInput = styled.input`
  border: 0;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  margin-top: 10px;
  padding: 15px 10px;
  border-radius: 10px;
  background-color: ${COLORS.lightGray};

  &:active,
  &:focus {
    outline: none;
  }
`;

export default FormInput;