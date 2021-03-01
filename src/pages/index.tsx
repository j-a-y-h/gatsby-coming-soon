import * as React from "react"
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';
import Billboard from "../components/Billboard";
import Timer from "react-compound-timer/build";
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF , faTwitter } from '@fortawesome/free-brands-svg-icons'

const data = {
  name: 'Company',
  phone: '555-555-5555',
  email: 'contact@example.com',
  launchDate: '4/1/2021',
  icons: [['Instagram', faInstagram], ['Facebook', faFacebookF], ['Twitter', faTwitter]],
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu sit amet consectetur'
}

const counterBoxStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  color: 'rgb(55,55,55)',
  paddingTop: '20px'
};

// markup
const IndexPage = () => {
  const timeLeft = -moment().diff(data.launchDate)
  return (
    <>
    <Helmet>
      {/* TODO: make this load initially with Gatsby without JS */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
    </Helmet>
    <main style={{fontFamily: 'Poppins'}}>
      <nav className="">
        <div className="container-fluid">
          
        </div>
      </nav>
      <Billboard image="/img/laptop-1920.jpg" title="">
        <>
          <div className="row d-flex justify-content-evenly">
            <div className="col-5">
              <a className="navbar-brand" href="#">
                <img src="https://beta.sourware.com/img/sourware_o.png" alt="Logo" height="24" className="d-inline-block align-top" />
                <span>&nbsp;{data.name}</span>
              </a>
            </div>
            <div className="col-4 text-end">
            <span>{data.phone}</span> | <span>{data.email}</span>
            </div>
          </div>
          <div className="row d-flex justify-content-evenly" style={{marginTop: '8rem'}}>
            <div className="col-5">
              <h1 
                style={{ color: "white", fontSize: "4rem", textTransform: "capitalize", fontWeight: 700}}
              >We are coming soon!</h1>
            </div>
            <div className="col-4"></div>
          </div>
          <div className="row d-flex justify-content-evenly" >
            <div className="col-5">
            
            </div>
            <div className="col-4">
              
            </div>
          </div>
          <div className="row d-flex justify-content-evenly" style={{marginTop: '2rem'}}>
            <div className="col-5">
              <div className="row text-center">
                <Timer
                  initialTime={timeLeft}
                  direction="backward"
                >
                  <div className="col-md" style={counterBoxStyle}>
                    <p>Days</p>
                    <p style={{fontSize: '4rem'}}><strong><Timer.Days /></strong></p>
                  </div>
                  <div className="col-md" style={counterBoxStyle}>
                    <p>Hours</p>
                    <p style={{fontSize: '4rem'}}><strong><Timer.Hours /></strong></p>
                  </div>
                  <div className="col-md" style={counterBoxStyle}>
                    <p>Minutes</p>
                    <p style={{fontSize: '4rem'}}><strong><Timer.Minutes /></strong></p>
                  </div>
                  <div className="col-md" style={counterBoxStyle}>
                    <p>Seconds</p>
                    <p style={{fontSize: '4rem'}}><strong><Timer.Seconds /></strong></p>
                  </div>
                </Timer>
              </div>
            </div>
            <div className="col-4">
              <p>{data.message}</p>
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Email Address" 
                  aria-label="Recipient's username" 
                  aria-describedby="button-addon2" />
                <button className="btn btn-primary" type="button" id="button-addon2">Notify Me</button>
              </div>  
              <p><small>Connect with us</small></p>
              <hr  style={{width: "40%"}}/>
            <ul className="nav">
                {data.icons.map(([name, icon]) => (
                  <li className="nav-item text-center">
                    <a className="nav-link" href="#">
                    <span className="fa-layers fa-fw fa-3x text-center">
                      <FontAwesomeIcon icon={faCircle}   />
                      <FontAwesomeIcon icon={icon}  inverse color="white" transform="shrink-8" />
                    </span>
                      {/* <p>{name}</p> */}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row d-flex justify-content-evenly"
          style={{
            position: "fixed",
            bottom: 0,
            color: "white",
            right: 0,
            left: 0,
            paddingBottom: "30px",
            paddingTop: "30px",
            background:
              "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6965161064425771) 50%, rgba(0,0,0,0) 100%)",
          }}
          >
            <div className="col-3 text-center">
              <p style={{marginBottom: 0}}>
                <small>Website is being crafted by <a rel="noopener nofollow" href="https://sourware.com">Sourware, LLC</a></small>
              </p>
            </div>
          </div>
        </>
      </Billboard>
    </main>
    </>
  )
}

export default IndexPage
