import React from 'react'
import {Credentials} from './Credentials'
import countriesList from './CountriesList'
import List from './List'
import ListOptions from './ListOptions'
import styled from 'styled-components'
import Footer from './pages/new-releases/components/Footer'

function App() {
  const [token, setToken] = React.useState("")
  const [spotifyData, setData] = React.useState("")
  const [countryCode, setCountry] = React.useState("")
  const [number, setNumber] = React.useState(10)

  const statify = Credentials() 

  React.useEffect(() => {
    console.log("dentro")

    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + statify.ClientId + '&client_secret=' + statify.ClientSecret
    })
    .then(results => results.json())
    .then(data => setToken(data.access_token)
    )
    .catch(error => console.error(error)) 
  }, [statify.ClientId, statify.ClientSecret]);


  async function searchReleases(event){
    event.preventDefault();
    await fetch(`https://api.spotify.com/v1/browse/new-releases?limit=${number}&country=${countriesList[countryCode]}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }})
    .then(response => response.json())
    .then(res => {
      console.log(res.albums.items);
      setData(res.albums.items);
      console.log('lonely roads');
    });
  }

  const StyledForm = styled.form`
    height: 10vh;
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & .formLabel{
      padding: 5px;      
    };
    & .formButton{
      margin: 0px 30vw;
    }
    & .formSelect{
      width: 300px;
    }
  `

  const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #E8EBE4;
    height: 100vh;
    align-items: center;
    padding: 0px;
    margin: 0px;

  `
  function Form(){
    return (
      <StyledForm onSubmit={searchReleases}>
        <div>
          <label className='formLabel' htmlFor='fetch'>Country: </label>
          <select className='formSelect' value={countryCode} onChange={(e) => setCountry(e.target.value)} type='dropdown'>
            <option key={0}> Select country...</option>
            {Object.keys(countriesList).map((item, index) => <option key = {index + 1}>{item}</option>)}
          </select>
        </div>
        <div>
          <label className='formLabel' htmlFor='fetch'>Results: </label>
          <select className='formSelect' value={number} onChange={(e) => setNumber(e.target.value)}  type='dropdown'>
            {ListOptions.map((item) => <option key={item}>{item}</option> )}
          </select>
        </div>
        <button className='formButton' type='submit' >Get Data</button>
      </StyledForm>)
  }

  return (
    <AppContainer>
      <Form/>
      <List list={spotifyData}/>
      <Footer/>
    </AppContainer>
  );
}

export default App;
