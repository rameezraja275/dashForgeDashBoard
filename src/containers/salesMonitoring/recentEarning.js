import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react';

const DownlaodCSV = () => {

    return <div class="card card-body ht-lg-100">
        <div class="media">
            <span class="tx-color-04"><FeatherIcon icon="download" class="wd-60 ht-60"></FeatherIcon></span>
            <div class="media-body mg-l-20">
                <h6 class="mg-b-10">Download your earnings in CSV format.</h6>
                <p class="tx-color-03 mg-b-0">Open it in a spreadsheet and perform your own calculations, graphing etc.</p>
            </div>
        </div>
    </div>
}

const TableRow = (props) => {
    const { date, saleCount, grossEarning, taxWithHeld, netEarning, change } = props
    let color, arrow = ""
    change < 0 ? color = "tx-danger" : color = "tx-success"
    change < 0 ? arrow = "down" : arrow = "up"
    return (
        <tr>
            <td class="tx-color-03 tx-normal">{date}</td>
            <td class="tx-medium text-right">{saleCount}</td>
            <td class="text-right tx-teal">+ ${grossEarning}</td>
            <td class="text-right tx-pink">- ${taxWithHeld}</td>
            <td class="tx-medium text-right">${netEarning} <span class={"mg-l-5 tx-10 tx-normal " + color}><i class={"icon ion-md-arrow-" + arrow}></i> {change}%</span></td>
        </tr>
    )
}

const EarningInfo = (props) => {
    const { title, earnings , index } = props
    let classes = ""
    index === 0 ? classes = "media" : classes = "media mg-t-20 mg-sm-t-0 mg-sm-l-15 mg-md-l-40"
    return (
        <div class={classes}>
            <div class="wd-40 wd-md-50 ht-40 ht-md-50 bg-teal tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded op-6">
                <FeatherIcon icon="bar-chart-2"></FeatherIcon>
            </div>
            <div class="media-body">
                <h6 class="tx-sans tx-uppercase tx-10 tx-spacing-1 tx-color-03 tx-semibold mg-b-5 mg-md-b-8">{title}</h6>
                <h4 class="tx-20 tx-sm-18 tx-md-20 tx-normal tx-rubik mg-b-0">${earnings}</h4>
            </div>
        </div>
    )
}

class RecentEarning extends Component {

    render() {
        return (
            <div class="col-lg-12 col-xl-8 mg-t-10">
                <div class="card mg-b-10">
                    <div class="card-header pd-t-20 d-sm-flex align-items-start justify-content-between bd-b-0 pd-b-0">
                        <div>
                            <h6 class="mg-b-5">Your Most Recent Earnings</h6>
                            <p class="tx-13 tx-color-03 mg-b-0">Your sales and referral earnings over the last 30 days</p>
                        </div>
                        <div class="d-flex mg-t-20 mg-sm-t-0">
                            <div class="btn-group flex-fill">
                                <button class="btn btn-white btn-xs active">Range</button>
                                <button class="btn btn-white btn-xs">Period</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body pd-y-30">
                        <div class="d-sm-flex">
                            <EarningInfo title="Gross Earnings" earnings={12231434} index={0}/>
                            <EarningInfo title="Tax Withdraw" earnings={12231434} index={1}/>
                            <EarningInfo title="Net Earnings" earnings={12231434} index={2}/>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-dashboard mg-b-0">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th class="text-right">Sales Count</th>
                                    <th class="text-right">Gross Earnings</th>
                                    <th class="text-right">Tax Withheld</th>
                                    <th class="text-right">Net Earnings</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow date="02/05/2018" change={4.5} saleCount={1234} grossEarning={12343} taxWithHeld={43243} netEarning={4543534} />
                                <TableRow date="02/05/2018" change={-4.5} saleCount={1234} grossEarning={12343} taxWithHeld={43243} netEarning={4543534} />
                                <TableRow date="02/05/2018" change={4.5} saleCount={1234} grossEarning={12343} taxWithHeld={43243} netEarning={4543534} />
                                <TableRow date="02/05/2018" change={-4.5} saleCount={1234} grossEarning={12343} taxWithHeld={43243} netEarning={4543534} />
                            </tbody>
                        </table>
                    </div>
                </div>

                <DownlaodCSV />
            </div>
        )
    }
}

export default RecentEarning