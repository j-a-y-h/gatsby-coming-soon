import * as React from "react"
import SocialMediaIcons, { Props as SocialProps } from "../components/SocialMediaIcons";

type Props = {
  companyName: string;
}
const fullYear = new Date().getFullYear();
export default function Footer({icons, companyName}: Props & SocialProps) {
  return (
    <>
      <div 
      className="pt-sm-3 pb-sm-3"
      style={{
        position: "fixed",
        bottom: 0,
        color: "white",
        right: 0,
        left: 0,
        paddingBottom: "16px",
        paddingTop: "16px",
        background:
          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6965161064425771) 50%, rgba(0,0,0,0) 100%)",
      }}
      >
        <div className="row d-flex justify-content-evenly text-center">
          <div className="col-md-12 ">
            <SocialMediaIcons icons={icons} />
          </div>
        </div>
        <br className="d-none d-sm-block" />
        <div className="row d-flex justify-content-evenly text-center">
          <div className="col-md-12 text-center">
            <p style={{marginBottom: 0}}>
              <small>© {fullYear} {companyName}&nbsp;/&nbsp;Website is being crafted by <a target="_blank" rel="noopener nofollow" href="https://sourware.com">Sourware</a></small>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
