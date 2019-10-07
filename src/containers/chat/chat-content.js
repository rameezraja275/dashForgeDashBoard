import React, { Component } from "react";
import { Link } from "react-router-dom"
import FeatherIcon from 'feather-icons-react';

const MessageCard = (props) => {

    const { name, time, body, nameInitial, onlineStatus } = props.data
    let avatar = ""
    onlineStatus ? avatar = "avatar avatar-sm avatar-online" : avatar = "avatar avatar-sm avatar-offline"
    return (
        <div className="media">
            <div className={avatar}>
                <span className="avatar-initial rounded-circle">{nameInitial}</span>
            </div>
            <div className="media-body">
                <h6>{name} <small>{time}</small></h6>

                <p>{body}</p>
            </div>
        </div>
    )
}

class ChatContent extends Component {

    state = {
        showMemberList: false,
        Messages: [
            {
                name: "sherali",
                time: "2:00pm",
                body: "hey how are you ",
                nameInitial: "S",
                onlineStatus: true
            },
            {
                name: "shah",
                time: "2:00pm",
                body: "hey how are you ",
                nameInitial: "S",
                onlineStatus: false
            }
        ]
    }
    render() {
        const { Messages, showMemberList } = this.state
        return (
            <div className="chat-content">
                <div class="chat-content-header">
                    <h6 id="channelTitle" class="mg-b-0">#general</h6>
                    <div id="directTitle" class="d-none">
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-sm avatar-online"><span class="avatar-initial rounded-circle">b</span></div>
                            <h6 class="mg-l-10 mg-b-0">@dfbot</h6>
                        </div>
                    </div>
                    <div class="d-flex">
                        <nav id="channelNav">
                            <a href="#modalInvitePeople" data-toggle="modal"><span data-toggle="tooltip" title="Invite People"><FeatherIcon icon="user-plus"></FeatherIcon></span></a>
                            <a id="showMemberList" href="" data-toggle="tooltip" title="Member list" class="d-flex align-items-center">
                                <FeatherIcon icon="users"></FeatherIcon>
                                <span class="tx-medium mg-l-5">25</span>
                            </a>
                        </nav>
                        <nav id="directNav" class="d-none">
                            <a href="" data-toggle="tooltip" title="Call User"><FeatherIcon icon="phone"></FeatherIcon></a>
                            <a href="" data-toggle="tooltip" title="User Details"><FeatherIcon icon="info"></FeatherIcon></a>
                            <a href="" data-toggle="tooltip" title="Add to Favorites"><FeatherIcon icon="star"></FeatherIcon></a>
                            <a href="" data-toggle="tooltip" title="Flag User"><FeatherIcon icon="flag"></FeatherIcon></a>
                        </nav>
                        <div class="search-form mg-l-15 d-none d-sm-flex">
                            <input type="search" class="form-control" placeholder="Search" />
                            <button class="btn" type="button"><FeatherIcon icon="search"></FeatherIcon></button>
                        </div>
                        <nav class="mg-sm-l-10">
                            <a href="" data-toggle="tooltip" title="Channel Settings" data-placement="left"><FeatherIcon icon="more-vertical"></FeatherIcon></a>
                        </nav>
                    </div>
                </div>

                <div className="chat-content-body">
                    <div className="chat-group">

                        <div className="chat-group-divider">February 20, 2019</div>
                        {
                            Messages.map((item) => (
                                <MessageCard data={item} />
                            ))
                        }
                    </div>
                </div>

                <div className="chat-sidebar-right ">
                    {
                        <div className="pd-y-20 pd-x-10">
                            <div className="tx-10 tx-uppercase tx-medium tx-color-03 tx-sans tx-spacing-1 pd-l-10">Members List</div>
                            <div className="chat-member-list">
                                <Link to="#" className="media">
                                    <div className="avatar avatar-sm avatar-online"><span className="avatar-initial rounded-circle">b</span></div>
                                    <div className="media-body mg-l-10">
                                        <h6 className="mg-b-0">dfbot</h6>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    }
                </div>

                <div className="chat-content-footer">
                    <Link to="" data-toggle="tooltip" title="Add File" className="chat-plus"><FeatherIcon icon="plus"></FeatherIcon></Link>
                    <input type="text" className="form-control align-self-center bd-0" placeholder="Message" />
                    <nav>
                        <Link to="" data-toggle="tooltip" title="Add GIF"><FeatherIcon icon="image"></FeatherIcon></Link>
                        <Link to="" data-toggle="tooltip" title="Add Gift"><FeatherIcon icon="gift"></FeatherIcon></Link>
                        <Link to="" data-toggle="tooltip" title="Add Smiley"><FeatherIcon icon="smile"></FeatherIcon></Link>
                    </nav>
                </div>
            </div>
        )
    }
}

export default ChatContent