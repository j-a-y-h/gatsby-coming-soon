import * as React from "react"

type Props = Readonly<{
  email: string;
  phone: string;
}>

export default function Header({email, phone}: Props) {
  return (
    <>
      <div className="row d-flex justify-content-evenly">
        <div className="col-5">
          <a className="navbar-brand" href="#">
            <img src="https://sourware.com/img/green_white.png" alt="Logo" height="24" className="d-inline-block align-top" />
          </a>
        </div>
        <div className="col-4 text-end">
        <span>{phone}</span> | <span>{email}</span>
        </div>
      </div>
    </>
  )
}
