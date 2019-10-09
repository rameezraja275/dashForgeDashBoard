import React, { Component } from 'react'
import $ from 'jquery';

const TableRow = (props) => {
    const { city, orders, earnings } = props
    return (
        <tr>
            <td class="tx-medium">{city}</td>
            <td class="text-right">{orders}</td>
            <td class="text-right">${earnings}</td>
        </tr>
    )
}

class SaleRevenue extends Component {

    // componentDidMount = () => {
    //     $('#vmap').vectorMap({
    //         map: 'usa_en',
    //         showTooltip: true,
    //         backgroundColor: '#fff',
    //         color: '#d1e6fa',
    //         colors: {
    //             fl: '#69b2f8',
    //             ca: '#69b2f8',
    //             tx: '#69b2f8',
    //             wy: '#69b2f8',
    //             ny: '#69b2f8'
    //         },
    //         selectedColor: '#00cccc',
    //         enableZoom: false,
    //         borderWidth: 1,
    //         borderColor: '#fff',
    //         hoverOpacity: .85
    //     });
    // }

    render() {
        return (
            <div class="col-md-6 col-xl-4 mg-t-10 order-md-1 order-xl-0">
                <div class="card ht-lg-100p">
                    <div class="card-header d-flex align-items-center justify-content-between">
                        <h6 class="mg-b-0">Sales Revenue</h6>
                        <div class="tx-13 d-flex align-items-center">
                            <span class="mg-r-5">Country:</span> <a href="" class="d-flex align-items-center link-03 lh-0">USA <i class="icon ion-ios-arrow-down mg-l-5"></i></a>
                        </div>
                    </div>
                    <div class="card-body pd-0">
                        <div class="pd-y-25 pd-x-20">
                            <div id="vmap" class="ht-200"></div> 
                        </div>
                        <div class="table-responsive">
                            <table class="table table-borderless table-dashboard table-dashboard-one">
                                <thead>
                                    <tr>
                                        <th class="wd-40">States</th>
                                        <th class="wd-25 text-right">Orders</th>
                                        <th class="wd-35 text-right">Earnings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableRow city="New York" orders={11222} earnings={123545} />
                                    <TableRow city="New York" orders={11222} earnings={123545} />
                                    <TableRow city="New York" orders={11222} earnings={123545} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SaleRevenue