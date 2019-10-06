import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const ContactCard = (props) => {
    const { name, phoneNumber, onlineStatus } = props.data
    let avatar = "";

    onlineStatus ? avatar = "avatar avatar-sm avatar-online" : avatar = "avatar avatar-sm avatar-offline"
    return (
        <div className="media">
            <div className={avatar}><span className="avatar-initial rounded-circle bg-gray-700">A</span></div>
            <div className="media-body mg-l-10">
                <h6 className="tx-13 mg-b-3">{ name }</h6>
                <span className="tx-12">{ phoneNumber }</span>
            </div>
            <nav>
                <Link to=""><i data-feather="star"></i></Link>
                <Link to=""><i data-feather="edit-2"></i></Link>
            </nav>
        </div>
    )
}

class ConatctList extends Component {

    state = {
        Conatcts : [
            {
                name : "Abid",
                phoneNumber : "+92 74523 3254",
                onlineStatus : true
            },
            {
                name : "zain",
                phoneNumber : "+92 74523 3254",
                onlineStatus : false
            }
        ]
    }
    render() {
        const Conatcts = this.state.Conatcts;
        return (
            <div className="contact-sidebar">
                <div className="contact-sidebar-header">
                    <i data-feather="search"></i>
                    <div className="search-form">
                        <input type="search" className="form-control" placeholder="Search contacts" />
                    </div>
                    <Link to="#modalNewContact" className="btn btn-xs btn-icon btn-primary" data-toggle="modal">
                        <span data-toggle="tooltip" title="Add New Contact"><i data-feather="user-plus"></i></span>
                    </Link>
                </div>
                <div className="contact-sidebar-body">
                    <div className="tab-content">
                        <div id="tabContact" className="tab-pane fade active show">
                            <div className="pd-y-20 pd-x-10 contact-list">
                                <label id="contactA" className="contact-list-divider">A</label>
                                {
                                    Conatcts.map((item,key)=>(
                                        <ContactCard data={item}/>
                                    ))  
                                }

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default ConatctList