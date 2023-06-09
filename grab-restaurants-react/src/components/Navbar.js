import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
  <Link className="navbar-brand" href="Restaurants">GrabRestarants</Link>
  <button className="navbar-toggler" 
    type="button" 
    data-toggle="collapse" 
    data-target="#navbarNavAltMarkup" 
    aria-controls="navbarNavAltMarkup" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <Link className="nav-item nav-link" to="/Restaurants">Home</Link>
      <Link className="nav-item nav-link" to="/Add">Add</Link>
      <Link className="nav-item nav-link" to="/Search">Search</Link>
      
    </div>
  </div>
</nav>
  )
}

export default NavBar