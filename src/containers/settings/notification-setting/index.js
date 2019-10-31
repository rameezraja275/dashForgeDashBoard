import React, { Component } from 'react'
import { Card,Slider, Row, Col } from 'antd'

class NotificationSetting extends Component {
    state = {
        currentTab : "instagram"
    }
    render() {
        
        return (
            <div className="content-body ps ps--active-y">
                <div className="container notifications-setting pd-x-0 pd-lg-x-10 pd-xl-x-0">
                    <div className="notification-header">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                                <li class="breadcrumb-item"><a href="#">Settings</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Notifications</li>
                            </ol>
                        </nav>
                        <h4 class="mg-b-0 tx-spacing--1">Notifications</h4>
                    </div>

                    <div>
                        <Card
                            style={{ width: '100%' }}
                            tabList={[ {key: "instagram", tab: "Instagram"}, 
                                {key: "facebook", tab: "Facebook"}, 
                                {key: "whatsapp", tab: "Whats App"}, 
                                {key: "webchat", tab: "WebSite Chat"}, 
                                {key: "calendar", tab: "Calendar"}
                            ]}
                            activeTabKey={this.state.currentTab}
                            onTabChange={key => this.setState({ currentTab: key })}
                        >
                            { this.state.currentTab == "instagram" ? 
                                <div>
                                    <Row>
                                        <Col span={4} > Notification rate </Col>
                                        <Col span={10}><Slider
                                            min={1}
                                            max={5}
                                            onChange={() => console.log("yo")}
                                            value={0}
                                        /> </Col>
                                    </Row>
                                     
                                </div> : <h5>Rest </h5> }
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotificationSetting;