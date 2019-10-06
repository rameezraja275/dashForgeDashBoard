import React, { Component } from 'react';
import { Link } from 'react-router-dom'
 
class SearchBar extends Component {
    render() {
        return (
            <div className="content-header">
                <div className="content-search">
                    <i data-feather="search"></i>
                    <input type="search" className="form-control" placeholder="Search mail" />
                </div>
                <nav className="nav">
                    <Link to="" className="nav-link"><i data-feather="help-circle"></i></Link>
                    <Link to="" className="nav-link"><i data-feather="grid"></i></Link>
                    <Link to="" className="nav-link"><i data-feather="align-left"></i></Link>
                </nav>
            </div>
        );
    }
}

export default SearchBar