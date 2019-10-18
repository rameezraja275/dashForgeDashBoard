import React, { Component } from 'react'
import { Link } from "react-router-dom"
import FeatherIcon from 'feather-icons-react';
import ChatList from './ChatList';
import UserInfo from './userInfo'

class ChatSideBar extends Component {

    render() {
        const { Chats ,User } = this.props
        return (
            <div className="chat-sidebar">
                <div className="chat-sidebar-header">
                    <Link to="#" data-toggle="dropdown" className="dropdown-link">
                        <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm mg-r-8"><span className="avatar-initial rounded-circle">T</span></div>
                            <span className="tx-color-01 tx-semibold">TeamName</span>
                        </div>
                        <span><FeatherIcon icon="chevron-down"></FeatherIcon></span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right tx-13">
                        <Link to="" className="dropdown-item"><FeatherIcon icon="user-plus"></FeatherIcon> Invite People</Link>
                        <a className="dropdown-item"><FeatherIcon icon="plus-square"></FeatherIcon> Create Channel</a>
                        <Link to="" className="dropdown-item"><FeatherIcon icon="server"></FeatherIcon> Server Settings</Link>
                        <Link to="" className="dropdown-item"><FeatherIcon icon="bell"></FeatherIcon> Notification Settings</Link>
                        <Link to="" className="dropdown-item"><FeatherIcon icon="zap"></FeatherIcon> Privacy Settings</Link>
                        <div className="dropdown-divider"></div>
                        <Link to="" className="dropdown-item"><FeatherIcon icon="edit-3"></FeatherIcon> Edit Team Details</Link>
                        <Link to="" className="dropdown-item"><FeatherIcon icon="shield-off"></FeatherIcon> Hide Muted Channels</Link>
                    </div>
                </div>


                <div className="chat-sidebar-body">
                    <ChatList Chats={Chats} />
                </div>

                <UserInfo data={User} />

            </div>
        )
    }
}

export default ChatSideBar