import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

const ChannelCard = (props) => {
    const { name, newMessages } = props.data;
    return (
        <div className="nav-link">
            # {name}
            {newMessages > 0 && <span className="badge badge-danger">{newMessages}</span>}
        </div>
    )
}

const ChannelList = (props) => {
    const { Channels } = props;
    return (
        <div className="flex-fill">
            <div className="d-flex align-items-center justify-content-between pd-x-10 mg-b-10">
                <span className="tx-10 tx-uppercase tx-medium tx-color-03 tx-sans tx-spacing-1">All Channels</span>
                <a href="#modalCreateChannel" className="chat-btn-add" data-toggle="modal"><span data-toggle="tooltip" title="Create Channel"><FeatherIcon icon="plus-circle"></FeatherIcon></span></a>
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