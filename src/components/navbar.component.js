import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-light bg-light navbar-expand-lg">
                <Link to="/" className="navbar-brand">Pokesets</Link>
                <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                <Link to="/" className="nav-link">List of Pokesets</Link>
                </li>
                <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Pokeset</Link>
                </li>
                <li className="navbar-item">
                <Link to="/login" className="nav-link">Create User</Link>
                </li>
                </ul>
                </div>
            </nav>
        );
    }
}