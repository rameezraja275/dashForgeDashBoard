import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';

class MailNav extends Component {

  render() {
    return (
      <div className="mail-sidebar">
        <div className="mail-sidebar-body">
          <div className="pd-20">
            <button id="mailComposeBtn" class="btn btn-primary btn-block tx-uppercase tx-10 tx-medium tx-sans tx-spacing-4">Compose</button>
          </div>
          <div className="pd-b-10 pd-x-10">
            <nav className="nav nav-sidebar tx-13">
              <Link to="" className="nav-link active"><FeatherIcon Icon="inbox"></FeatherIcon> <span>Inbox</span> <span className="badge">20</span></Link >
              <Link to="" className="nav-link"><FeatherIcon Icon="monitor"></FeatherIcon> <span>Starred</span> <span className="badge">3</span></Link >
              <Link to="" className="nav-link"><FeatherIcon Icon="clock"></FeatherIcon> <span>Important</span> <span className="badge">10</span></Link >
              <Link to="" className="nav-link"><FeatherIcon Icon="star"></FeatherIcon> <span>Sent Mail</span> <span className="badge">8</span></Link >
              <Link to="" className="nav-link"><FeatherIcon Icon="file"></FeatherIcon> <span>Drafts</span> <span className="badge">15</span></Link >
              <Link to="" className="nav-link"><FeatherIcon Icon="slash"></FeatherIcon> <span>Spam</span> <span className="badge">128</span></Link >
              <Link to="" className="nav-link"><FeatherIcon Icon="trash"></FeatherIcon> <span>Trash</span> <span className="badge">6</span></Link >
            </nav>
          </div>
          <div className="pd-10">
            <label className="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 pd-l-10">Label</label>
            <nav className="nav nav-sidebar tx-13">
              <Link to="" className="nav-link"><FeatherIcon Icon="folder"></FeatherIcon> <span>Social</span></Link >
              <Link to="" className="nav-link"><FeatherIcon Icon="folder"></FeatherIcon> <span>Promotions</span></Link >
              <Link to="" className="nav-link"><FeatherIcon Icon="folder"></FeatherIcon> <span>Updates</span></Link >
              <Link to="" className="nav-link"><FeatherIcon Icon="folder"></FeatherIcon> <span>Business</span></Link >
              <Link to="" className="nav-link"><FeatherIcon Icon="folder"></FeatherIcon> <span>Finance</span></Link >
            </nav>
          </div>

          <div className="pd-y-15 pd-x-10">
            <label className="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 pd-l-10">Tags</label>
            <nav className="nav nav-sidebar tx-13">
              <Link to="" className="nav-link"><FeatherIcon Icon="tag"></FeatherIcon> <span>Facebook</span></Link >
              <Link to="" className="nav-link"><FeatherIcon Icon="tag"></FeatherIcon> <span>Twitter</span></Link >
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

export default MailNav;