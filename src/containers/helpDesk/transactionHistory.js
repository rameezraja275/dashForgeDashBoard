import React, { Component } from 'react'

const Transaction = () => {
    return (
        <li class="list-group-item d-flex pd-sm-x-20">
            <div class="avatar d-none d-sm-block"><span class="avatar-initial rounded-circle bg-indigo op-5"><i class="icon ion-md-return-left"></i></span></div>
            <div class="pd-sm-l-10">
                <p class="tx-medium mg-b-2">Process refund to #00910</p>
                <small class="tx-12 tx-color-03 mg-b-0">Mar 21, 2019, 1:00pm</small>
            </div>
            <div class="mg-l-auto text-right">
                <p class="tx-medium mg-b-2">-$16.50</p>
                <small class="tx-12 tx-success mg-b-0">Completed</small>
            </div>
        </li>
    )
}

class Transactions extends Component {

    render() {

        return (
            <div class="col-12 col-md-6 col-lg-12 mg-t-10">
                <div class="card">
                    <div class="card-header d-flex align-items-center justify-content-between">
                        <h6 class="mg-b-0">Transaction History</h6>
                        <div class="d-flex tx-18">
                            <a href="" class="link-03 lh-0"><i class="icon ion-md-refresh"></i></a>
                            <a href="" class="link-03 lh-0 mg-l-10"><i class="icon ion-md-more"></i></a>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush tx-13">
                        <Transaction />
                        <Transaction />
                    </ul>
                    <div class="card-footer text-center tx-13">
                        <a href="" class="link-03">View All Transactions <i class="icon ion-md-arrow-down mg-l-5"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Transactions