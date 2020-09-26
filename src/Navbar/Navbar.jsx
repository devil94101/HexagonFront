import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand" ><Link to="/" >Home</Link> </div>
                <div className="navbar-brand"> <div className="nav-link" ><Link to="/free">Free</Link></div></div>
                    <div className="nav-item"><div className="nav-link" ><Link to="/neighbour">Neighbour</Link></div></div>
        </nav>
    </div>
        )
    }
}

export default Navbar
