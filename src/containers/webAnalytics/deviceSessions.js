import React, { Component } from 'react'
import { df1, df2, df3 } from './sampledata'


class DeviceSessions extends Component {

    state = {
        Sessions : [
            {
                title : "Mobile",
                totalSession : 6098
            },
            {
                title : "Desktop",
                totalSession : 3490
            },
            {
                title : "Other",
                totalSession : 1243
            }
        ]
    }

    componentDidMount = () => {
        window.$.plot('#flotChart2', [{
            data: df2,
            color: '#66a4fb',
            lines: {
                show: true,
                lineWidth: 1.5,
                fill: .03
            }
        }, {
            data: df1,
            color: '#00cccc',
            lines: {
                show: true,
                lineWidth: 1.5,
                fill: true,
                fillColor: '#fff'
            }
        }, {
            data: df3,
            color: '#e3e7ed',
            bars: {
                show: true,
                lineWidth: 0,
                barWidth: .5,
                fill: 1
            }
        }], {
            series: {
                shadowSize: 0
            },
            grid: {
                aboveData: true,
                color: '#e5e9f2',
                borderWidth: {
                    top: 0,
                    right: 1,
                    bottom: 1,
                    left: 1
                },
                labelMargin: 0
            },
            yaxis: {
                show: false,
                min: 0,
                max: 100
            },
            xaxis: {
                show: true,
                min: 40,
                max: 80,
                ticks: 6,
                tickColor: 'rgba(0,0,0,0.04)'
            }
        });
    }

    render() {
        const { Sessions } = this.state
        return (
            <div class="col-sm-7 col-md-8 col-lg-4 col-xl mg-t-10">
                <div class="card">
                    <div class="card-header">
                        <h6 class="mg-b-0">Device Sessions</h6>
                    </div>
                    <div class="card-body">
                        <div class="row row-xs">
                            {
                                Sessions.map((Session) => (
                                    <div class="col-4 col-lg">
                                        <div class="d-flex align-items-baseline">
                                            <span class="d-block wd-8 ht-8 rounded-circle bg-primary"></span>
                                            <span class="d-block tx-10 tx-uppercase tx-medium tx-spacing-1 tx-color-03 mg-l-7">{Session.title}</span>
                                        </div>
                                        <h4 class="tx-normal tx-rubik tx-spacing--1 mg-l-15 mg-b-0">{Session.totalSession}</h4>
                                    </div>
                                ))
                            }
                        </div>

                        <div class="chart-nine">
                            <div id="flotChart2" class="flot-chart"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeviceSessions;