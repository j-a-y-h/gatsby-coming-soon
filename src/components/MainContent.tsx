import * as React from "react"
import Countdown from "../components/Countdown";
import { AnimatedText } from "../components/AnimatedText";
import data from "../about.json"
import Subscribe from "../components/Subscribe";

// markup
export default function MainContent() {
  return (
    <div className="row start-0 end-0 m-0 position-absolute top-50 translate-middle-y">
      <div className="col-12">
        <div className="row d-flex justify-content-evenly">
          <div className="col-xl-5 col-lg-8 col-md-12 col-sm-12 text-lg-start text-center">
            <h1 className="fs-sm-5"
              style={{ color: "white", fontSize: "2.5rem", textTransform: "capitalize", fontWeight: 700}}
            ><AnimatedText strings={["We're coming soon!"]} /></h1>
          </div>
          <div className="col-4 col-xl-5"></div>
        </div>
        <div className="row d-flex justify-content-evenly mt-sm-3">
          <div className="col-xl-5 col-lg-6 col-md-11 d-none d-sm-block">
            <div className="row text-center">
              <Countdown launchDate={data.launchDate} />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 col-md-11 col-sm-12">
            <Subscribe launchDate={data.launchDate} />
          </div>  
        </div>
      </div>
    </div>
  )
}
