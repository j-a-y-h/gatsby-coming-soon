import * as React from "react"
import {TextField} from "@material-ui/core"
import data from "../about.json"
import moment from "moment";
import {useForm, useSettersAsEventHandler} from "react-uniformed"

type Props = Readonly<{
  launchDate: string;
}>

export default function Subscribe({launchDate}: Props) {
  const parsedMessage = data.message.replace("<date>", moment(launchDate).format('dddd, MMMM Do'));
  const {hasErrors, isDirty, isSubmitting, validateByName, touchField, submit, setValue} = useForm({
    onSubmit(values, api) {
      // TODO: move to config
      fetch("http://localhost:3000/subscribe-launch-notification/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      }).then(() => {
        api.setFeedback
      }, (e) => {
        console.log(e);
        api.setError("email", "Sorry, something went wrong.");
      })
    },
    constraints: {
      email: { type: 'email' }
    }
  })
  const onChange = useSettersAsEventHandler(validateByName, touchField, setValue);
  return (
    <>
      <p>{parsedMessage}</p>
      <div className="input-group mb-3">
        <TextField
          error={hasErrors}
          label="Enter email address"
          variant="filled"
          type="email"
          name="email"
          onChange={onChange}
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
        <button 
          disabled={!isDirty || hasErrors || isSubmitting} 
          className="btn btn-primary" 
          type="button" 
          onClick={submit}
          id="button-addon2"
        >Notify Me</button>
      </div>  
    </>
  )
}
