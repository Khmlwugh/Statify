import StyledFooter from "../styles/StyledFooter"

function Footer(){
  return(
    <StyledFooter>
      <div className="footer_tech">
        <div className="footer_tech_text">
          Build using:
        </div >
        <div className="footer_tech_text">
          React
        </div>
        <a className="footer_tech_link" href='https://developer.spotify.com/documentation/web-api/' alt=''>The Spotify API</a>
      </div>
      <div className="footer_contact">
        <div className="footer_contact_text">
          Created by <h4>Gabriel Flores</h4> 
        </div >
        <a className='footer_contact_link' href='https://www.linkedin.com/in/dev-gabriel-flores' alt=''>LinkedIn</a> 
      </div>
    </StyledFooter>
  )
}

export default Footer