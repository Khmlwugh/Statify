import styled from "@emotion/styled";
import React from 'react'

const Container = styled.div`
  width: fit-content;
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(3, 150px);
`;

const StyledCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px;
`;


function Cell(props){
  return (
    <StyledCell>{props.children}</StyledCell>
  )
};

function Grid(){
  return (
    <Container>
      <Cell>Cell 1</Cell>
      <Cell>Cell 2</Cell>
      <Cell>Cell 3</Cell>
      <Cell>Cell 4</Cell>
      <Cell>Cell 5</Cell>
      <Cell>Cell 6</Cell>
      <Cell>Cell 7</Cell>
      <Cell>Cell 8</Cell>
      <Cell>Cell 9</Cell>
    </Container>
  ) 
};


export default Grid