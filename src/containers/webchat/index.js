import React, { Component } from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import $ from 'jquery';
import { Mentions } from 'antd';
import FeatherIcon from 'feather-icons-react';
import ChatSideBar from '../chat/chatSidebar'
import ChatHead from '../chat/chatHead'
import MessageCard from '../chat/messageCard'
import MemberList from '../chat/memberList'
import ChatContent from '../chat/chat-content';
import ChatJquery from '../chat/jqueryChat'

class WebChat extends Component {

    componentDidMount = () => {
        $(ChatJquery())
    }

    state = {
        message: "",
        ghostMode: false,
        User: {
            name: "Rameez Raja",
            onlineStatus: true,
            image: "https://via.placeholder.com/500"
        },
        Chats: [
            {
                sender: "other",
                user: "Rameez",
                newMessages: 2,
                userOnline: true,
                name: "Sher ali",
                time: "2:00pm",
                body: "hey how are you ",
                nameInitial: "S",
                onlineStatus: true,
                ghostMessage: true
            },
            {
                sender: "me",
                name: "Rameez Raja",
                time: "2:00pm",
                body: "I am fine",
                nameInitial: "R",
                onlineStatus: false,
                ghostMessage: false
            },
            {
                sender: "other",
                newMessages: 2,
                userOnline: true,
                name: "Sher Ali Gulam",
                time: "2:00pm",
                body: "Good",
                nameInitial: "S",
                onlineStatus: true,
                ghostMessage: true
            }
        ],
        ChatList: [
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
            },
            {
                name: "Ahmed",
                timeAgo: "5 days ago",
                newMessages: 0,
                userOnline: false
            }
        ]
    }

    toggleMode = (e) => {

        e.preventDefault()
        const { ghostMode } = this.state
        console.log(ghostMode, !ghostMode);
        this.setState({
            ghostMode: !ghostMode
        })
    }

    onChange = (value) => {
        console.log('Change:', value);
    }

    onSelect = (option) => {
        console.log('select', option);
    }

    render() {
        const { ChatList, User, Chats, ghostMode, message } = this.state
        const componentName = this.props.match.path;
        console.log("hai hai beduu", ghostMode);
        const { Option } = Mentions;
        let classes = ghostMode ? "ghost-mode" : "normal-mode"
        return (
            <div className="content-body pd-0">
                <div className="chat-wrapper chat-wrapper-two">

                    <ChatSideBar Chats={ChatList} User={User} />

                    <div className="chat-content">
                        <ChatHead User={User} backgroundColor={'#0000FF'} toggleMode={this.toggleMode} ghostMode={ghostMode} />
                        <div className="chat-content-body">
                            <div className="chat-group background-image" style={{ backgroundImage: "url('./webchat.png')" }} >

                                <div className="chat-group-divider">February 20, 2019</div>
                                {
                                    Chats.map((item) => (
                                        <MessageCard data={item} backgroundColor={'#0000FF'} />
                                    ))
                                }
                            </div>
                        </div>

                        <MemberList />

                        <div className="chat-content-footer" style={{ backgroundColor: ghostMode && "#333333" }}>
                            <Link data-toggle="tooltip" title="Add File" className="chat-plus"><FeatherIcon icon="plus"></FeatherIcon></Link>
                            <Link onClick={ this.toggleMode } data-toggle="tooltip" title={ ghostMode ? "Group Mode" : "Ghost Mode"} className="chat-plus"><img src={ ghostMode ? "./assets/group.svg" : "./assets/ghost.svg" } width='20px'/></Link >
                            {   !ghostMode ? <input type="text" className="form-control align-self-center bd-0" placeholder="Message" /> :
                                <Mentions
                                    style={{ width: '100%' }}
                                    onChange={this.onChange}
                                    onSelect={this.onSelect}
                                    className={"form-control align-self-center bd-0 " + classes}
                                    placeholder="Message"
                                >
                                    <Option value="Ameer Khan">
                                        <div className="avatar avatar-sm avatar-online">
                                            <span className="avatar-initial rounded-circle">A</span>
                                        </div>
                                        <span>Ameer Khan</span>
                                    </Option>
                                </Mentions>
                            }
                            <nav>
                                <Link to="" data-toggle="tooltip" title="Add GIF"><FeatherIcon icon="image"></FeatherIcon></Link>
                                <Link to="" data-toggle="tooltip" title="Add Gift"><FeatherIcon icon="gift"></FeatherIcon></Link>
                                <Link to="" data-toggle="tooltip" title="Add Smiley"><img src={"./assets/smile.svg"} width='20px'/></Link>
                            </nav>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {})(WebChat);