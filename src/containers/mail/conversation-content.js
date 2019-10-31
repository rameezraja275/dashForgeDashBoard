import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';
import PerfectScrollbar from 'react-perfect-scrollbar'

class Conversation extends Component {

  render() {
    return (
      <div className="mail-content">
        <div className="mail-content-header d-none">
          <Link to="" id="mailContentClose" className="link-02 d-none d-lg-block d-xl-none mg-r-20"><FeatherIcon icon="arrow-left"></FeatherIcon></Link>
          <div className="media">
            <div className="avatar avatar-sm"><img src="../https://via.placeholder.com/600" className="rounded-circle" alt="" /></div>
            <div className="media-body mg-l-10">
              <h6 className="mg-b-2 tx-13">Reynante Labares</h6>
              <span className="d-block tx-11 tx-color-03">Today, 11:40am</span>
            </div>
          </div>
          <nav className="nav nav-icon-only mg-l-auto">
            <Link to="" data-toggle="tooltip" title="Archive" className="nav-link d-none d-sm-block"><FeatherIcon icon="archive"></FeatherIcon></Link>
            <Link to="" data-toggle="tooltip" title="Report Spam" className="nav-link d-none d-sm-block"><FeatherIcon icon="slash"></FeatherIcon></Link>
            <Link to="" data-toggle="tooltip" title="Mark Unread" className="nav-link d-none d-sm-block"><FeatherIcon icon="mail"></FeatherIcon></Link>
            <Link to="" data-toggle="tooltip" title="Add Label" className="nav-link d-none d-sm-block"><FeatherIcon icon="folder"></FeatherIcon></Link>
            <Link to="" data-toggle="tooltip" title="Add Tag" className="nav-link d-none d-sm-block"><FeatherIcon icon="tag"></FeatherIcon></Link>
            <span className="nav-divider d-none d-sm-block"></span>
            <Link to="" data-toggle="tooltip" title="Mark Important" className="nav-link d-none d-sm-block"><FeatherIcon icon="star"></FeatherIcon></Link>
            <Link to="" data-toggle="tooltip" title="Trash" className="nav-link d-none d-sm-block"><FeatherIcon icon="trash"></FeatherIcon></Link>
            <Link to="" data-toggle="tooltip" title="Print" className="nav-link d-none d-sm-block"><FeatherIcon icon="printer"></FeatherIcon></Link>
            <Link to="" data-toggle="tooltip" title="Options" className="nav-link d-sm-none"><FeatherIcon icon="more-vertical"></FeatherIcon></Link>
          </nav>
        </div>
        <PerfectScrollbar className="mail-content-body d-none">
          <div className="pd-20 pd-lg-25 pd-xl-30">
            <h5 className="mg-b-30">30 Seconds Survey to Your Next Job</h5>

            <h6 className="tx-semibold mg-b-0">Ms. Katherine Lumaad</h6>
            <span className="tx-color-03">ThemePixels, Inc.</span>
            <p className="tx-color-03">San Francisco, CA, United States</p>

            <p>Greetings!</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
            <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. </p>
            <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem.</p>
            <p>
              <span>Sincerely yours,</span><br />
              <strong>Envato Design Team</strong>
            </p>
          </div>
          <div className="pd-20 pd-lg-25 pd-xl-30 pd-t-0-f">
            <div id="editor-container" className="tx-13 tx-lg-14 ht-100">
              Type here to <u>Reply</u> or <u>Forward</u>
            </div>
            <div className="d-flex align-items-center justify-content-between mg-t-10">
              <div id="toolbar-container" className="bd-0-f pd-0-f">
                <span className="ql-formats">
                  <button className="ql-bold"></button>
                  <button className="ql-italic"></button>
                  <button className="ql-underline"></button>
                </span>
                <span className="ql-formats">
                  <button className="ql-link"></button>
                  <button className="ql-image"></button>
                </span>
              </div>
              <button className="btn btn-primary">Reply</button>
            </div>
          </div>
        </PerfectScrollbar >
      </div>
    )
  }
}

export default Conversation;