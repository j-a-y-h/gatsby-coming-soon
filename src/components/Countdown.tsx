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

export default function Countdown({launchDate}: Props) {
  const timeLeft = -moment().diff(launchDate)
  return (
    <>
      <Timer
        initialTime={timeLeft}
        direction="backward"
      >
        <div className="col-md" style={counterBoxStyle}>
          <p style={timeLabelStyle}>Days</p>
          <p style={{fontSize: '4rem'}}><strong><Timer.Days /></strong></p>
        </div>
        <div className="col-md" style={counterBoxStyle}>
          <p style={timeLabelStyle}>Hours</p>
          <p style={{fontSize: '4rem'}}><strong><Timer.Hours /></strong></p>
        </div>
        <div className="col-md" style={counterBoxStyle}>
          <p style={timeLabelStyle}>Minutes</p>
          <p style={{fontSize: '4rem'}}><strong><Timer.Minutes /></strong></p>
        </div>
        <div className="col-md" style={counterBoxStyle}>
          <p style={timeLabelStyle}>Seconds</p>
          <p style={{fontSize: '4rem'}}><strong><Timer.Seconds /></strong></p>
        </div>
      </Timer>
    </>
  )
}
