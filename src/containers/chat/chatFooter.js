import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom'
import { Mentions } from 'antd';
class ChatFooter extends Component {

    render() {
        const { onKeyPressed, onKeyUp, toggleMode, onChange, onSelect, ghostMode, value} = this.props
        const { Option } = Mentions;
        let classes = ghostMode ? "ghost-mode" : "normal-mode"
        return (
            <div onKeyDown={onKeyPressed} onKeyUp={onKeyUp} className="chat-content-footer" style={{ backgroundColor: ghostMode && "#333333" }}>
                <Link onClick={toggleMode} data-toggle="tooltip" title={ghostMode ? "Group Mode" : "Ghost Mode"} className="chat-plus mr" style={{ width: "100px" }}><img src={ghostMode ? "./assets/group.svg" : "./assets/ghost.svg"} width='20px' /></Link >
                {/* {!ghostMode ? <textarea style={{ resize: 'none', height: '0px' }} type="text" className="form-control align-self-center bd-0" placeholder="Message" ></textarea> : */}
                    <Mentions
                        style={{ width: '100%' }}
                        onChange={onChange}
                        onSelect={onSelect}
                        className={"form-control align-self-center bd-0 " + classes}
                        placeholder="Message"
                        value = {value}
                    >
                        <Option value="Ameer Khan">
                            <div className="avatar avatar-sm avatar-online">
                                <span className="avatar-initial rounded-circle">A</span>
                            </div>
                            <span>Ameer Khan</span>
                        </Option>
                    </Mentions>
                {/* } */}
                <nav>

                <div data-toggle="tooltip" title="Add File" onClick={ this.props.toggleAttachment }><FeatherIcon icon="paperclip"></FeatherIcon></div>        
                <div data-toggle="tooltip" title="Add Gift"><FeatherIcon icon="gift"></FeatherIcon></div>
                <div data-toggle="tooltip" title="Add Smiley"><img src={"./assets/smile.svg"} width='20px' /></div>
                </nav>
            </div>
        )
    }
}

export default ChatFooter