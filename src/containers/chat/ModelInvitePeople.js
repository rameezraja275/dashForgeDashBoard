import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react';

class InvitePeople extends Component {

    render() {
        return (
            <div class="modal fade effect-scale" id="modalInvitePeople" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-body pd-20 pd-sm-30">
                            <button type="button" class="close pos-absolute t-20 r-20" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><FeatherIcon icon="x" class="wd-20"></FeatherIcon></span>
                            </button>

                            <h6 class="tx-18 tx-sm-20 mg-b-5">Invite People</h6>
                            <p class="tx-color-03 mg-b-20">Share this link to your friend to grant access and join to this channel</p>
                            <div class="input-group mg-b-5">
                                <input type="text" class="form-control" value="http://themepixels.me/dashforge" readonly />
                                <div class="input-group-append">
                                    <button class="btn btn-outline-light" type="button" id="button-addon2">Copy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InvitePeople