import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react';
import title from './head'
import $ from 'jquery';
import Chart from 'chart.js'

const AcquisitionInfo = (props) => {
    const { title, percentage } = props.data
    return(
        <div class="col-sm-5 col-md-12 col-lg-6 col-xl-5">
                      <div class="media">
                        <div class="wd-40 ht-40 rounded bd bd-2 bd-primary d-flex flex-shrink-0 align-items-center justify-content-center op-6">
                          <FeatherIcon icon="bar-chart-2" class="wd-20 ht-20 tx-primary stroke-wd-3"></FeatherIcon>
                        </div>
                        <div class="media-body mg-l-10">
                          <h4 class="tx-normal tx-rubik tx-spacing--2 lh-1 mg-b-5">{percentage}</h4>
                          <p class="tx-10 tx-uppercase tx-medium tx-color-03 tx-spacing-1 tx-nowrap mg-b-0">{title}</p>
                        </div>
                      </div>
                    </div>
    )
}

class Acquisition extends Component{

    state = {
        Acquisitions : [
            {
                title : "Bounce Rate",
                percentage : "33.05%"
            },
            {
                title : "Page Sessions",
                percentage : "9044"
            }
        ]
    }

    componentDidMount = () => {
      // $(function(){
      //   'use strict'

      //   $.plot('#flotChart1', [{
      //     data: df1,
      //     color: '#c0ccda',
      //     lines: {
      //       fill: true,
      //       fillColor: '#f5f6fa'
      //     }
      //   },{
      //       data: df3,
      //       color: '#0168fa',
      //       lines: {
      //         fill: true,
      //         fillColor: '#d1e6fa'
      //       }
      //     }], {
      //   series: {
      //     shadowSize: 0,
      //     lines: {
      //       show: true,
      //       lineWidth: 1.5
      //     }
      //   },
      //   grid: {
      //     borderWidth: 0,
      //     labelMargin: 0
      //   },
      //   yaxis: {
      //     show: false,
      //     max: 65
      //   },
      //   xaxis: {
      //     show: false,
      //     min: 40,
      //     max: 100
      //   }
      // });
      // })
    }

    render(){
        const data = this.state.Acquisitions;
        return(
            <div class="col-md-6 col-lg-5 mg-t-10">
              <div class="card">
                <div class="card-header pd-b-0 bd-b-0 pd-t-20 pd-lg-t-25 pd-l-20 pd-lg-l-25">
                  <h6 class="mg-b-5">Acquisition</h6>
                  <p class="tx-12 tx-color-03 mg-b-0">Tells you where your visitors originated from, such as search engines, social networks or website referrals. <a href="">Learn more</a></p>
                </div>
                <div class="card-body pd-sm-20 pd-lg-25">
                  <div class="row row-sm">
                      {
                        data.map( (item) => (
                            <AcquisitionInfo data={item}/>
                        ))
                      }
                    
                  </div>

                  <div class="chart-eight">
                    <div id="flotChart1" class="flot-chart"></div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default Acquisition;