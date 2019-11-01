import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import FeatherIcon from 'feather-icons-react';
import $ from 'jquery';
import jqueryNav from './jqueryNav'
import NavFooter from './navFooter'

const MenuItem = (props) => {
  const { title, active, name, darkMode } = props;
  const [hover, onHover] = useState(false);
  return (
    <li className={active == name ? "nav-item active" : "nav-item"} onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)}>
      <Link to={name != "helpdesk" ? "/" + name : "/"} className="nav-link">
        {
          active == name ? <img src={"./assets/icons/" + name + ".svg"} className="original-icon" /> :
            hover ? <img src={"./assets/icons/" + name + ".svg"} className="original-icon" /> :
            darkMode ? <img src={"./assets/icons/" + name + "-light.svg"} className="original-icon" /> :
              <img src={"./assets/icons/" + name + "-dark.svg"} className="original-icon" />
        }
        <span>{title}</span>
      </Link >
    </li>
  )
}

class NavBar extends Component {

  state = {
    currenttab: "apps",
    // openUserinfo: false
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
    
    let classes = "aside aside-fixed"
    if (window.innerWidth > 800) {
      classes = "aside aside-fixed minimize"
      if (active == "helpdesk" || active == "analytics" || active == "salemonitoring") {
        classes = "aside aside-fixed"
      }
    }
    const { darkMode  } = this.props;
    const { currenttab, openUserinfo } = this.state
    // console.log("yai hai tab", currenttab);
    // if( active == "personalinformation" || active == "security" || active == "applicationsettings" || active == "notificationsettings" ){
    //   if( currenttab != "settings" )
    //     this.changeTab('settings')
    // }else{
    //   if( currenttab != "apps" )
    //     this.changeTab('apps')
    // }
    return (
      <aside className={classes}>

        <div className="aside-header" >
          <Link to="/" className="aside-logo">dash<span>forge</span></Link >
          <Link className="aside-menu-link sidebar-toggler">
            <FeatherIcon icon="menu"></FeatherIcon>
            <FeatherIcon icon="x"></FeatherIcon>
          </Link >
          <Link id="mailSidebar" className="burger-menu d-none">
            <FeatherIcon icon="arrow-left"></FeatherIcon>
          </Link >
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
            <div className="aside-loggedin-user" /*onClick={this.toggleUserInfo}*/>
              <div className="d-flex align-items-center justify-content-between mg-b-2" data-toggle="collapse">
                <h6 className="tx-semibold mg-b-0">Katherine Pechon</h6>
                <div onClick={ () => this.changeTab("settings") }>
                  <FeatherIcon icon="settings"></FeatherIcon>
                </div>
                
              </div >
              <p className="tx-color-03 tx-12 mg-b-0">Administrator</p>
            </div>
            {/* {openUserinfo && <div className="collapse" style={{ display: "block" }}>
              <ul className="nav nav-aside mg-b-0">
                <li className="nav-item"><Link  className="nav-link"><FeatherIcon icon="edit"></FeatherIcon> <span>Edit Profile</span></Link ></li>
                <li className="nav-item"><Link  className="nav-link"><FeatherIcon icon="user"></FeatherIcon> <span>View Profile</span></Link ></li>
                <li className="nav-item"><Link  className="nav-link"><FeatherIcon icon="settings"></FeatherIcon> <span>Account Settings</span></Link ></li>
                <li className="nav-item"><Link className="nav-link"><FeatherIcon icon="help-circle"></FeatherIcon> <span>Help Center</span></Link ></li>
                <li className="nav-item"><Link className="nav-link"><FeatherIcon icon="log-out"></FeatherIcon> <span>Sign Out</span></Link ></li>
              </ul>
            </div>} */}
          </div>
          <ul className="nav nav-aside">
            {currenttab == "apps" &&
              <React.Fragment>
                <li className="nav-label mg-t-25">Insights</li>
                <MenuItem title="Helpdesk Management" active={active} name="helpdesk" darkMode={darkMode} />
                <MenuItem title="Website Analytics" active={active} name="analytics" darkMode={darkMode} />
                <MenuItem title="Sale Monitorings" active={active} name="salemonitoring" darkMode={darkMode} />
                <li className="nav-label mg-t-25">Applications</li>
                <MenuItem title="Mail" active={active} name="mail" darkMode={darkMode} />
                <MenuItem title="Contacts" active={active} name="contacts" darkMode={darkMode} />
                <MenuItem title="Calendar" active={active} name="calendar" darkMode={darkMode} />
                <MenuItem title="Cloud Storage" active={active} name="cloud" darkMode={darkMode}/>
                <li className="nav-label mg-t-25">Chats</li>
                <MenuItem title="SMS" active={active} name="textmessaging" darkMode={darkMode} />
                <MenuItem title="WhatsApp" active={active} name="whatsapp" darkMode={darkMode} />
                <MenuItem title="Facebook" active={active} name="facebook" darkMode={darkMode} />
                <MenuItem title="Instagram" active={active} name="instagram" darkMode={darkMode} />
                <MenuItem title="Twitter" active={active} name="twitter" darkMode={darkMode} />
                <MenuItem title="Chat" active={active} name="websitechat" darkMode={darkMode} />
                <MenuItem title="Team Discussions" active={active} name="teamdiscussions" darkMode={darkMode} />
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

            {currenttab == "settings" &&
                <React.Fragment>
                  <li className="nav-label mg-t-25">Settings</li>
                  <MenuItem title="Personal Information" active={active} name="personalinformation" darkMode={darkMode} />
                  <MenuItem title="Security" active={active} name="security" darkMode={darkMode} />
                  <MenuItem title="Application Settings" active={active} name="applicationsettings" darkMode={darkMode} />
                  <MenuItem title="Notification Settings" active={active} name="notificationsettings" darkMode={darkMode} />
                </React.Fragment>
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
    darkMode: state.commonReducer.darkMode
  }
}

export default connect(mapStateToProps, null)(NavBar);