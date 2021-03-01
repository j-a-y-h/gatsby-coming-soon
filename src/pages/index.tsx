import * as React from "react"
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';
import Billboard from "../components/Billboard";

const data = {
  name: 'Company',
  phone: '555-555-5555',
  email: 'contact@example.com',
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu sit amet consectetur'
}

// markup
const IndexPage = () => {
  return (
    <>
    <Helmet>
      {/* TODO: make this load initially with Gatsby without JS */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:wght@800" />
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
          <div className="row d-flex justify-content-evenly" style={{marginTop: '10rem'}}>
            <div className="col-5">
              <h1 
                style={{ color: "white", fontSize: "5rem", textTransform: "capitalize", fontWeight: 'bold'}}
              >We are coming soon!</h1>
            </div>
            <div className="col-4"></div>
          </div>
          <div className="row d-flex justify-content-evenly" style={{marginTop: '5rem'}}>
            <div className="col-5">
              <div className="row text-center">
                <div className="col-md">
                  <p>Days</p>
                  <p style={{fontSize: '4rem'}}><strong>63</strong></p>
                </div>
                <div className="col-md">
                  <p>Hours</p>
                  <p style={{fontSize: '4rem'}}>63</p>
                </div>
                <div className="col-md">
                  <p>Minutes</p>
                  <p style={{fontSize: '4rem'}}>63</p>
                </div>
                <div className="col-md">
                  <p>Seconds</p>
                  <p style={{fontSize: '4rem'}}>63</p>
                </div>
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
            </div>
          </div>
        </>
      </Billboard>
    </main>
    </>
  )
}

export default IndexPage
