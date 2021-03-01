import * as React from "react"
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';
import Billboard from "../components/Billboard";

const data = {
  name: 'Company',
  phone: '555-555-5555',
  email: 'contact@example.com',
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu sit amet consectetur'
}

// markup
const IndexPage = () => {
  return (
    <>
    <Helmet>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins" />
    </Helmet>
    <main>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://beta.sourware.com/img/sourware_o.png" alt="Logo" height="24" className="d-inline-block align-top" />
            <span>&nbsp;{data.name}</span>
          </a>
          <div className="navbar-text">
            <span>{data.phone}</span> | <span>{data.email}</span>
          </div>
        </div>
      </nav>
      <Billboard image="/img/laptop-1920.jpg" title="We are coming soon!">
        <>
          <div className="row">
            <div className="col-6">
              <div className="row text-center">
                <div className="col-md">
                  <p>Days</p>
                  <p style={{fontSize: '4rem'}}><strong>63</strong></p>
                </div>
                <div className="col-md">
                  <p>Hours</p>
                  <p>63</p>
                </div>
                <div className="col-md">
                  <p>Minutes</p>
                  <p>63</p>
                </div>
                <div className="col-md">
                  <p>Seconds</p>
                  <p>63</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <p>{data.message}</p>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
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
