import React from 'react'
import {Credentials} from './Credentials'

function App() {
  const [token, setToken] = React.useState("")
  const [spotifyData, setData] = React.useState({})
  const [countryCode, setCountry] = React.useState("")

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


  async function searchReleases(){
    await fetch('https://api.spotify.com/v1/browse/new-releases?limit=50&country=KR', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }})
    .then(response => response.json())
    .then(res => {
      console.log(res.albums.items);
      setData(res.albums.items)
    })
  }

  function Form(){

    return (
      <Form>
        <label htmlFor='country'>Country</label>
      </Form>)
  }

  return (
    <div>
      <button onClick={searchReleases}>Get Data</button>
      {spotifyData.map((element) => <div>{element.name} by {element.artists[0].name}</div>)}
    </div>
  );
}

export default App;
