import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Compose extends Component{

    render(){
        return(
            <div id="mailCompose" className="mail-compose">
            <div className="mail-compose-dialog">
              <div className="mail-compose-header">
                <h6 className="mail-compose-title tx-white">New Message</h6>
                <nav className="nav nav-icon-only">
                  <Link id="mailComposeMinimize" to="" className="nav-link nav-link-minimize d-none d-lg-block">
                    <i data-feather="minus"></i>
                    <i data-feather="square"></i>
                  </Link>
                  <Link id="mailComposeShrink" to="" className="nav-link nav-link-shrink d-none d-lg-block">
                    <i data-feather="minimize-2"></i>
                    <i data-feather="maximize-2"></i>
                  </Link>
                  <Link id="mailComposeClose" to="" className="nav-link nav-link-close"><i data-feather="x"></i></Link>
                </nav>
              </div>
              <div className="mail-compose-body">
                <div className="form-row align-items-center">
                  <div className="col-sm">Recipient:</div>
                  <div className="col-sm-10">
                    <input type="text" className="form-control bd-0 pd-x-0" placeholder="Enter recipient's email address" />
                  </div>
                </div>
                <hr className="mg-y-10" />
                <div className="form-row align-items-center">
                  <div className="col-sm">Subject:</div>
                  <div className="col-sm-10">
                    <input type="text" className="form-control bd-0 pd-x-0" placeholder="Enter subject" />
                  </div>
                </div>
                <div id="editor-container2" className="ht-150 mg-t-15"></div>
                <div className="d-sm-flex align-items-center justify-content-between mg-t-25">
                  <div id="toolbar-container2" className="bd-0-f pd-0-f">
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
                  <div className="tx-13 mg-t-15 mg-sm-t-0">
                    <button className="btn btn-white mg-r-5">Save as Draft</button>
                    <button className="btn btn-primary">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Compose;