import React from 'react'
import { Link } from 'react-router-dom';

const ChatCard = (props) => {
    const { name, timeAgo, newMessages, userOnline } = props.data;
    let avatar = "";
    userOnline ? avatar = "avatar avatar-sm avatar-online" : avatar = "avatar avatar-sm avatar-offline"
    return (
        <div className="media">
            <div className={avatar}>
                <img src="../https://via.placeholder.com/350" className="rounded-circle" alt="" />
            </div>
            <div className="media-body mg-l-10">
                <h6 className="mg-b-0">{name}</h6>
                <small className="d-block tx-color-04">{timeAgo}</small>
            </div>
            {newMessages > 0 && <span className="badge badge-danger">{newMessages}</span>}
        </div>
    )
}

const ChatList = (props) => {
    const { Chats } = props;
    return (
        <div className="flex-fill pd-y-20 pd-x-10 bd-t">
        <p className="tx-10 tx-uppercase tx-medium tx-color-03 tx-sans tx-spacing-1 pd-l-10 mg-b-10">Direct Messages</p>
        <div id="chatDirectMsg" className="chat-msg-list">
            {
                Chats.map((item, key) => (
                    <ChatCard data={item} />
                ))
            }
        </div>
    </div> 
    )
}

export default ChatList;