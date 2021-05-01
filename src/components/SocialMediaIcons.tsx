import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF , faTwitter } from '@fortawesome/free-brands-svg-icons'
import about from "../about.json";

const iconMap = {
  "Instagram": faInstagram,
  "Facebook": faFacebookF,
  "Twitter": faTwitter,
}

const urlMap = {
  "Instagram": "https://www.instagram.com",
  "Facebook": "https://www.facebook.com",
  "Twitter": "https://twitter.com",
}

export type Props = Readonly<{
  icons: string[][];
}>

export default function SocialMediaIcons ({icons}: Props) {
  return (
    <>
      <ul className="nav justify-content-center">
        {icons.map(([name, username]) => (
          <li key={name} className="nav-item text-center">
            <a className="nav-link" rel="noopener nofollow" target="_blank" href={`${urlMap[name]}/${username}`}>
              <span className="fa-layers fa-fw fa-3x text-center">
                <FontAwesomeIcon icon={faCircle} color={about.primaryColor} />
                <FontAwesomeIcon icon={iconMap[name]}  inverse color="white" transform="shrink-8" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}