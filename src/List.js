import styled from "styled-components"

const ListBox = styled.div`
  display: flex;
  width: 70vw;
  max-width: 600px;
  justify-content: center;
  align-items: center;
  background-color: #D2D5DD
  margin: 5px;
  padding: 2px;
  & .albumImage{
    border: 1px solid black;
    text-decoration:none;
    height: 120px;
    width: 120px;
    & .image{
      height: 120px;
      width: 120px;
    }
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
      padding: 5px;
      align-text: center;

    }
    & .artistName{
      font-size: 14px;
      padding: 5px;
      text-decoration:none;
      color: black;
    }

  }
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #E8EBE4;
  padding: 0px auto;
  width: 100%;
`

const SelectText = styled.div`
  padding: 0px 10px;
  font-size: 20px;
  background-color: #E8EBE4;
`

const List = (props) => {
  if (props.list){
    return (
      <ListContainer>
      {props.list.map((item, index)=>{
        return (
          <ListBox key={index}>
            <a className='albumImage' target="_blank" rel="noopener noreferrer" href={item.images[0].url}>
              <img className='image' src={item.images[1].url} alt=''/>
            </a>
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
        <h2>Instructions</h2>

        Select a country to view the latest releases (both LPs and EPs) relatable to the country,
         and select how many results to show.

      </SelectText>
    )
  }
  }

export default List