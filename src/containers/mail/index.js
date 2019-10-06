import React, { Component } from 'react';
import MailNav from './mail-nav'
import ConversationList from './conversation-list'
import Conversation from './conversation-content'


class Mail extends Component {
  render() {
    return (
        <div className="mail-wrapper mail-wrapper-two">
          <MailNav />
          <ConversationList />
          <Conversation />
      </div>
    );
  }
}

export default Mail;