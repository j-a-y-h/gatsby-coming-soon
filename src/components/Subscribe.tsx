import * as React from "react"
import {Snackbar, TextField} from "@material-ui/core"
import MuiAlert, { AlertProps, Color } from '@material-ui/lab/Alert';
import data from "../about.json"
import moment from "moment";
import {useForm, useSettersAsEventHandler} from "react-uniformed"

type Props = Readonly<{
  launchDate: string;
}>

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const defaultSnackbarState = {severity: "info", message: ""};

function reducer(_, action: "error" | "success" |  "server-error") {
  switch (action) {
    case "error":
      return {
        severity: "error",
        message: "Unable to process request. Please check email."
      };
    case "success":
      return {
        severity: "success",
        message: "Your form has been received!"
      };
    case "server-error":
      return {
        severity: "error",
        message: "Sorry, something went wrong."
      };
    default:
      return defaultSnackbarState;
  }
}

export default function Subscribe({launchDate}: Props) {
  const [showSnack, setShowSnack] = React.useState(false); 
  const parsedMessage = data.message.replace("<date>", moment(launchDate).format('dddd, MMMM Do'));
  const [snackbarState, dispatch] = React.useReducer(reducer, defaultSnackbarState);
  const {hasErrors, isDirty, isSubmitting, values, validateByName, touchField, submit, setValue} = useForm({
    async onSubmit(values, form) {
      const res = await fetch(data.subscribeUrl, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      });
      let state: "error" | "success" |  "server-error" = "success";
      if (!res.ok) {
        if (res.status >= 400 && res.status < 500) {
          state = "error";
        } else {
          state = "server-error";
        }
        form.setError("email", "Error processing form");
      }
      setShowSnack(true);
      dispatch(state);
      const json = await res.json();
      console.log(json);
    },
    constraints: {
      email: { type: 'email' }
    }
  })
  const onChange = useSettersAsEventHandler(validateByName, touchField, setValue);
  return (
    <>
      <Snackbar open={showSnack} autoHideDuration={6000} onClose={() => setShowSnack(false)}>
        <Alert severity={snackbarState.severity as Color}>{snackbarState.message}</Alert>
      </Snackbar>
      <p className="text-center text-sm-start">{parsedMessage}</p>
      <div className="input-group mb-3">
        <TextField
          error={hasErrors}
          label="Enter email address"
          variant="filled"
          type="email"
          name="email"
          onChange={onChange}
          value={values.email}
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
