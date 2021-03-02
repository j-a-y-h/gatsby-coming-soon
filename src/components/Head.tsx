import * as React from "react"
import Helmet from 'react-helmet'
import data from "../about.json"
import moment from "moment";

type Props = Readonly<{
  launchDate: string;
  url: string;
  domain: string;
}>

export default function Head({launchDate, url, domain}: Props) {
  const formattedDate = moment(launchDate).format('dddd, MMMM Do, YYYY');
  const title = `${data.name} | Coming Soon`
  const description = `Coming soon website for ${data.name}. The website is scheduled to launch ${formattedDate}.`
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" 
        crossOrigin="anonymous" 
      />
      {/* TODO: make this load initially with Gatsby without JS */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      {/* Open Graph */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}/img/opengraph-cover.jpg`} />
      {/* Twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={domain} />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}/img/opengraph-cover.jpg`} />
    </Helmet>
  )
}
