import React, { Component } from 'react'
import Head from './head'
import AudienceMeter from './webSiteAudience'
import Sessions from './channelSessions'
import Acquisition from './acquisition'

class WebAnalytics extends Component{

    render(){
        return(
            <div className="container pd-x-0">
                <Head />
                <div className="row row-xs">
                    <AudienceMeter />
                    <Sessions />
                    <Acquisition />
                </div>
            </div>
        )
    }
}

export default WebAnalytics