import React, { Component } from 'react'

class Visits extends Component {

    render() {
        const { title } = this.props
        return (
            <div class="col-lg-6 mg-t-10">
                <div class="card">
                    <div class="card-header d-flex align-items-start justify-content-between">
                        <h6 class="lh-5 mg-b-0">{title}</h6>
                        <a href="" class="tx-13 link-03">Mar 01 - Mar 20, 2019 <i class="icon ion-ios-arrow-down"></i></a>
                    </div>
                    <div class="card-body pd-y-15 pd-x-10">
                        <div class="table-responsive">
                            { this.props.children }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Visits