import React from 'react'

const MessageCard = (props) => {

    const { name, time, body, nameInitial, onlineStatus, ghostMessage, sender } = props.data
    const { backgroundColor } = props
    let avatar = ""
    onlineStatus ? avatar = "avatar avatar-sm avatar-online" : avatar = "avatar avatar-sm avatar-offline"
    let classes =  ghostMessage ? "media ghost-message" : "media";
    classes = sender == "me" ? `${classes} my-message` : classes;
    return (
        <React.Fragment>
            {
                <div className={classes}>
                    {sender != "me" && <div className={avatar}>
                        <span className="avatar-initial rounded-circle">{nameInitial}</span>
                    </div>}
                    <div className="media-body" >
                        <p data-toggle="tooltip" title={time} className="media-body-text" style={{ backgroundColor: backgroundColor }}>{body}</p>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default MessageCard