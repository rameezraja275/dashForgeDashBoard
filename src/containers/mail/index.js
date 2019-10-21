import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setCurrentRoute } from '../../config/commanActions'
import MailNav from './mail-nav'
import ConversationList from './conversation-list'
import Conversation from './conversation-content'
import $ from 'jquery';
import MailJquery from './mailJquery'

class Mail extends Component {

  componentDidMount = () => {
    $( MailJquery() )
    this.props.setCurrentRoute("mail");
  }

  render() {
    return (
      <div className="content-body pd-0">
      <div className="mail-wrapper mail-wrapper-two">
        <MailNav />
        <ConversationList />
        <Conversation />
      </div>
      </div>
    );
  }
}

export default connect(null, { setCurrentRoute })(Mail);