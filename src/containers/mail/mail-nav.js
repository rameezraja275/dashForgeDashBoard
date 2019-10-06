import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MailNav extends Component{
    render(){
        return(
            <div className="mail-sidebar">
          <div className="mail-sidebar-body">
            <div className="pd-20">
            <button id="mailComposeBtn" class="btn btn-primary btn-block tx-uppercase tx-10 tx-medium tx-sans tx-spacing-4">Compose</button>
            </div>
            <div className="pd-b-10 pd-x-10">
              <nav className="nav nav-sidebar tx-13">
                <Link to="" className="nav-link active"><i data-feather="inbox"></i> <span>Inbox</span> <span className="badge">20</span></Link >
                <Link to="" className="nav-link"><i data-feather="monitor"></i> <span>Starred</span> <span className="badge">3</span></Link >
                <Link to="" className="nav-link"><i data-feather="clock"></i> <span>Important</span> <span className="badge">10</span></Link >
                <Link to="" className="nav-link"><i data-feather="star"></i> <span>Sent Mail</span> <span className="badge">8</span></Link >
                <Link to="" className="nav-link"><i data-feather="file"></i> <span>Drafts</span> <span className="badge">15</span></Link >
                <Link to="" className="nav-link"><i data-feather="slash"></i> <span>Spam</span> <span className="badge">128</span></Link >
                <Link to="" className="nav-link"><i data-feather="trash"></i> <span>Trash</span> <span className="badge">6</span></Link >
              </nav>
            </div>
            <div className="pd-10">
              <label className="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 pd-l-10">Label</label>
              <nav className="nav nav-sidebar tx-13">
                <Link to="" className="nav-link"><i data-feather="folder"></i> <span>Social</span></Link >
                <Link to="" className="nav-link"><i data-feather="folder"></i> <span>Promotions</span></Link >
                <Link to="" className="nav-link"><i data-feather="folder"></i> <span>Updates</span></Link >
                <Link to="" className="nav-link"><i data-feather="folder"></i> <span>Business</span></Link >
                <Link to="" className="nav-link"><i data-feather="folder"></i> <span>Finance</span></Link >
              </nav>
            </div>

            <div className="pd-y-15 pd-x-10">
              <label className="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 pd-l-10">Tags</label>
              <nav className="nav nav-sidebar tx-13">
                <Link to="" className="nav-link"><i data-feather="tag"></i> <span>Facebook</span></Link >
                <Link to="" className="nav-link"><i data-feather="tag"></i> <span>Twitter</span></Link >
              </nav>
            </div>
          </div>
        </div>
        )
    }
}

export default MailNav;