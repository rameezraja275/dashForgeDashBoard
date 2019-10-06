import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component{

    render(){
        return(
            <div className="filemgr-sidebar">
                    <div className="filemgr-sidebar-header">
                        <div className="dropdown dropdown-icon flex-fill">
                            <button className="btn btn-xs btn-block btn-white" data-toggle="dropdown">New <i data-feather="chevron-down"></i></button>
                            <div className="dropdown-menu tx-13">
                                <Link to="" className="dropdown-item"><i data-feather="folder"></i><span>Folder</span></Link>
                                <Link to="" className="dropdown-item"><i data-feather="file"></i><span>Notes</span></Link>
                                <div className="dropdown-divider"></div>
                                <Link to="" className="dropdown-item"><i data-feather="file-text"></i><span>Word Document</span></Link>
                                <Link to="" className="dropdown-item"><i data-feather="file-text"></i><span>Powepoint</span></Link>
                                <Link to="" className="dropdown-item"><i data-feather="file-text"></i><span>Excel Spreadsheet</span></Link>
                            </div>
                        </div>
                        <div className="dropdown dropdown-icon flex-fill mg-l-10">
                            <button className="btn btn-xs btn-block btn-primary" data-toggle="dropdown">Upload <i data-feather="chevron-down"></i></button>
                            <div className="dropdown-menu tx-13">
                                <Link to="" className="dropdown-item"><i data-feather="file"></i><span>File</span></Link>
                                <Link to="" className="dropdown-item"><i data-feather="folder"></i><span>Folder</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="filemgr-sidebar-body">
                        <div className="pd-t-20 pd-b-10 pd-x-10">
                            <label className="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 pd-l-10">My Drive</label>
                            <nav className="nav nav-sidebar tx-13">
                                <Link to="" className="nav-link active"><i data-feather="folder"></i> <span>All Files</span></Link>
                                <Link to="" className="nav-link"><i data-feather="monitor"></i> <span>My Devices</span></Link>
                                <Link to="" className="nav-link"><i data-feather="clock"></i> <span>Recents</span></Link>
                                <Link to="" className="nav-link"><i data-feather="star"></i> <span>Important</span></Link>
                                <Link to="" className="nav-link"><i data-feather="trash"></i> <span>Deleted Files</span></Link>
                            </nav>
                        </div>
                        <div className="pd-10">
                            <label className="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 pd-l-10">File Library</label>
                            <nav className="nav nav-sidebar tx-13">
                                <Link to="" className="nav-link"><i data-feather="file"></i> <span>Documents</span></Link>
                                <Link to="" className="nav-link"><i data-feather="image"></i> <span>Images</span></Link>
                                <Link to="" className="nav-link"><i data-feather="video"></i> <span>Videos</span></Link>
                                <Link to="" className="nav-link"><i data-feather="music"></i> <span>Audio</span></Link>
                                <Link to="" className="nav-link"><i data-feather="package"></i> <span>Zip Files</span></Link>
                            </nav>
                        </div>
                        <div className="pd-y-10 pd-x-20">
                            <label className="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 mg-b-15">Storage Status</label>

                            <div className="media">
                                <i data-feather="database" className="wd-30 ht-30"></i>
                                <div className="media-body mg-l-10">
                                    <div className="tx-12 mg-b-4">10.2GB used of 50GB</div>
                                    <div className="progress ht-3 mg-b-20">
                                        <div className="progress-bar wd-15p" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <p className="tx-12">Get 2TB (2,000GB) of storage now and get 40% off. Offers ends soon. <Link to="">Learn more</Link></p>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Nav