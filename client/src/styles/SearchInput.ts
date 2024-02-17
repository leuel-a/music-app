import styled from '@emotion/styled';
import { COLORS } from './colors';

const SearchInput = styled.input`
    background-color: transparent; /* Removes background */
    border: none; /* Removes border */
    outline: none; /* Removes focus outline */
    font-family: inherit; /* Uses the font of parent elements */
    font-size: 20px;
    color: ${COLORS.black};
`;

export default SearchInput;