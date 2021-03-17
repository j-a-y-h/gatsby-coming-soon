import * as React from "react"
import Billboard from "../components/Billboard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import data from "../about.json"
import Head from "../components/Head";
import MainContent from "../components/MainContent";

function CustomStyles() {
  return (<style>{`
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
