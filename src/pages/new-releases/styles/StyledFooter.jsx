import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  background-color: black;
  width: 100%;
  height: 100px;
  color: white;

  & a{
    text-decoration: none;
    color: white;
    &:hover{
      color: #1DB954;
    }
  }

  & .footer_tech{
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
      padding: 3px 0px;
    }
  }
  & .footer_contact{
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      padding: 5px 0px;
    }

    a{
      padding: 2px 0px;
    }
    & .footer_contact_text{
      display:flex; 
      justify-content: center;
      align-items: center;  

    }
    h3{
      margin: 0px;
      padding-left: 10px;
      &:hover{
        color:#1DB954;
      }
    }
  }


`

export default StyledFooter