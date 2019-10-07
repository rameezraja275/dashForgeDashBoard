import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';
 
class SearchBar extends Component {
    render() {
        return (
            <div className="content-header">
                <div className="content-search">
                    <FeatherIcon icon="search"></FeatherIcon>
                    <input type="search" className="form-control" placeholder="Search mail" />
                </div>
                <nav className="nav">
                    <Link to="" className="nav-link"><FeatherIcon icon="help-circle"></FeatherIcon></Link>
                    <Link to="" className="nav-link"><FeatherIcon icon="grid"></FeatherIcon></Link>
                    <Link to="" className="nav-link"><FeatherIcon icon="align-left"></FeatherIcon></Link>
                </nav>
            </div>
        );
    }
}

export default SearchBar