import * as React from "react"

type Props = Readonly<{
  email: string;
  phone: string;
}>

const style = {
  color: "white",
  textDecoration: "none",
}

export default function Header({email, phone}: Props) {
  return (
    <>
      <div className="row d-flex justify-content-evenly">
        <div className="col-5 col-sm-5">
          <img 
            src="https://sourware.com/img/green_white.png" 
            alt="Logo" 
            height="24" 
            className="d-inline-block align-top" 
          />
        </div>
        <div className="col-4 col-sm-7 text-end">
          <span>
            <a href={`tel:${phone}`} style={style}>{phone}</a>
          </span> 
          &nbsp;/&nbsp;
          <span><a href={`mailto:${email}`} style={style}>{email}</a></span>
        </div>
      </div>
    </>
  )
}
