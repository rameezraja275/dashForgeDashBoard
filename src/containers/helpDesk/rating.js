import React, { Component } from 'react'

const RatingBar = () => {

    return (
        <div class="list-group-item pd-y-5 pd-x-20 d-flex align-items-center">
            <strong class="tx-12 tx-rubik">5.0</strong>
            <div class="tx-16 mg-l-10">
                <i class="icon ion-md-star lh-0 tx-orange"></i>
                <i class="icon ion-md-star lh-0 tx-orange"></i>
                <i class="icon ion-md-star lh-0 tx-orange"></i>
                <i class="icon ion-md-star lh-0 tx-orange"></i>
                <i class="icon ion-md-star lh-0 tx-orange"></i>
            </div>
            <div class="mg-l-auto tx-rubik tx-color-02">4,230</div>
            <div class="mg-l-20 tx-rubik tx-color-03 wd-10p text-right">58%</div>
        </div>
    )
}

class Ratings extends Component {

    render() {

        return (
            <div class="col-12 col-md-6 col-lg-12 mg-t-10">
                <div class="card">
                    <div class="card-header pd-t-20 pd-b-0 bd-b-0">
                        <h6 class="lh-5 mg-b-5">Overall Rating</h6>
                        <p class="tx-12 tx-color-03 mg-b-0">Measures the quality or your support team’s efforts.</p>
                    </div>
                    <div class="card-body pd-0">
                        <div class="pd-t-10 pd-b-15 pd-x-20 d-flex align-items-baseline">
                            <h1 class="tx-normal tx-rubik mg-b-0 mg-r-5">4.2</h1>
                            <div class="tx-18">
                                <i class="icon ion-md-star lh-0 tx-orange"></i>
                                <i class="icon ion-md-star lh-0 tx-orange"></i>
                                <i class="icon ion-md-star lh-0 tx-orange"></i>
                                <i class="icon ion-md-star lh-0 tx-orange"></i>
                                <i class="icon ion-md-star lh-0 tx-gray-300"></i>
                            </div>
                        </div>
                        <div class="list-group list-group-flush tx-13">
                            <RatingBar />
                            <RatingBar />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ratings;