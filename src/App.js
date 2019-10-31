import React, { Component } from 'react';
import { connect } from "react-redux";
import Navbar from './containers/navBar';
import Search from "./containers/searchbar";
import Compose from './containers/mail/compose-mail';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Routes from './config/Routes';
import ModalViewDetails from './containers/fileManager/modelViewDetails'
import ModelCreateChannel from './containers/chat/ModelCreateChannel'
import ModelInvitePeople from './containers/chat/ModelInvitePeople'
import ModelShareFile from './containers/fileManager/modelShareFile'
import ModelCopyNMove from './containers/fileManager/modelCopyNmove'
import ToastDownlaod from './containers/fileManager/downloadToast'
import ContactForm from './containers/contact/contact-from'

import $ from 'jquery'
import appJquery from './appJquery'
import RightSideBar from './containers/rightSideBar';
import Drawer from './containers/rightSideBar/drawer'
import DeleteModel from './containers/contact/model-delete';
import ModelCreateEvent from './containers/calendar/createEvent'
import ModelEventDetail from './containers/calendar/eventDescription'

class App extends Component {

  state = {
    RightSideBarStatus : true
  }

  componentDidMount = () => {
    $(appJquery())
  }

  toogleRightSideBar = () => {
    const { RightSideBarStatus } = this.state
    this.setState({
      RightSideBarStatus : !RightSideBarStatus
    })
  }

  render() {
    const { RightSideBarStatus } = this.state
    this.props.darkMode ? document.body.classList.add('dark-mode') : 
      document.body.classList.remove('dark-mode')
    return (
      <HashRouter >
          <Navbar />
          <div className="content ht-100v pd-0" style={{paddingRight : RightSideBarStatus ? "60px" : "0px" }}>
            <Search toogleRightSideBar={ this.toogleRightSideBar } status={RightSideBarStatus}/>
            <Routes />
          </div>
          { RightSideBarStatus ? <RightSideBar /> : null }
        <Drawer /> 
        <Compose />
        <ModalViewDetails />
        <ModelCreateChannel />
        <ModelInvitePeople />
        <ModelShareFile />
        <ModelCopyNMove />
        { this.props.modelOpenContact && <ContactForm /> }
        <DeleteModel />
        { this.props.modelType == "create" && <ModelCreateEvent />}
        { this.props.modelType == "eventDescription" && <ModelEventDetail />}

        <div class="pos-fixed b-10 r-10">
          <ToastDownlaod />
        </div>
      </HashRouter >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modelOpenContact: state.contact.modelOpen,
    modelType : state.calendar.modelType,
    darkMode: state.commonReducer.darkMode
  }
}

export default connect(mapStateToProps, {  })(App);

