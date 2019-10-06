import React, { Component } from 'react'

class Export extends Component {

    render() {
        return (
            <div id="tabExport" className="tab-pane fade">
                <div className="pd-y-25 pd-x-20">
                    <h6 className="tx-12 tx-semibold tx-spacing-1 tx-uppercase">Export Contacts</h6>
                    <p className="tx-13 tx-color-03 mg-b-20">You can export your contacts and import them into other email apps.</p>
                    <div className="form-group">
                        <label className="tx-13">Which contacts do you want to export?</label>
                        <select className="custom-select tx-13">
                            <option value="1" selected>All Contacts</option>
                            <option value="2">My Favorites</option>
                            <option value="3">My Family</option>
                            <option value="4">My Friends</option>
                            <option value="4">My Officemates</option>
                        </select>
                    </div>
                    <button className="btn btn-sm btn-primary">Export</button>
                </div>
            </div>
        )
    }
}

export default Export;