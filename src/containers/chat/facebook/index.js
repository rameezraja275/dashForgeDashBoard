import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentRoute } from '../../../config/commanActions'
import $ from 'jquery';
import ChatSideBar from '../chatSidebar'
import ChatHead from '../chatHead'
import MessageCard from '../messageCard'
import ChatJquery from '../jqueryChat'
import ChatFooter from '../chatFooter';
import Attachments from '../attachments';
import PerfectScrollbar from 'react-perfect-scrollbar'

class Facebook extends Component {

    componentDidMount = () => {
        $(ChatJquery())
        this.props.setCurrentRoute("facebook");

    }

    componentWillUnmount = () => {
        $('#mailSidebar').off('click');
        $("#showMemberList").off('click');
        $("#chatDirectMsg .media").off('click');
        $('#allChannels div').off('click');
        // $('.aside-menu-link').off('click');
    }

    state = {
        typedMessage: "",
        ghostMode: false,
        toggleAttachment: false,
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
                time: "November 24, 2019 at 2:00pm",
                body: "hey how are you ",
                nameInitial: "S",
                onlineStatus: true,
                ghostMessage: true
            },
            {
                sender: "me",
                name: "Rameez Raja",
                time: "November 24, 2019 at 2:00pm",
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
                time: "November 24, 2019 at 2:00pm",
                body: "Good",
                nameInitial: "S",
                onlineStatus: true,
                ghostMessage: false
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

    onChange = (e, value) => {
    // console.log('Change:', e ,"" , value);
        this.setState({
            typedMessage : e
        })
    }

    onSelect = (option) => {
        console.log('select', option);
    }

    onKeyUp = (e) => {
        const code = e.keyCode || e.which;
        if (code === 16) {
            e.preventDefault()
            this.shiftKeyStatus = false
        }
    }

    shiftKeyStatus = false;

    onKeyPressed = (e) => {
        const code = e.keyCode || e.which;
        if (code === 16) {
            e.preventDefault()
            this.shiftKeyStatus = true
        }
        if (code === 13) {
            e.preventDefault()
            if( this.shiftKeyStatus == true ){
                console.log("next line")
                const { typedMessage } = this.state
                this.setState({
                    typedMessage : typedMessage + "\n"
                })
            }
            else{
                console.log("send text")
            }
            
        }
    }

    toggleAttachment = () => {
        const { toggleAttachment } = this.state
        console.log("yoo ", toggleAttachment);
        this.setState({
            toggleAttachment: !toggleAttachment
        })
    }

    render() {
        const { ChatList, User, Chats, ghostMode, typedMessage, toggleAttachment } = this.state

        return (
            <div className="content-body pd-0">
                <div className="chat-wrapper chat-wrapper-two">

                    <ChatSideBar Chats={ChatList} User={User} />
                    <div className="chat-content">
                        <ChatHead User={User} backgroundColor={'#3b5997'} toggleMode={this.toggleMode} ghostMode={ghostMode} />
                        <PerfectScrollbar className="chat-content-body">
                            <div className="chat-group background-image facebook" style={{ backgroundImage: "url('./facebook.png')" }} >

                                {
                                    Chats.map((item) => (
                                        <MessageCard data={item} backgroundColor={'#3b5997'} />
                                    ))
                                }

                                {
                                    toggleAttachment && <Attachments />
                                }
                            </div>
                        </PerfectScrollbar >

                        <ChatFooter onKeyPressed={this.onKeyPressed} onKeyUp={this.onKeyUp} toggleMode={this.toggleMode} value={typedMessage}
                            onChange={this.onChange} onSelect={this.onSelect} ghostMode={ghostMode} toggleAttachment={this.toggleAttachment} />
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

export default connect(mapStateToProps, { setCurrentRoute })(Facebook);