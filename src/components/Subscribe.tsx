import * as React from "react"
import {TextField} from "@material-ui/core"
import data from "../about.json"
import moment from "moment";

type Props = Readonly<{
  launchDate: string;
}>

export default function Subscribe({launchDate}: Props) {
  const parsedMessage = data.message.replace("<date>", moment(launchDate).format('dddd, MMMM Do'));
  return (
    <>
      <p>{parsedMessage}</p>
      <div className="input-group mb-3">
        <TextField
          error
          id="outlined-error"
          label="Enter email address"
          variant="filled"
          type="email"
          style={{
            position: "relative",
            flex: "1 1 auto",
            width: "1%",
            minWidth: 0,
            backgroundColor: "white",
            borderTopLeftRadius: "2px",
            borderBottomLeftRadius: "2px"
          }}
          inputProps={{
            "aria-label": "Enter email address",
            "aria-describedby": "button-addon2"
          }}
        />
        <button className="btn btn-primary" type="button" id="button-addon2">Notify Me</button>
      </div>  
    </>
  )
}
