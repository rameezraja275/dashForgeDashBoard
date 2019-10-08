import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react';

const Activities = (props) => {
    const { user, Activity, page,icon } = props
    return (
        <li class="activity-item">
            <div class="activity-icon bg-primary-light tx-primary">
                <FeatherIcon icon={icon}></FeatherIcon>
            </div>
            <div class="activity-body">
                <p class="mg-b-2"><strong>{user}</strong> added a {Activity} to the ticket <a href="" class="link-02"><strong>{page}</strong></a></p>
                <small class="tx-color-03">2 hours ago</small>
            </div>
        </li>
    )
}

class RecentActivities extends Component {

    render() {
        return (
            <div class="col-md-6 mg-t-10">
                <div class="card">
                    <div class="card-header pd-b-0 pd-x-20 bd-b-0">
                        <div class="d-sm-flex align-items-center justify-content-between">
                            <h6 class="mg-b-0">Recent Activities</h6>
                            <p class="tx-12 tx-color-03 mg-b-0">Last activity: 2 hours ago</p>
                        </div>
                    </div>
                    <div class="card-body pd-20">
                        <ul class="activity tx-13">
                            <Activities user={"Sher"} Activity={"time entry"} page={"Payments"} icon="clock"/>
                            <Activities user={"Sher"} Activity={"attachment"} page={"Payments"} icon="paperclip"/>
                            <Activities user={"Sher"} Activity={"time entry"} page={"Payments"} icon="circle"/>
                            <Activities user={"Sher"} Activity={"time entry"} page={"Payments"} icon="share"/>
                            <Activities user={"Sher"} Activity={"time entry"} page={"Payments"} icon="paperclip"/>  
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecentActivities 