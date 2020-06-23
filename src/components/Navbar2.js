import React from "react"
import { NavLink, } from 'react-router-dom';
import { withRouter, } from 'react-router-dom';

const Navbar2 = () => (
  <div class="nav">
    <div align="left">
      <div
        class="navHomeBtn2"
      >
        <NavLink
          style={white}
          to="/"
        >
          <img src="https://img.icons8.com/cotton/2x/laptop-coding.png"
            height="60"
            width="60"
          >
          </img>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          Home
        </NavLink>
      </div>
    </div>
    <div
      class="cust"
    >
      <div>
        <NavLink
          style={white}
          to="/About"
        >
          About
    </NavLink>
      </div>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <div>
        <NavLink
          style={white}
          to="/Projects"
        >
          Projects
        </NavLink>
      </div>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <div>
        <NavLink to="/Conection"
          style={red}
        >
          Contact
    </NavLink>
      </div>
    </div>
  </div>
)

const white = {
  color: "white",
}

const red = {
  color: "red"
}

export default withRouter(Navbar2)
