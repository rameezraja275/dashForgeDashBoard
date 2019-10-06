import React, { Component } from 'react'
import { connect } from "react-redux";
import { setToast } from "./action"

class Download extends Component {

    render() {
        const fileDetails = this.props.fileDetails
        const toastName = this.props.toastName
        
        if ( toastName == "Download") {
        return (
            <div id="toast" className="toast bg-dark bd-0 wd-300" data-delay="3000" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header bg-transparent bd-white-1">
                    <h6 className="tx-white mg-b-0 mg-r-auto">Downloading</h6>
                    <button type="button" className="ml-2 mb-1 close tx-normal tx-shadow-none" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body pd-10 tx-white">
                    <h6 className="mg-b-0">{fileDetails.fileName}</h6>
                    <span className="tx-color-03 tx-11">{"0.5mb of " + fileDetails.fileSize}</span>
                    <div className="progress ht-5 mg-t-5">
                        <div className="progress-bar wd-50p" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        )}
        return <React.Fragment></React.Fragment>
    }
} 

const mapStateToProps = (state) => {
    return {
        fileDetails: state.file.toastData,
        toastName: state.file.toastName
    }
}

export default connect(mapStateToProps, { setToast })( Download);