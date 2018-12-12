import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


const Navbar = () => {
  return (
    <nav className="nav-wrapper light-green darken-4">
      <div className="container">
        <Link to='/' className="brand-logo">TST Plan</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav> 
  )
}
 
export default Navbar