import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavBar(props) {

  return (
<>

<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} ${props.mode==='light'?'border-bottom border-body':''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="https://neupanesugam.com.np/" target='_blank'>Portfolio</a>
          </li>


        </ul>

          <div className="form-check form-switch mx-2">
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode}/>
            <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckChecked">{props.mode} Mode</label>
          </div>

        </div>
      </div>
    </nav>

</>
  )
}


NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    Link01: PropTypes.string
}

NavBar.defaultProps = {
    Link01: "Give link name bitch"
}
