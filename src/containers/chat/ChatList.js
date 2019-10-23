import React from 'react'

const ChatList = (props) => {
    const { Chats } = props;
    return (
        <React.Fragment>
            <p className="tx-10 tx-uppercase tx-medium tx-color-03 tx-sans tx-spacing-1 pd-l-10 mg-b-10">Direct Messages</p>
            <div id="chatDirectMsg" className="chat-msg-list">
                {
                    Chats.map((item, key) => {
                        const { name, timeAgo, newMessages, userOnline } = item;
                        let avatar = "";
                        userOnline ? avatar = "avatar avatar-sm avatar-online" : avatar = "avatar avatar-sm avatar-offline"
                        return <div className={key == 0 ? "media active" : "media"}>
                            <div className={avatar}>
                                <img src="../https://via.placeholder.com/350" className="rounded-circle" alt="" />
                            </div>
                            <div className="media-body mg-l-10">
                                <h6 className="mg-b-0">{name}</h6>
                                <small className="d-block tx-color-04">{timeAgo}</small>
                            </div>
                            {newMessages > 0 && <span className="badge" style={{ background: '#e5e9f2' }}>{newMessages}</span>}
                        </div>
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default ChatList;