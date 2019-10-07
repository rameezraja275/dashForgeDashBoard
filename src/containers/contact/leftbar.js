import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';

class Leftbar extends Component {

    render() {
        return (
            <div className="contact-navleft">
                <nav className="nav flex-column">
                    <a href="#tabContact" className="nav-link active" data-toggle="tab">
                        <span data-toggle="tooltip" title="All Contacts" data-placement="right"><FeatherIcon icon="users"></FeatherIcon></span>
                    </a>
                    <a href="#tabPhoneCall" className="nav-link" data-toggle="tab">
                        <span data-toggle="tooltip" title="Recently Contacted" data-placement="right"><FeatherIcon icon="phone-call"></FeatherIcon></span>
                    </a>
                    <Link to="#tabFavorites" className="nav-link" data-toggle="tab">
                        <span data-toggle="tooltip" title="Favorites" data-placement="right"><FeatherIcon icon="star"></FeatherIcon></span>
                    </Link>
                    <Link to="#tabTags" className="nav-link" data-toggle="tab">
                        <span data-toggle="tooltip" title="Contact Labels" data-placement="right"><FeatherIcon icon="tag"></FeatherIcon></span>
                    </Link>
                    <a href="#tabExport" className="nav-link" data-toggle="tab">
                        <span data-toggle="tooltip" title="Export Contacts" data-placement="right"><FeatherIcon icon="upload"></FeatherIcon></span>
                    </a>
                    <Link to="" className="nav-link">
                        <span data-toggle="tooltip" title="Contact Settings" data-placement="right"><FeatherIcon icon="settings"></FeatherIcon></span>
                    </Link>
                </nav>
            </div>
        )
    }
}

export default Leftbar;