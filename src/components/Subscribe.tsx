import * as React from "react"
import {Snackbar, TextField} from "@material-ui/core"
import MuiAlert from '@material-ui/lab/Alert';
import data from "../about.json"
import moment from "moment";
import {useForm, useSettersAsEventHandler} from "react-uniformed"

type Props = Readonly<{
  launchDate: string;
}>

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Subscribe({launchDate}: Props) {
  const [showSnack, setShowSnack] = React.useState(false); 
  const parsedMessage = data.message.replace("<date>", moment(launchDate).format('dddd, MMMM Do'));
  const {hasErrors, isDirty, isSubmitting, validateByName, touchField, submit, setValue} = useForm({
    async onSubmit(values, form) {
      // TODO: move to config
      const res = await fetch("http://localhost:3000/subscribe-launch-notification/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      });
      const json = await res.json();
      if (!res.ok) {
        console.log(json);
        setShowSnack(true);
        if (res.status >= 400 && res.status < 500) {
          form.setError("email", "Unable to process request. Please check inputs.");
        } else {
          form.setError("email", "Sorry, something went wrong.");
        }
      }
    },
    constraints: {
      email: { type: 'email' }
    }
  })
  const onChange = useSettersAsEventHandler(validateByName, touchField, setValue);
  return (
    <>
      <Snackbar open={showSnack} autoHideDuration={6000} onClose={() => setShowSnack(false)}>
        <Alert severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
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
