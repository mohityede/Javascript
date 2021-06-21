import React from 'react';
import { NavLink } from 'react-router-dom';
// stateless functional components
const Navbar = ()=>{
    return (
        // <div>
        //     <nav className="navbar navbar-light bg-light">
        //         <div className="container-fluid">
        //             <a className="navbar-brand">Navbar</a>
        //             {/* <span className="badge bg-secondary badge-pill">{props.totalCounters} <i>greater than zero</i></span> */}

        //         </div>
        //     </nav>
        // </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light m-2">
        <NavLink className="navbar-brand" to="/">APP</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/movies">Movies <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/costomers">Costomers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;