import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';
import $ from 'jquery';
import jqueryNav from './jqueryNav'
import NavFooter from './navFooter'

const Insights = (props) => {
  const { active } = props
  return <React.Fragment>
    <li className="nav-label mg-t-25">Insights</li>
    <li className={active == "analytics" ? "nav-item active" : "nav-item"} ><Link to="/" className="nav-link"><FeatherIcon icon="globe"></FeatherIcon> <span>Website Analytics</span></Link ></li>
    <li className={active == "salemonitoring" ? "nav-item active" : "nav-item"} ><Link to="/salemonitoring" className="nav-link"><FeatherIcon icon="shopping-bag"></FeatherIcon> <span>Sale Monitorings</span></Link ></li>
    <li className={active == "helpdesk" ? "nav-item active" : "nav-item"} ><Link to="/helpdesk" className="nav-link"><FeatherIcon icon="life-buoy"></FeatherIcon> <span>Helpdesk Management</span></Link ></li>
  </React.Fragment>
}

const Apps = (props) => {
  const { active } = props
  return <React.Fragment>
    <li className="nav-label mg-t-25">Applications</li>
    <li className={active == "contacts" ? "nav-item nav-item-apps active" : "nav-item nav-item-apps"} ><Link to="/contacts" className="nav-link"><FeatherIcon icon="users"></FeatherIcon> <span>Contacts</span></Link ></li>
    <li className={active == "mail" ? "nav-item nav-item-apps active" : "nav-item nav-item-apps"} ><Link to="/mail" className="nav-link"><FeatherIcon icon="mail"></FeatherIcon> <span>Mail</span></Link></li>
    <li className={active == "filemanager" ? "nav-item nav-item-apps active" : "nav-item nav-item-apps"} ><Link to="/filemanager" className="nav-link"><FeatherIcon icon="file-text"></FeatherIcon> <span>File Manager</span></Link ></li>
    <li className={active == "calendar" ? "nav-item nav-item-apps active" : "nav-item nav-item-apps"} ><Link to="/calendar" className="nav-link"><FeatherIcon icon="calendar"></FeatherIcon> <span>Calendar</span></Link ></li>
  </React.Fragment>
}

const Chats = (props) => {
  const { active } = props
  return <React.Fragment>
    <li className="nav-label mg-t-25">Chats</li>
    <li className={active == "whatsapp" ? "nav-item active" : "nav-item"} ><Link to="/whatsapp" params={{ render: "Whatsapp" }} className="nav-link"><FeatherIcon icon="message-circle"></FeatherIcon> <span>WhatsApp</span></Link ></li>
    <li className={active == "textmessaging" ? "nav-item active" : "nav-item"} ><Link to="/textmessaging" params={{ render: "textChat" }} className="nav-link"><FeatherIcon icon="message-square"></FeatherIcon> <span>SMS</span></Link ></li>
    <li className={active == "websitechat" ? "nav-item active" : "nav-item"} ><Link to="/websitechat" params={{ render: "WebsiteChat" }} className="nav-link"><FeatherIcon icon="send"></FeatherIcon> <span>Chat</span></Link ></li>
    <li className={active == "facebook" ? "nav-item active" : "nav-item"} ><Link to="/facebook" className="nav-link"><FeatherIcon icon="facebook"></FeatherIcon> <span>Facebook</span></Link ></li>
    <li className={active == "instagram" ? "nav-item active" : "nav-item"} ><Link to="/instagram" className="nav-link"><FeatherIcon icon="instagram"></FeatherIcon> <span>Instagram</span></Link ></li>
    <li className={active == "twitter" ? "nav-item active" : "nav-item"} ><Link to="/twitter" className="nav-link"><FeatherIcon icon="twitter"></FeatherIcon> <span>Twitter</span></Link ></li>
    <li className={active == "channels" ? "nav-item active" : "nav-item"} ><Link to="/channels" className="nav-link"><FeatherIcon icon="hash"></FeatherIcon> <span>Channels</span></Link ></li>
  </React.Fragment>
}

