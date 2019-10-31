import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { contactDetails, setModel } from './actions'
import FeatherIcon from 'feather-icons-react';
import PerfectScrollbar from 'react-perfect-scrollbar'

const ContactCard = (props) => {
    const { FirstName, MobilePhone, onlineStatus } = props.data
    let avatar = "";

    onlineStatus ? avatar = "avatar avatar-sm avatar-online" : avatar = "avatar avatar-sm avatar-offline"
    props.itemNumber == 0 && props.contactDetails(props.data) 
    return (
        <div className="media" onClick={ () => props.contactDetails(props.data) }>
            <div className={avatar}><span className="avatar-initial rounded-circle bg-gray-700">A</span></div>
            <div className="media-body mg-l-10">
                <h6 className="tx-13 mg-b-3">{ FirstName }</h6>
                <span className="tx-12">{ MobilePhone }</span>
            </div>
            <nav>
                <Link to=""><FeatherIcon icon="star"></FeatherIcon></Link>
                <Link to=""><FeatherIcon icon="edit-2"></FeatherIcon></Link>
            </nav>
        </div>
    )
}

class ConatctList extends Component {

    render() {
        const Conatcts = this.props.Contacts;
        const type = this.props.type;
        return (
            <div className="contact-sidebar">
                <div className="contact-sidebar-header">
                    <FeatherIcon icon="search"></FeatherIcon>
                    <div className="search-form">
                        <input type="search" className="form-control" placeholder="Search contacts" />
                    </div>
                    <div className="btn btn-xs btn-icon btn-primary" data-toggle="modal" onClick={ () => this.props.setModel() } >
                        <span data-toggle="tooltip" title="Add New Contact"><FeatherIcon icon="user-plus"></FeatherIcon></span>
                    </div>
                </div>
                <PerfectScrollbar className="contact-sidebar-body">
                    <div className="tab-content">
                        <div id="tabContact" className="tab-pane fade active show">
                            <div className="pd-y-20 pd-x-10 contact-list">
                                <label id="contact-label" className="contact-list-divider">{type}</label>
                                {
                                    Conatcts.map((item,key)=>(
                                        <ContactCard data={item} itemNumber={key} contactDetails={ this.props. contactDetails }/>
                                    ))  
                                }

                            </div>
                        </div>


                    </div>
                </PerfectScrollbar >
            </div>
        )
    }
}

export default connect(null, { contactDetails, setModel })(ConatctList);