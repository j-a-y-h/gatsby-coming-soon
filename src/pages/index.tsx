import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from 'bootstrap';

const data = {
  name: 'Company',
  phone: '555-555-5555',
  email: 'contact@example.com'
}

// markup
const IndexPage = () => {
  return (
    <main className="container-fluid">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://beta.sourware.com/img/sourware_o.png" alt="Logo" height="24" className="d-inline-block align-top" />
            <span>&nbsp;{data.name}</span>
          </a>
          <div className="navbar-text">
            <span>{data.phone}</span> | <span>{data.email}</span>
          </div>
        </div>
      </nav>
    </main>
  )
}

export default IndexPage
