import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react'
import { connect } from 'react-redux'
import { setCurrentRoute } from '../../config/commanActions'
import InfoCard from './infoCard'
import RevenueGrowth from './RevenueGrowth'
import AccountRetention from './accountRetention'
import SaleRevenue from './saleRevenue'
import RecentEarning from './recentEarning'
import TransactionHistory from './transactionHistory'
import NewCustomer from './newCustomer'
import RealTimeSale from './realTimeSales'

class SalesMonitoring extends Component {

  componentDidMount = () => {
    this.props.setCurrentRoute("salemonitoring");
  }

  render() {
    return (
      <div className="content-body">
        <div class="container pd-x-0" >
          <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
            <div>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                  <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Sales Monitoring</li>
                </ol>
              </nav>
              <h4 class="mg-b-0 tx-spacing--1">Welcome to Dashboard</h4>
            </div>
            <div class="d-none d-md-block">
              <button class="btn btn-sm pd-x-15 btn-white btn-uppercase"><FeatherIcon icon="mail" class="wd-10 mg-r-5"></FeatherIcon> Email</button>
              <button class="btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5"><FeatherIcon icon="printer" class="wd-10 mg-r-5"></FeatherIcon> Print</button>
              <button class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5"><FeatherIcon icon="file" class="wd-10 mg-r-5"></FeatherIcon> Generate Report</button>
            </div>
          </div>

          <div class="row row-xs">
            <InfoCard title="Conversion rate" value="0.81%" change="1.2%" increase={true} id={0} />
            <InfoCard title="Unique Purchases" value="3456" change="1.2%" increase={false} id={1} />
            <InfoCard title="AVG Order" value="$3454" change="1.2%" increase={false} id={2} />
            <InfoCard title="Order Quantity" value="1245" change="1.2%" increase={true} id={3} />
            <RevenueGrowth />
            <AccountRetention />
            <SaleRevenue />
            <RecentEarning />
            <TransactionHistory />
            <NewCustomer />
            <RealTimeSale />
          </div>

        </div>
      </div>
    )
  }
}

export default connect(null, { setCurrentRoute })( SalesMonitoring);