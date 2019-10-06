import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import ChatContent from './chat-content';
import ChannelList from './ChannelList';
import ChatList from './ChatList';

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
                <Link to=""><i data-feather="mic"></i></Link>
                <Link to=""><i data-feather="settings"></i></Link>
            </div>
        </div>
    )
}



class Chat extends Component {

    componentDidMount = () => {
        const componentName = this.props.match.path;
        switch( componentName ){
            case "/textmessaging":
                    // call actions for Text Message here 
                break;
            case "/websitechat":
                    // call actions for websitechat here 
                break;
            case "/whatsapp":
                    // call actions for whatsapp here 
                break;
        }
    }

    state = {
        User: {
            name: "Rameez Raja",
            onlineStatus: true,
            image: "https://via.placeholder.com/500"
        },
        Chats: [
            {
                name: "Sher Ali",
                timeAgo: "5 days ago",
                newMessages: 2,
                userOnline: true
            },
            {
                name: "Faizan",
                timeAgo: "5 days ago",
                newMessages: 0,
                userOnline: false
            }
        ],

        Channels: [
            {
                ChannelName: "genral",
                newMessages: 5
            },
            {
                ChannelName: "Front-end",
                newMessages: 0
            },
            {
                ChannelName: "back-end",
                newMessages: 10
            }
        ]
    }

    render() {
        const { Chats, Channels, User } = this.state
        const componentName = this.props.match.path;
        console.log( componentName );
        return (
            <div className="chat-wrapper chat-wrapper-two">
                <div className="chat-sidebar">
                    <div className="chat-sidebar-header">
                        <Link to="#" data-toggle="dropdown" className="dropdown-link">
                            <div className="d-flex align-items-center">
                                <div className="avatar avatar-sm mg-r-8"><span className="avatar-initial rounded-circle">T</span></div>
                                <span className="tx-color-01 tx-semibold">TeamName</span>
                            </div>
                            <span><i data-feather="chevron-down"></i></span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right tx-13">
                            <Link to="" className="dropdown-item"><i data-feather="user-plus"></i> Invite People</Link>
                            <a className="dropdown-item"><i data-feather="plus-square"></i> Create Channel</a>
                            <Link to="" className="dropdown-item"><i data-feather="server"></i> Server Settings</Link>
                            <Link to="" className="dropdown-item"><i data-feather="bell"></i> Notification Settings</Link>
                            <Link to="" className="dropdown-item"><i data-feather="zap"></i> Privacy Settings</Link>
                            <div className="dropdown-divider"></div>
                            <Link to="" className="dropdown-item"><i data-feather="edit-3"></i> Edit Team Details</Link>
                            <Link to="" className="dropdown-item"><i data-feather="shield-off"></i> Hide Muted Channels</Link>
                        </div>
                    </div>


                    <div className="chat-sidebar-body">
                        { componentName == "/WebsiteChat" && <ChannelList Channels={Channels} /> }
                        <ChatList Chats={Chats}/>
                    </div>

                    <UserInfo data={User} />

                </div>

                <ChatContent />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      
    }
  }

export default connect(mapStateToProps, { })(Chat);