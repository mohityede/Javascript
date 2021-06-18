import React, { Component } from 'react';

class Navbar extends Component {

    render() {
        return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <span className="badge bg-secondary badge-pill">{this.props.totalCounters} <i>greater than zero</i></span>

                </div>
            </nav>
        </div>
        );
    }
}

export default Navbar;