const Others = (props) => {
  const { active } = props
  return <React.Fragment >
    {/* <li className="nav-label mg-t-25">Team Mates</li> */}

  </React.Fragment >
}

class NavBar extends Component {

  state = {
    currenttab: "apps"
  }

  changeTab = (tab) => {
    this.setState({
      currenttab: tab
    })
  }

  componentDidMount = () => {
    $(jqueryNav())
  }

  render() {
    const active = this.props.currentRoute
    const { currenttab } = this.state

    const styleBackground = { background: "#F7F8FA" }
    return (
      <aside className="aside aside-fixed">

        <div className="aside-header" style={ styleBackground }>
          <Link to="/" className="aside-logo">dash<span>forge</span></Link >
          <Link className="aside-menu-link sidebar-toggler">
            <FeatherIcon icon="menu"></FeatherIcon>
            <FeatherIcon icon="x"></FeatherIcon>
          </Link >
          <Link id="mailSidebar" className="burger-menu d-none"><FeatherIcon icon="arrow-left"></FeatherIcon></Link >
        </div>

        <div className="aside-body" style={ styleBackground }>
          <div className="aside-loggedin">
            <div className="d-flex align-items-center justify-content-start">
              <Link to="" className="avatar"><img src="https://via.placeholder.com/500" className="rounded-circle" alt="" /></Link >
              <div className="aside-alert-link">
                <Link to="" className="new" data-toggle="tooltip" title="You have 2 unread messages"><FeatherIcon icon="message-square"></FeatherIcon></Link >
                <Link to="" className="new" data-toggle="tooltip" title="You have 4 new notifications"><FeatherIcon icon="bell"></FeatherIcon></Link >
                <Link to="" data-toggle="tooltip" title="Sign out"><FeatherIcon icon="log-out"></FeatherIcon></Link >
              </div>
            </div>
            <div className="aside-loggedin-user">
              <a href="#loggedinMenu" className="d-flex align-items-center justify-content-between mg-b-2" data-toggle="collapse">
                <h6 className="tx-semibold mg-b-0">Katherine Pechon</h6>
                <FeatherIcon icon="chevron-down"></FeatherIcon>
              </a >
              <p className="tx-color-03 tx-12 mg-b-0">Administrator</p>
            </div>
            <div className="collapse" id="loggedinMenu">
              <ul className="nav nav-aside mg-b-0">
                <li className="nav-item"><Link to="" className="nav-link"><FeatherIcon icon="edit"></FeatherIcon> <span>Edit Profile</span></Link ></li>
                <li className="nav-item"><Link to="" className="nav-link"><FeatherIcon icon="user"></FeatherIcon> <span>View Profile</span></Link ></li>
                <li className="nav-item"><Link to="" className="nav-link"><FeatherIcon icon="settings"></FeatherIcon> <span>Account Settings</span></Link ></li>
                <li className="nav-item"><Link to="" className="nav-link"><FeatherIcon icon="help-circle"></FeatherIcon> <span>Help Center</span></Link ></li>
                <li className="nav-item"><Link to="" className="nav-link"><FeatherIcon icon="log-out"></FeatherIcon> <span>Sign Out</span></Link ></li>
              </ul>
            </div>
          </div>
          <ul className="nav nav-aside">
            {currenttab == "apps" &&
              <React.Fragment>
                <Insights active={active} />
                <Apps active={active} />
                <Chats active={active} />
              </React.Fragment>
            }

            {currenttab == "integartions" &&
              <Others active={active}/>
            }

            {currenttab == "sequence" && 
              <Others active={active}/>

            }

            {currenttab == "support" && 
              <Others active={active}/>
            }

          </ul>
        </div>


        <NavFooter changeTab={this.changeTab} currenttab={this.state.currenttab} />

      </aside>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentRoute: state.commonReducer.currentRoute
  }
}

export default connect(mapStateToProps, null)(NavBar);