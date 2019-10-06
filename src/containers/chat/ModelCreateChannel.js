import React, { Component } from 'react';

class CreateChannel extends Component {

    render() {
        return (
            <div class="modal fade effect-scale" id="modalCreateChannel" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
                    <div class="modal-content">
                        <div class="modal-body pd-20">
                            <button type="button" class="close pos-absolute t-15 r-15" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i data-feather="x" class="wd-20"></i></span>
                            </button>

                            <h6 class="tx-uppercase tx-spacing-1 tx-semibold mg-b-20">Create Channel</h6>
                            <input type="text" class="form-control" placeholder="Channel name" value="" />
                        </div>
                        <div class="modal-footer pd-x-20 pd-b-20 pd-t-0 bd-t-0">
                            <button type="button" class="btn btn-secondary tx-13" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary tx-13">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateChannel;