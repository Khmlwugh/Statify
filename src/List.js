import styled from "styled-components"

const ListBox = styled.div`
  display: flex;
  width: 70vw;
  justify-content: center;
  align-items: center;
  background-color: #D2D5DD
  margin: 5px;
  padding: 2px;
  & .albumImage{
    border: 1px solid;
    height: 100px;
    width: 100px;
  }
  & .textBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    & .releaseName{
      color: black;
      font-size: 20px;
      text-decoration:none;
    }
    & .artistName{
      text-decoration:none;
    }

  }
`

const ListContainer = styled.div`
  align-items: center;
  justify-content: center;
  background-color: #E8EBE4;
  padding: 5px;
`

const SelectText = styled.div`
  padding: 10px;
  margin: 5px;
  font-size: 20px;
  background-color: #E8EBE4
`

const List = (props) => {
  if (props.list){
    return (
      <ListContainer>
      {props.list.map((item, index)=>{
        return (
          <ListBox key={index}>
            <div>
              <img className='albumImage' src={item.images[1].url} alt=''/>
            </div>
            <div className='textBox'>
              <a href={item.external_urls.spotify} target="_blank" rel="noopener noreferrer" className='releaseName'>{item.name}</a>
              <a href={item.artists[0].external_urls.spotify} target="_blank" rel="noopener noreferrer"  className="artistName">{item.artists[0].name} </a>
            </div>
          </ListBox>
        ) 
      })
    }
      </ListContainer>
      )
      
  } else{
    return(
      <SelectText>
        Select a country to view the latest releases relatable to the country,
         and select how many results to show.
      </SelectText>
    )
  }
  }

export default List