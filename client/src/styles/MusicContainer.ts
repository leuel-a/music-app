import styled from "@emotion/styled";

const MusicContainer = styled.div`
  flex: 3;
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default MusicContainer;