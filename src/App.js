import React from 'react'
import {Credentials} from './Credentials'
import countries2 from './Countries2'
import List from './List'

function App() {
  const [token, setToken] = React.useState("")
  const [spotifyData, setData] = React.useState("")
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


  async function searchReleases(event){
    event.preventDefault();
    await fetch(`https://api.spotify.com/v1/browse/new-releases?limit=10&country=${countries2[countryCode]}`, {
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

  function Form(){
    return (
      <form onSubmit={searchReleases}>
        <label htmlFor='country'>Country: </label>
        <select value={countryCode} onChange={(e) => setCountry(e.target.value)} type='dropdown'>
          <option key={0}> Select country...</option>
          {Object.keys(countries2).map((item, index) => <option key = {index + 1}>{item}</option>)}
        </select>
        <button type='submit' >Get Data</button>
      </form>)
  }

  return (
    <div>
      <Form/>
      <List list={spotifyData}/>
    </div>
  );
}

export default App;
