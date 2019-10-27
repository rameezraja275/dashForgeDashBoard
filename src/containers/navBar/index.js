import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import FeatherIcon from 'feather-icons-react';
import $ from 'jquery';
import jqueryNav from './jqueryNav'
import NavFooter from './navFooter'

const MenuItem = (props) => {
  const { title, active, name } = props;
  const [hover, onHover] = useState(false);
  return (
    <li className={active == name ? "nav-item active" : "nav-item"} onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)}>
      <Link to={name != "helpdesk" ? "/" + name : "/"} className="nav-link">
        {
          active == name ? <img src={"./assets/icons/" + name + ".svg"} className="original-icon" /> :
            hover ? <img src={"./assets/icons/" + name + ".svg"} className="original-icon" /> :
              <img src={"./assets/icons/grey/" + name + ".svg"} className="original-icon" />
        }
        <span>{title}</span>
      </Link >
    </li>
  )
}

class NavBar extends Component {

  state = {
    currenttab: "apps",
    openUserinfo: false
  }

  changeTab = (tab) => {
    this.setState({
      currenttab: tab
    })
  }

  toggleUserInfo = () => {
    const { openUserinfo } = this.state
    console.log(openUserinfo)
    this.setState({
      openUserinfo: !openUserinfo
    })
  }

  componentDidMount = () => {
    $(jqueryNav())
  }

  render() {
    const active = this.props.currentRoute
    let classes = "aside aside-fixed"
    if (window.innerWidth > 800) {
      classes = "aside aside-fixed minimize"
      if (active == "helpdesk" || active == "analytics" || active == "salemonitoring") {
        classes = "aside aside-fixed"
      }
    }

    const { currenttab, openUserinfo } = this.state

    return (
      <aside className={classes}>

        <div className="aside-header" >
          <Link to="/" className="aside-logo">dash<span>forge</span></Link >
          <Link className="aside-menu-link sidebar-toggler">
            <FeatherIcon icon="menu"></FeatherIcon>
            <FeatherIcon icon="x"></FeatherIcon>
          </Link >
          <Link id="mailSidebar" className="burger-menu d-none"><FeatherIcon icon="arrow-left"></FeatherIcon></Link >
        </div>

        <PerfectScrollbar className="aside-body" >
          <div className="aside-loggedin">
            <div className="d-flex align-items-center justify-content-start">
              <Link to="" className="avatar"><img src="https://via.placeholder.com/500" className="rounded-circle" alt="" /></Link >
              <div className="aside-alert-link">
                <Link to="" className="new" data-toggle="tooltip" title="You have 2 unread messages"><FeatherIcon icon="message-square"></FeatherIcon></Link >
                <Link to="" className="new" data-toggle="tooltip" title="You have 4 new notifications"><FeatherIcon icon="bell"></FeatherIcon></Link >
                <Link to="" data-toggle="tooltip" title="Sign out"><FeatherIcon icon="log-out"></FeatherIcon></Link >
              </div>
            </div>
            <div className="aside-loggedin-user" onClick={this.toggleUserInfo}>
              <div className="d-flex align-items-center justify-content-between mg-b-2" data-toggle="collapse">
                <h6 className="tx-semibold mg-b-0">Katherine Pechon</h6>
                <FeatherIcon icon="chevron-down"></FeatherIcon>
              </div >
              <p className="tx-color-03 tx-12 mg-b-0">Administrator</p>
            </div>
            {openUserinfo && <div className="collapse" style={{ display: "block" }}>
              <ul className="nav nav-aside mg-b-0">
                <li className="nav-item"><Link  className="nav-link"><FeatherIcon icon="edit"></FeatherIcon> <span>Edit Profile</span></Link ></li>
                <li className="nav-item"><Link  className="nav-link"><FeatherIcon icon="user"></FeatherIcon> <span>View Profile</span></Link ></li>
                <li className="nav-item"><Link  className="nav-link"><FeatherIcon icon="settings"></FeatherIcon> <span>Account Settings</span></Link ></li>
                <li className="nav-item"><Link className="nav-link"><FeatherIcon icon="help-circle"></FeatherIcon> <span>Help Center</span></Link ></li>
                <li className="nav-item"><Link className="nav-link"><FeatherIcon icon="log-out"></FeatherIcon> <span>Sign Out</span></Link ></li>
              </ul>
            </div>}
          </div>
          <ul className="nav nav-aside">
            {currenttab == "apps" &&
              <React.Fragment>
                <li className="nav-label mg-t-25">Insights</li>
                <MenuItem title="Helpdesk Management" active={active} name="helpdesk" icon="life-buoy" />
                <MenuItem title="Website Analytics" active={active} name="analytics" icon="globe" />
                <MenuItem title="Sale Monitorings" active={active} name="salemonitoring" icon="shopping-bag" />
                <li className="nav-label mg-t-25">Applications</li>
                <MenuItem title="Mail" active={active} name="mail" icon="mail" />
                <MenuItem title="Contacts" active={active} name="contacts" icon="users" />
                <MenuItem title="Calendar" active={active} name="calendar" icon="calendar" />
                <MenuItem title="File Manager" active={active} name="filemanager" icon="file-text" />
                <li className="nav-label mg-t-25">Chats</li>
                <MenuItem title="SMS" active={active} name="textmessaging" icon="message-square" />
                <MenuItem title="WhatsApp" active={active} name="whatsapp" icon="message-circle" />
                <MenuItem title="Facebook" active={active} name="facebook" icon="facebook" />
                <MenuItem title="Instagram" active={active} name="instagram" icon="instagram" />
                <MenuItem title="Twitter" active={active} name="twitter" icon="twitter" />
                <MenuItem title="Chat" active={active} name="websitechat" icon="send" />
                <MenuItem title="Team Discussions" active={active} name="teamdiscussions" icon="hash" />
              </React.Fragment>
            }

            {currenttab == "integartions" &&
              <h2></h2>
            }

            {currenttab == "sequence" &&
              <h2></h2>

            }

            {currenttab == "support" &&
              <h2></h2>
            }

          </ul>
        </PerfectScrollbar>


        <NavFooter changeTab={this.changeTab} currenttab={this.state.currenttab} />

      </aside>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentRoute: state.commonReducer.currentRoute,
  }
}

export default connect(mapStateToProps, null)(NavBar);