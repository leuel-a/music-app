import styled from '@emotion/styled';

const ButtonGroup = styled.div`
  display: flex;
  justify-content: end;
  column-gap: 10px;

  button {
    padding-left: 20px;
    padding-right: 20px;

    border: none;
    border-radius: 5px;
    padding-top: 6px;
    padding-bottom: 6px;
    font-weight: bold;
    color: black;
    font-family: 'Inter', sans-serif;
    background-color: white;
  }
`;

export default ButtonGroup;
