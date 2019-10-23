import React, { Component } from 'react';
import FeatherIcon from 'feather-icons-react';
 
class SearchBar extends Component {
    render() {
        const styleBackground = { background: "#F7F8FA" }
        return (
            <div className="content-header" style={ styleBackground }>
                <div className="content-search">
                    <FeatherIcon icon="search"></FeatherIcon>
                    <input type="search" className="form-control" placeholder="Search" />
                </div>
                <nav className="nav">
                    <div className="nav-link"><FeatherIcon icon="help-circle"></FeatherIcon></div>
                    <div className="nav-link"><FeatherIcon icon="grid"></FeatherIcon></div>
                    <div className="nav-link right-bar-toggle-btn" onClick={ this.props.toogleRightSideBar }><FeatherIcon icon="align-left"></FeatherIcon></div>
                </nav>
            </div>
        );
    }
}

export default SearchBar