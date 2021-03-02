import * as React from "react"
import Helmet from 'react-helmet'
import Billboard from "../components/Billboard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Countdown from "../components/Countdown";
import { AnimatedText } from "../components/AnimatedText";
import data from "../about.json"
import moment from "moment";

// markup
const IndexPage = () => {
  const formattedDate = moment(data.launchDate).format('dddd, MMMM Do, YYYY');
  const parsedMessage = data.message.replace("<date>", moment(data.launchDate).format('dddd, MMMM Do'));
  return (
    <>
    <Helmet>
      <title>{data.name} | Coming Soon</title>
      <meta name="description" 
        content={`Coming soon website for ${data.name}. The website is scheduled to launch ${formattedDate}.`} />
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" 
        crossOrigin="anonymous" 
      />
      {/* TODO: make this load initially with Gatsby without JS */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
    </Helmet>
    <main style={{fontFamily: 'Poppins'}}>
      <Billboard image="/img/laptop-1920.jpg" title="">
        <>
          <Header phone={data.phone} email={data.email} />
          <div className="row d-flex justify-content-evenly" style={{marginTop: '8rem'}}>
            <div className="col-xl-5 col-lg-8 col-md-12 col-sm-12 text-lg-start text-center">
              <h1 
                style={{ color: "white", fontSize: "4rem", textTransform: "capitalize", fontWeight: 700}}
              ><AnimatedText strings={["We're coming soon!"]} /></h1>
            </div>
            <div className="col-4 col-xl-5"></div>
          </div>
          <div className="row d-flex justify-content-evenly" style={{marginTop: '2rem'}}>
            <div className="col-xl-5 col-lg-6 col-md-11 d-none d-sm-block">
              <div className="row text-center">
                <Countdown launchDate={data.launchDate} />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-11 col-sm-12">
              <p>{parsedMessage}</p>
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
          <Footer companyName={data.name} icons={data.icons} />
        </>
      </Billboard>
    </main>
    </>
  )
}

export default IndexPage
