import * as React from "react"
import Timer from "react-compound-timer/build";
import moment from "moment";

type Props = Readonly<{
  launchDate: string;
}>
const counterBoxStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.0)",
  color: 'rgb(255,255,255)',
};

const timeLabelStyle = {
  color: "rgba(255,255,255,0.7)"
}
const textStyle = {
  fontSize: "2rem"
};

function CustomStyles() {
  return (<style>{`
      @media (min-width: 576px) {
      .fs-sm-5 {
        font-size: 4rem !important;
      }
    }
`}</style>);
}

export default function Countdown({launchDate}: Props) {
  const timeLeft = -moment().diff(launchDate)
  return (
    <>
      <CustomStyles />
      <Timer
        initialTime={timeLeft}
        direction="backward"
      >
        <div className="col" style={counterBoxStyle}>
          <p style={timeLabelStyle}>Days</p>
          <p className="fs-sm-5" style={textStyle}><strong><Timer.Days /></strong></p>
        </div>
        <div className="col" style={counterBoxStyle}>
          <p style={timeLabelStyle}>Hours</p>
          <p className="fs-sm-5" style={textStyle}><strong><Timer.Hours /></strong></p>
        </div>
        <div className="col" style={counterBoxStyle}>
          <p style={timeLabelStyle}>Minutes</p>
          <p className="fs-sm-5" style={textStyle}><strong><Timer.Minutes /></strong></p>
        </div>
        <div className="col" style={counterBoxStyle}>
          <p style={timeLabelStyle}>Seconds</p>
          <p className="fs-sm-5" style={textStyle}><strong><Timer.Seconds /></strong></p>
        </div>
      </Timer>
    </>
  )
}
