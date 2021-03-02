import * as React from "react"
import Billboard from "../components/Billboard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Countdown from "../components/Countdown";
import { AnimatedText } from "../components/AnimatedText";
import data from "../about.json"
import Subscribe from "../components/Subscribe";
import Head from "../components/Head";

// markup
const IndexPage = () => {
  return (
    <>
    <Head launchDate={data.launchDate} domain={data.domain} url={data.website} />
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
              <Subscribe launchDate={data.launchDate} />
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
