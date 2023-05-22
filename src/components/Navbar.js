import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  
  return (
    
    <nav className={`navbar navbar-expand-sm navbar-${props.mode} bg-${props.mode}`}>
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
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
        </ul>
        
        <div className={`form-check form-switch text-${props.mode === 'light'?"dark":"light"}`}>
          <ul className='navbar-nav'>

            <li className="nav-item dropdown">

            <input className="dark-mode-check form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="checkedInput" checked={props.mode === 'dark'}/>

            <label className="form-check-label dropdown-toggle" roll="button" htmlFor="flexSwitchCheckDefault" data-bs-toggle="dropdown" aria-expanded="false" id="inp-check">Dark mode</label>

            <ul class={`dropdown-menu bg-${props.mode === 'light'?"info":"secondary"}`}>
            <li><button class="dropdown-item" onClick={()=> {props.changeBodyBackground('#374b5a')}} >Bluish</button></li>
            <li><button class="dropdown-item" onClick={()=> {props.changeBodyBackground('rgb(100 65 89)')}} >Pinkish</button></li>
            
            <li><button class="dropdown-item" onClick={()=> {props.changeBodyBackground('rgb(155 150 105)')}} >Yellowish</button></li>
            </ul>
            </li>
          </ul>
          
            
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