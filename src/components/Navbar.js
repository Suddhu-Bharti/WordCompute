import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom'

// function changeBodyBackground(bodyColor){
//   document.body.style.backgroundColor = bodyColor;
// }

export default function Navbar(props) {

  
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-a active" aria-current="page" href="https://wwww.google.com/">Home</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-a" href="/about">{props.aboutText}</a>
          </li> */}
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch text-${props.mode === 'light'?"dark":"light"}`}>
            <input className="dark-mode-check form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="checkedInput"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" id="inp-check">Enable DarkMode</label>
        </div>
      </div>
    </div>

    {/* <div className="container">
            <button className="btn btn-info btn-sm" onClick={changeBodyBackground("blue")}>Bluish</button>
            <button className="btn btn-info btn-sm" onClick={changeBodyBackground("pink")} >Pinkish</button>
            <button className="btn btn-info btn-sm" onClick={changeBodyBackground("yellow")} >Yellowish</button>
    </div> */}
  </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'set title',
    aboutText: 'set about here'
}