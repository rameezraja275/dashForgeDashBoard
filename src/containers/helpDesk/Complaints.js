import React, { Component } from 'react'
import $ from 'jquery'
import { df3 } from './sampledata'

class Complaints extends Component {

    componentDidMount() {
        window.$.plot('#flotChart2', [{
            data: df3,
            color: '#0168fa',
            curvedLines: { apply: true }
        }], {
            series: {
                shadowSize: 0,
                lines: {
                    show: true,
                    lineWidth: 1.5,
                    fill: .05
                }
            },
            grid: {
                borderWidth: 0,
                labelMargin: 0
            },
            yaxis: {
                show: false,
                max: 55
            },
            xaxis: {
                show: true,
                color: 'rgba(131,146,165,.08)',
                min: 48,
                max: 102,
                tickSize: 5
            }
        });

    }

    render() {

        return (
            <div class="col-12 col-md-6 col-lg-12 mg-t-10">
                <div class="card">
                    <div class="card-header pd-t-20 pd-b-0 bd-b-0 d-flex justify-content-between">
                        <h6 class="lh-5 mg-b-0">Complaints Received</h6>
                        <a href="" class="tx-13 link-03">This Month <i class="icon ion-ios-arrow-down tx-12"></i></a>
                    </div>
                    <div class="card-body pd-0 pos-relative">
                        <div class="pos-absolute t-10 l-20 z-index-10">
                            <div class="d-flex align-items-baseline">
                                <h1 class="tx-normal tx-rubik mg-b-0 mg-r-5">165</h1>
                                <p class="tx-11 tx-color-03 mg-b-0"><span class="tx-medium tx-success">0.3% <i class="icon ion-md-arrow-down"></i></span> than last month</p>
                            </div>
                            <p class="tx-12 tx-color-03 wd-60p">The total number of complaints that have been received.</p>
                        </div>

                        <div class="chart-sixteen">
                            <div id="flotChart2" class="flot-chart"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Complaints;