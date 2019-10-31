import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'


const ConversationCard = ( props ) => {
    const { name, subject, time, message, nameIntial } = props.conversationinfo;
    return (
        <li className="media unread">
            <div className="avatar"><span className="avatar-initial rounded-circle bg-indigo">{nameIntial}</span></div>
            <div className="media-body mg-l-15">
                <div className="tx-color-03 d-flex align-items-center justify-content-between mg-b-2">
                    <span className="tx-12">{ name }</span>
                    <span className="tx-11">{time}</span>
                </div>
                <h6 className="tx-13">{subject}</h6>
                <p className="tx-12 tx-color-03 mg-b-0">{message}</p>
            </div>
        </li>
    )
}

const DateLabel = ({ date }) => {
    return (
        <label className="mail-group-label">{ date }</label>
    )
}


class ConversationsList extends Component {
    state = {
        Conversations : [
            {
                name : "Waqas",
                subject : "Help me with JS",
                time : "4:00AM",
                message : "Hey Rameez Need Help. . .",
                nameIntial : "W"
            },
            {
                name : "SherAli",
                subject : "Bay bela",
                time : "4:00AM",
                message : "Hey Rameez Bay bela. . .",
                nameIntial : "S"
            }
        ]
    }

    render() {
        const { Conversations } = this.state;
        return (
            <div className="mail-group">
                <div className="mail-group-header justify-content-between">
                    <h6 className="tx-uppercase tx-semibold mg-b-0">Inbox</h6>
                    <div className="dropdown tx-13">
                        <span className="tx-color-03">Sort:</span> <Link to="" className="dropdown-link link-02">Date</Link>
                    </div>
                </div>
                <PerfectScrollbar className="mail-group-body">
                    <DateLabel date="Toady"/>
                    <ul className="list-unstyled media-list mg-b-0">
                        {
                            Conversations.map((item, key)=>(
                                <ConversationCard conversationinfo={ item } />
                            ))
                        }
                        
                    </ul>
                    <div className="pd-t-1 pd-b-5 pd-x-5">
                        <Link to="" className="btn btn-xs btn-block btn-light bd-0 tx-uppercase tx-10 tx-spacing-1 tx-medium mn-ht-0">Load more</Link>
                    </div>
                </PerfectScrollbar>
            </div>
        )
    }
}

export default ConversationsList;