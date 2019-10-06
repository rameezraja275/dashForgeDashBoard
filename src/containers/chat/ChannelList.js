import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const ChannelCard = (props) => {
    const { ChannelName, newMessages } = props.data;
    return (
        <Link to="/genral" className="nav-link">
            #{ChannelName}
            {newMessages > 0 && <span className="badge badge-danger">{newMessages}</span>}
        </Link>
    )
}

const ChannelList = (props) => {
    const { Channels } = props;
    return (
        <div className="flex-fill pd-y-20 pd-x-10">
            <div className="d-flex align-items-center justify-content-between pd-x-10 mg-b-10">
                <span className="tx-10 tx-uppercase tx-medium tx-color-03 tx-sans tx-spacing-1">All Channels</span>
                <a href="#modalCreateChannel" className="chat-btn-add" data-toggle="modal"><span data-toggle="tooltip" title="Create Channel"><i data-feather="plus-circle"></i></span></a>
            </div>
            <nav id="allChannels" className="nav flex-column nav-chat mg-b-20">
                {
                    Channels.map((item, key) => (
                        <ChannelCard data={item} />
                    ))
                }
            </nav>
        </div>
    )
}

export default ChannelList;