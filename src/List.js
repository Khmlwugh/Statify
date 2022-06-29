import styled from "styled-components"

const ListBox = styled.div`
  display: flex;
  justify: center;
  align-items: center;
  & .albumImage{
    border: 1px solid;
  }
`

const List = (props) => {
  if (props.list){
    return (
      <>
      {props.list.map((item, index)=>{
        return (
          <ListBox key={index}>
            <div>
              <img className='albumImage' src={item.images[2].url} alt=''/>
            </div>
            <div>
              <div>{item.name}</div>
              <div>{item.artists[0].name} </div>
            </div>
          </ListBox>
        ) 
      })
    }
      </>
      )
      
  }
  }

export default List