import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { setModel } from "./action"
import { setToast } from "./action"

class FileCard extends Component {

    render() {
        const { name, size, accessedDate, format } = this.props.data
        const { recentAccess } = this.props
        return (
            <div className="col-6 col-sm-4 col-md-3 col-xl mg-t-10 mg-xl-t-0">
                <div className="card card-file">
                    <div className="dropdown-file">
                        <Link to="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></Link>
                        <div className="dropdown-menu dropdown-menu-right">
                            <div onClick={ () => this.props.setModel("modalViewDetails",  this.props.data) } data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</div>
                            {/* <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a> */}
                            <Link to="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</Link>
                            <div onClick={ () => this.props.setModel("modalShare",  this.props.data) } data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</div>
                            <Link onClick={ () => this.props.setToast("Download",  this.props.data) } className="dropdown-item download"><i data-feather="download"></i>Download</Link>
                            <Link onClick={ () => this.props.setModel("Copy",  this.props.data) } data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</Link>
                            <Link onClick={ () => this.props.setModel("Move",  this.props.data) } data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</Link>
                            <Link to="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</Link>
                            <Link to="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</Link>
                        </div>
                    </div>
                    <div className="card-file-thumb tx-primary">
                        <i className={"far fa-file-" + format}></i>
                    </div>
                    {
                        recentAccess ? 
                        <div className="card-body">
                            <h6><Link to="" className="link-02">{name}</Link></h6>
                            <span>{size}</span>
                            <div className="card-footer"><span className="d-none d-sm-inline">Last accessed: </span>{accessedDate} </div>
                        </div> : 
                        <div className="card-body">
                            <h6><Link to="" className="link-02">{name}</Link></h6>
                            <p>{format} File</p>
                            <span>{size}</span>
                        </div>
                    }

                    
                </div>
            </div>
        )
    }
}


export default connect(null, { setModel, setToast })(FileCard);