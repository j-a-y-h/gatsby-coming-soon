import * as React from "react"
import SocialMediaIcons, { Props } from "../components/SocialMediaIcons";

export default function Footer({icons}: Props) {
  return (
    <>
      <div 
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
        <div className="row d-flex justify-content-evenly text-center">
          <div className="col-3">
            <SocialMediaIcons icons={icons} />
          </div>
        </div>
        <br />
        <div className="row d-flex justify-content-evenly text-center">
          <div className="col-3 text-center">
            <p style={{marginBottom: 0}}>
              <small>Website is being crafted by <a target="_blank" rel="noopener nofollow" href="https://sourware.com">Sourware</a></small>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
