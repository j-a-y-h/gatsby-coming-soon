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

export default function Countdown({launchDate}: Props) {
  const timeLeft = -moment().diff(launchDate)
  return (
    <>
      <Timer
        initialTime={timeLeft}
        direction="backward"
      >
        <div className="col-md" style={counterBoxStyle}>
          <p>Days</p>
          <p style={{fontSize: '4rem'}}><strong><Timer.Days /></strong></p>
        </div>
        <div className="col-md" style={counterBoxStyle}>
          <p>Hours</p>
          <p style={{fontSize: '4rem'}}><strong><Timer.Hours /></strong></p>
        </div>
        <div className="col-md" style={counterBoxStyle}>
          <p>Minutes</p>
          <p style={{fontSize: '4rem'}}><strong><Timer.Minutes /></strong></p>
        </div>
        <div className="col-md" style={counterBoxStyle}>
          <p>Seconds</p>
          <p style={{fontSize: '4rem'}}><strong><Timer.Seconds /></strong></p>
        </div>
      </Timer>
    </>
  )
}
