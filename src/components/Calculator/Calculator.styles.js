import styled from 'styled-components';

const StyledCalculator = styled.div`
  position: absolute;
  top: 8vh;
  left: 3vh;
  width: 41.75vh;
  height: 83vh;
  border: 0.25rem solid black;
  border-radius: 2vh;
`;

const StyledDisplay = styled.div`
  margin: 16vh 3vh 0;
  width: calc(100%- 6vh);
  height: 9vh;
  text-align: right;
  background: #abde5d;
  border-radius: 1vh;
`;

const StyledButtonsContainer = styled.div`
  margin: 32.5vh 3vh 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 2.5vh;
  width: calc(100%- 6vh);
`;

const StyledButton = styled.button`
  color: #abde5d; 
  background: black;
  border: 0;
  border-radius: 0.6vh;

  &:hover {
    background: red;
  }
`;

export { StyledCalculator, StyledButtonsContainer, StyledButton, StyledDisplay }; 
