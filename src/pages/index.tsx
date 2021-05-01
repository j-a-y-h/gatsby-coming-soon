import * as React from "react"
import Billboard from "../components/Billboard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import data from "../about.json"
import Head from "../components/Head";
import MainContent from "../components/MainContent";

function LightenDarkenColor(col, amt) {
  
  var usePound = false;

  if (col[0] == "#") {
      col = col.slice(1);
      usePound = true;
  }

  var num = parseInt(col,16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if  (r < 0) r = 0;

  var b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if  (b < 0) b = 0;

  var g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

}
function CustomStyles() {
  return (<style>{`
      .btn-primary {
        background-color: ${data.primaryColor} !important;
        border-color: ${LightenDarkenColor(data.primaryColor, -20)} !important;
      }
      a {
        color: ${data.primaryColor};
        text-decoration: none;
      }
      a:hover {
        color: ${data.primaryColor};
        text-decoration: underline;
      }
      @media (min-width: 576px) {
      .mt-sm-5 {
          margin-top: 8rem!important;
      }
      .fs-sm-5 {
        font-size: 4rem !important;
      }
    }
`}</style>);
}

// markup
const IndexPage = () => {
  return (
    <>
    <Head launchDate={data.launchDate} domain={data.domain} url={data.website} />
    <CustomStyles />
    <main style={{fontFamily: 'Poppins'}}>
      <Billboard image="/img/background.jpg" title="">
        <>
          <Header phone={data.phone} email={data.email} />
          <MainContent />
          <Footer companyName={data.name} icons={data.icons} />
        </>
      </Billboard>
    </main>
    </>
  )
}

export default IndexPage
