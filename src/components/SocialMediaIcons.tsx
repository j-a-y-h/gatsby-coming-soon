import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF , faTwitter } from '@fortawesome/free-brands-svg-icons'

const map = {
  "Instagram": faInstagram,
  "Facebook": faFacebookF,
  "Twitter": faTwitter,
}

type Props = Readonly<{
  icons: string[];
}>

export default function SocialMediaIcons ({icons}: Props) {
  return (
    <>
      <p><small>Connect with us</small></p>
      <hr style={{width: "40%"}}/>
      <ul className="nav">
        {icons.map(([name]) => (
          <li className="nav-item text-center">
            <a className="nav-link" href="#">
              <span className="fa-layers fa-fw fa-3x text-center">
                <FontAwesomeIcon icon={faCircle}   />
                <FontAwesomeIcon icon={map[name]}  inverse color="white" transform="shrink-8" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}