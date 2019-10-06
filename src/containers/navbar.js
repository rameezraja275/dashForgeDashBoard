import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {

  state = {
    active : "analytics"
  }

  render() {
    const active = this.state.active;
    return (
      <aside className="aside aside-fixed aside-mail">
        <div className="aside-header">
          <Link to="/" className="aside-logo">dash<span>forge</span></Link >
          <Link to="" className="aside-menu-link">
            <i data-feather="menu"></i>
            <i data-feather="x"></i>
          </Link >
          <Link to="" id="mailSidebar" className="burger-menu d-md-none"><i data-feather="arrow-left"></i></Link >
        </div>
        <div className="aside-body">
          <div className="aside-loggedin">
            <div className="d-flex align-items-center justify-content-start">
              <Link to="" className="avatar"><img src="https://via.placeholder.com/500" className="rounded-circle" alt="" /></Link >
              <div className="aside-alert-link">
                <Link to="" className="new" data-toggle="tooltip" title="You have 2 unread messages"><i data-feather="message-square"></i></Link >
                <Link to="" className="new" data-toggle="tooltip" title="You have 4 new notifications"><i data-feather="bell"></i></Link >
                <Link to="" data-toggle="tooltip" title="Sign out"><i data-feather="log-out"></i></Link >
              </div>
            </div>
            <div className="aside-loggedin-user">
              <Link to="#loggedinMenu" className="d-flex align-items-center justify-content-between mg-b-2" data-toggle="collapse">
                <h6 className="tx-semibold mg-b-0">Katherine Pechon</h6>
                <i data-feather="chevron-down"></i>
              </Link >
              <p className="tx-color-03 tx-12 mg-b-0">Administrator</p>
            </div>
            <div className="collapse" id="loggedinMenu">
              <ul className="nav nav-aside mg-b-0">
                <li className="nav-item"><Link to="" className="nav-link"><i data-feather="edit"></i> <span>Edit Profile</span></Link ></li>
                <li className="nav-item"><Link to="" className="nav-link"><i data-feather="user"></i> <span>View Profile</span></Link ></li>
                <li className="nav-item"><Link to="" className="nav-link"><i data-feather="settings"></i> <span>Account Settings</span></Link ></li>
                <li className="nav-item"><Link to="" className="nav-link"><i data-feather="help-circle"></i> <span>Help Center</span></Link ></li>
                <li className="nav-item"><Link to="" className="nav-link"><i data-feather="log-out"></i> <span>Sign Out</span></Link ></li>
              </ul>
            </div>
          </div>
          <ul className="nav nav-aside">
            <li className="nav-label">Insights</li>
            <li className={active == "analytics" ? "nav-item active" : "nav-item"} onClick={ () => this.setState({active:"analytics"}) }><Link to="/analytics" className="nav-link"><i data-feather="globe"></i> <span>Website Analytics</span></Link ></li>
            <li className={active == "helpdesk" ? "nav-item active" : "nav-item"} onClick={ () => this.setState({active:"helpdesk"}) }><Link to="/helpdesk" className="nav-link"><i data-feather="life-buoy"></i> <span>Helpdesk Management</span></Link ></li>
            <li className="nav-label mg-t-25">Simple Applications</li>
            <li className={active == "contacts" ? "nav-item active" : "nav-item"} onClick={ () => this.setState({active:"contacts"}) }><Link to="/contacts" className="nav-link"><i data-feather="users"></i> <span>Contacts</span></Link ></li>
            <li className={active == "textmessaging" ? "nav-item active" : "nav-item"} onClick={ () => this.setState({active:"textmessaging"}) }><Link to="/textmessaging" params={{ render: "textChat" }} className="nav-link"><i data-feather="message-square"></i> <span>Text Messaging</span></Link ></li>
            <li className={active == "mail" ? "nav-item active" : "nav-item"} onClick={ () => this.setState({active:"mail"}) }><Link to="/mail" className="nav-link"><i data-feather="mail"></i> <span>Mail</span></Link></li>
            <li className={active == "websitechat" ? "nav-item active" : "nav-item"} onClick={ () => this.setState({active:"websitechat"}) }><Link to="/websitechat" params={{ render: "WebsiteChat" }} className="nav-link"><i data-feather="message-square"></i> <span>Website Chat</span></Link ></li>
            <li className={active == "whatsapp" ? "nav-item active" : "nav-item"} onClick={ () => this.setState({active:"whatsapp"}) }><Link to="/whatsapp" params={{ render: "Whatsapp" }} className="nav-link"><i data-feather="message-circle"></i> <span>WhatsApp</span></Link ></li>
            <li className={active == "filemanager" ? "nav-item active" : "nav-item"} onClick={ () => this.setState({active:"filemanager"}) }><Link to="/filemanager" className="nav-link"><i data-feather="file-text"></i> <span>File Manager</span></Link ></li>
            <li className={active == "calendar" ? "nav-item active" : "nav-item"} onClick={ () => this.setState({active:"calendar"}) }><Link to="/calendar" className="nav-link"><i data-feather="calendar"></i> <span>Calendar</span></Link ></li>

            <li className="nav-label mg-t-25">Social Support</li>
            <li className={active == "facebook" ? "nav-item active" : "nav-item"} onClick={ () => this.setState({active:"facebook"}) }><Link to="/facebook" className="nav-link"><i data-feather="facebook"></i> <span>Facebook</span></Link ></li>
            <li className={active == "instagram" ? "nav-item active" : "nav-item"} onClick={ () => this.setState({active:"instagram"}) }><Link to="/instagram" className="nav-link"><i data-feather="instagram"></i> <span>Instagram</span></Link ></li>
            <li className={active == "twitter" ? "nav-item active" : "nav-item"} onClick={ () => this.setState({active:"twitter"}) }><Link to="/twitter" className="nav-link"><i data-feather="twitter"></i> <span>Twitter</span></Link ></li>

            <li className="nav-label mg-t-25">Team Mates</li>
            <li className={active == "teamA" ? "nav-item active" : "nav-item"} onClick={ () => this.setState({active:"teamA"}) }><Link to="/teamA" className="nav-link"><i data-feather="calendar"></i> <span>Team A</span></Link ></li>
            

          </ul>
        </div>
      </aside>
    )
  }
}

export default NavBar