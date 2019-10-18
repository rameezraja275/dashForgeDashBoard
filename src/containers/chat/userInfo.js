import React from 'react'
import { Link } from "react-router-dom"
import FeatherIcon from 'feather-icons-react';

const UserInfo = (props) => {
    const { image, name, onlineStatus } = props.data
    return (
        <div className="chat-sidebar-footer">
            <div className="d-flex align-items-center">
                {
                    onlineStatus
                        ? <div className="avatar avatar-sm avatar-online mg-r-8"><img src={image} className="rounded-circle" alt="" /></div>
                        : <div className="avatar avatar-sm avatar-offline mg-r-8"><img src={image} className="rounded-circle" alt="" /></div>
                }
                <h6 className="tx-semibold mg-b-0">{name}</h6>
            </div>
            <div className="d-flex align-items-center">
                <Link to=""><FeatherIcon icon="mic"></FeatherIcon></Link>
                <Link to=""><FeatherIcon icon="settings"></FeatherIcon></Link>
            </div>
        </div>
    )
}

export default UserInfo