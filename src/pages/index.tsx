import * as React from "react"
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';
import Billboard from "../components/Billboard";
import moment from "moment";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Countdown from "../components/Countdown";

const data = {
  name: 'Company',
  phone: '555-555-5555',
  email: 'contact@example.com',
  launchDate: '4/1/2021',
  icons: ['Instagram', 'Facebook', 'Twitter'],
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu sit amet consectetur'
}

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
      <Billboard image="/img/laptop-1920.jpg" title="">
        <>
          <Header phone={data.phone} email={data.email} />
          <div className="row d-flex justify-content-evenly" style={{marginTop: '8rem'}}>
            <div className="col-5">
              <h1 
                style={{ color: "white", fontSize: "4rem", textTransform: "capitalize", fontWeight: 700}}
              >We are coming soon!</h1>
            </div>
            <div className="col-4"></div>
          </div>
          <div className="row d-flex justify-content-evenly" style={{marginTop: '2rem'}}>
            <div className="col-5">
              <div className="row text-center">
                <Countdown launchDate={data.launchDate} />
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
          <Footer icons={data.icons} />
        </>
      </Billboard>
    </main>
    </>
  )
}

export default IndexPage
