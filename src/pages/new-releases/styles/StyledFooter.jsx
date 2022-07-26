import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  background-color: black;
  width: 100%;
  height: 150px;
  color: white;

  & a{
    text-decoration: none;
    color: white;
    &:hover{
      color: #1DB954;
    }
  }

  & .footer_tech{
    
  }

`

export default StyledFooter