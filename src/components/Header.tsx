import * as React from "react"
import {Button, Menu, MenuItem} from "@material-ui/core"

type Props = Readonly<{
  email: string;
  phone: string;
}>

const style = {
  color: "white",
  textDecoration: "none",
}

export default function Header({email, phone}: Props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="row d-flex justify-content-evenly">
        <div className="col-md-5 col-sm-5">
          <div className="d-flex bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              <img 
                src="https://sourware.com/img/green_white.png" 
                alt="Logo" 
                height="34" 
                className="d-inline-block align-top" 
              />
            </div>
            <div className="ms-auto p-2 bd-highlight d-none d-sm-block d-xs-block d-md-none">
              <button aria-controls="simple-menu" className="btn btn-primary" aria-haspopup="true" onClick={handleClick}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-none d-sm-flex text-end d-flex justify-content-end align-items-center">
          <span>
            <a href={`tel:${phone}`} style={style}>{phone}</a>
          </span> 
          &nbsp;/&nbsp;
          <span><a href={`mailto:${email}`} style={style}>{email}</a></span>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            color="dark"
            MenuListProps={{style: {backgroundColor: "rgb(55,55,55)"}}}
          >
            <MenuItem onClick={handleClose}><a href={`tel:${phone}`} style={style}>{phone}</a></MenuItem>
            <MenuItem onClick={handleClose}><a href={`mailto:${email}`} style={style}>{email}</a></MenuItem>
          </Menu>
        </div>
      </div>
    </>
  )
}
