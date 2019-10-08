import React, { Component } from 'react'
import ProgressBar from './progressBar'

import $ from 'jquery';
import Chart from 'chart.js'


class AudienceMetrics extends Component{

    state = {
        data : [
            {
                title : "NEW USER",
                goal : 20000,
                reached : 13596,
                percentage : "65%"
            },
            {
                title : "PAGE VIEWS",
                goal : 25000,
                reached : 83596,
                percentage : "45%"
            },
            {
                title : "PAGE SESSIONS",
                goal : 85000,
                reached : 16869,
                percentage : "20%"
            },
            {
                title : "BOUNCE RATE",
                goal : "30.50%",
                reached : "28.50%",
                percentage : "85%"
            },
        ]
    }

    componentDidMount(){
      $(function(){
        'use strict'
    
        var ctx1 = document.getElementById('chartBar1').getContext('2d');
        new Chart(ctx1, {
          type: 'bar',
          data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [{
              data: [150,110,90,115,125,160,160,140,100,110,120,120],
              backgroundColor: '#66a4fb'
            },{
              data: [180,140,120,135,155,170,180,150,140,150,130,130],
              backgroundColor: '#65e0e0'
            }]
          },
          options: {
            maintainAspectRatio: false,
            legend: {
              display: false,
                labels: {
                  display: false
                }
            },
            scales: {
              xAxes: [{
                display: false,
                barPercentage: 0.5
              }],
              yAxes: [{
                gridLines: {
                  color: '#ebeef3'
                },
                ticks: {
                  fontColor: '#8392a5',
                  fontSize: 10,
                  min: 80,
                  max: 200
                }
              }]
            }
          }
        });
      })
    
    }
    
    render(){
        const { data } = this.state;
        return(
            <div class="col-lg-8 col-xl-9">
              <div class="card">
                <div class="card-header bd-b-0 pd-t-20 pd-lg-t-25 pd-l-20 pd-lg-l-25 d-flex flex-column flex-sm-row align-items-sm-start justify-content-sm-between">
                  <div>
                    <h6 class="mg-b-5">Website Audience Metrics</h6>
                    <p class="tx-12 tx-color-03 mg-b-0">Audience to which the users belonged while on the current date range.</p>
                  </div>
                  <div class="btn-group mg-t-20 mg-sm-t-0">
                    <button class="btn btn-xs btn-white btn-uppercase">Day</button>
                    <button class="btn btn-xs btn-white btn-uppercase">Week</button>
                    <button class="btn btn-xs btn-white btn-uppercase active">Month</button>
                  </div>
                </div>
                <div class="card-body pd-lg-25">
                  <div class="row align-items-sm-end">
                    <div class="col-lg-7 col-xl-8">
                      <div class="chart-six"><canvas id="chartBar1"></canvas></div>
                    </div>
                    <div class="col-lg-5 col-xl-4 mg-t-30 mg-lg-t-0">
                      <div class="row">
                          {
                              data.map( ( item ,key ) => (
                                <ProgressBar itemNumber={key} data={item}/>
                              ))
                          }
                        
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default AudienceMetrics;