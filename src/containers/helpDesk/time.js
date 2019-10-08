import React, { Component } from 'react'
import $ from "jquery"
import { df3 } from './sampledata'
import peity from 'peity'

class Time extends Component {

    componentDidMount() {
        $(function() {
            // $('.peity-donut').peity('donut')
        }
        )
    }

    render() {
        const { title, description, time, totalTime, achieved } = this.props
        return (
            <div className="col-12 col-md-6 col-lg-12">
                <div className="card card-body">
                    <div className="media d-block d-sm-flex align-items-center">
                        <div className="d-inline-block pos-relative">
                            <span className="peity-donut" data-peity='{ "fill": ["#65e0e0","#e5e9f2"], "height": 110, "width": 110, "innerRadius": 46 }'>70,30</span>

                            <div className="pos-absolute a-0 d-flex flex-column align-items-center justify-content-center">
                                <h3 className="tx-rubik tx-spacing--1 mg-b-0">{achieved}</h3>
                                <span className="tx-9 tx-semibold tx-sans tx-color-03 tx-uppercase">Reached</span>
                            </div>
                        </div>
                        <div className="media-body mg-t-20 mg-sm-t-0 mg-sm-l-20">
                            <h6 className="mg-b-5">{title}</h6>
                            <p className="lh-4 tx-12 tx-color-03 mg-b-15">{description}</p>
                            <h3 className="tx-spacing--1 mg-b-0">{time} <small className="tx-13 tx-color-03">/ Goal: {totalTime}</small></h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Time