import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { setModel } from "./action"
import { setToast } from "./action"

class FolderCard extends Component {

    render() {
        const { name, size, totalFiles } = this.props.data
        return (
            <div className="col-sm-6 col-lg-4 col-xl-3 mg-t-10">
            <div className="media media-folder">
                <i data-feather="folder"></i>
                <div className="media-body">
                    <h6><Link to="" className="link-02">{ name }</Link></h6>
                    <span>{ totalFiles } file, { size }</span>
                </div>
                <div className="dropdown-file">
                    <Link to="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></Link>
                    <div className="dropdown-menu dropdown-menu-right">
                            <div onClick={ () => this.props.setModel("modalViewDetails",  this.props.data) } data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</div>
                            <Link to="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</Link>
                            <div onClick={ () => this.props.setModel("modalShare",  this.props.data) } data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</div>
                            <Link onClick={ () => this.props.setToast("Download",  this.props.data) } className="dropdown-item download"><i data-feather="download"></i>Download</Link>
                            <Link onClick={ () => this.props.setModel("Copy",  this.props.data) } data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</Link>
                            <Link onClick={ () => this.props.setModel("Move",  this.props.data) } data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</Link>
                            <Link to="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</Link>
                            <Link to="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</Link>
                        </div>
                </div>
            </div>
        </div>
        )
    }
}

export default connect(null, { setModel, setToast })(FolderCard);