import React, { Component } from 'react'
import { connect } from "react-redux";
import { deleteContact } from './actions'

class DeleteModel extends Component {

    render() {
        return (
            <div class="modal fade effect-scale show" id="modalDeleteContact" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h6 class="modal-title">Delete Contact</h6>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p class="mg-b-0">Do you really want to delete this contact?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" onClick={ this.props.deleteContact }>Continue Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default connect(null, { deleteContact })( DeleteModel );