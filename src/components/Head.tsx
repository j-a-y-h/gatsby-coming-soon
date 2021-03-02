import * as React from "react"
import Helmet from 'react-helmet'
import data from "../about.json"
import moment from "moment";

type Props = Readonly<{
  launchDate: string;
}>

export default function Head({launchDate}: Props) {
  const formattedDate = moment(launchDate).format('dddd, MMMM Do, YYYY');
  return (
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
  )
}
