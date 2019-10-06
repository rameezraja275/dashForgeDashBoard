import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Leftbar extends Component {

    render() {
        return (
            <div className="contact-navleft">
                <nav className="nav flex-column">
                    <Link to="#tabContact" className="nav-link active" data-toggle="tab">
                        <span data-toggle="tooltip" title="All Contacts" data-placement="right"><i data-feather="users"></i></span>
                    </Link>
                    <Link to="#tabPhoneCall" className="nav-link" data-toggle="tab">
                        <span data-toggle="tooltip" title="Recently Contacted" data-placement="right"><i data-feather="phone-call"></i></span>
                    </Link>
                    <Link to="#tabFavorites" className="nav-link" data-toggle="tab">
                        <span data-toggle="tooltip" title="Favorites" data-placement="right"><i data-feather="star"></i></span>
                    </Link>
                    <Link to="#tabTags" className="nav-link" data-toggle="tab">
                        <span data-toggle="tooltip" title="Contact Labels" data-placement="right"><i data-feather="tag"></i></span>
                    </Link>
                    <Link to="#tabExport" className="nav-link" data-toggle="tab">
                        <span data-toggle="tooltip" title="Export Contacts" data-placement="right"><i data-feather="upload"></i></span>
                    </Link>
                    <Link to="" className="nav-link">
                        <span data-toggle="tooltip" title="Contact Settings" data-placement="right"><i data-feather="settings"></i></span>
                    </Link>
                </nav>
            </div>
        )
    }
}

export default Leftbar;