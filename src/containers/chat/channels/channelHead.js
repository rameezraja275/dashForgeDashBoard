import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom'
class ChannelHead extends Component {

    render() {
        const { Channel, backgroundColor,ghostMode } = this.props
        
        return (
            
            <div className="chat-content-header" style={{ backgroundColor: ghostMode ? "#333333" : backgroundColor }}>
                <h6 id="channelTitle" class="mg-b-0 chat-head-white-item">#{Channel.name}</h6>
                <div class="d-flex">
                  <nav id="channelNav">
                    <a href="#modalInvitePeople" data-toggle="modal"><span data-toggle="tooltip" title="Invite People"><FeatherIcon icon="user-plus" className="chat-head-white-item"></FeatherIcon></span></a>
                    <a id="showMemberList" href="" data-toggle="tooltip" title="Member list" class="d-flex align-items-center chat-head-white-item">
                      <FeatherIcon icon="users"></FeatherIcon>
                      <span class="tx-medium mg-l-5 chat-head-white-item">{Channel.totalUser}</span>
                    </a>
                  </nav>
                  <nav class="mg-sm-l-10">
                    <a href="" data-toggle="tooltip" title="Channel Settings" data-placement="left"><FeatherIcon icon="more-vertical" className="chat-head-white-item"></FeatherIcon></a>
                  </nav>
              </div>
            </div>
        )
    }
}

export default ChannelHead