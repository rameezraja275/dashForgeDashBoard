import React, { Component } from 'react'

const Performance = (props) => {
    const { title, total, percentage, badge } = props
    return (
        <tr>
            <td><div class={"wd-12 ht-12 rounded-circle bd bd-3 bd-" + badge}></div></td>
            <td class="tx-medium">{title}</td>
            <td class="text-right">{total}</td>
            <td class="text-right">{percentage}</td>
        </tr>
    )
}

const ProgressBar = (props) => {
    const { badge, value } = props
    return(
        <div class={"progress-bar bg-" + badge + " wd-50p"} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"></div>
    )
} 

class CustomerSatisfaction extends Component {


    render() {
        return (
            <div class="col-md-5 mg-t-10 mg-md-t-0">
                <div class="card">
                    <div class="card-header pd-b-0 pd-t-20 bd-b-0">
                        <h6 class="mg-b-0">Customer Satisfaction</h6>
                    </div>
                    <div class="card-body pd-y-10">
                        <div class="d-flex align-items-baseline tx-rubik">
                            <h1 class="tx-40 lh-1 tx-normal tx-spacing--2 mg-b-5 mg-r-5">9.8</h1>
                            <p class="tx-11 tx-color-03 mg-b-0"><span class="tx-medium tx-success">1.6% <i class="icon ion-md-arrow-up"></i></span></p>
                        </div>
                        <h6 class="tx-uppercase tx-spacing-1 tx-semibold tx-10 tx-color-02 mg-b-15">Performance Score</h6>

                        <div class="progress bg-transparent op-7 ht-10 mg-b-15">
                            <ProgressBar badge="primary" value={30} />
                            <ProgressBar badge="success" value={15} />
                            <ProgressBar badge="warning" value={5} />
                            <ProgressBar badge="pink" value={5} />
                            <ProgressBar badge="teal" value={10} />
                            <ProgressBar badge="purple" value={20} />
                        </div>

                        <table class="table-dashboard-two">
                            <tbody>
                                <Performance title="Excellent" total={3007} percentage="50%" badge="primary"/>
                                <Performance title="Very Good" total={1679} percentage="25%" badge="success"/>  
                                <Performance title="Good" total={124} percentage="6%" badge="warning"/> 
                                <Performance title="Fair" total={34} percentage="5%" badge="pink"/> 
                                <Performance title="Poor" total={81} percentage="10%" badge="teal"/> 
                                <Performance title="Very Poor" total={81} percentage="10%" badge="purple"/> 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerSatisfaction