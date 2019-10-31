import React, { Component } from 'react'
import CalendarTimePicker from 'react-calendar';
import FeatherIcon from 'feather-icons-react';
import PerfectScrollbar from 'react-perfect-scrollbar'

class SideBar extends Component {

    render() {

        return (
            <div class="calendar-sidebar">
                    <div class="calendar-sidebar-header">
                        <i data-feather="search"></i>
                        <div class="search-form">
                            <input type="search" class="form-control" placeholder="Search calendar" />
                        </div>
                        <div class="btn btn-sm btn-primary btn-icon calendar-add" onClick={ () => this.props.setModel(new Date())}>
                            <div data-toggle="tooltip" title="Create New Event"><FeatherIcon icon="plus"></FeatherIcon></div>
                        </div>
                    </div>
                    <PerfectScrollbar id="calendarSidebarBody" className="calendar-sidebar-body">
                        <div class="calendar-inline">
                            <div id="calendarInline" >
                            <CalendarTimePicker
                                // onChange={this.onChange}
                                // value={this.state.date}
                            />
                            </div>
                        </div>

                        <div class="pd-y-20 pd-x-15">
                            <label class="tx-uppercase tx-sans tx-10 tx-medium tx-spacing-1 tx-color-03 pd-l-10 mg-b-10">My Calendar</label>
                            <nav class="calendar-nav">
                                <a href="" class="calendar show"><span></span> Calendar Events</a>
                                <a href="" class="birthday show"><span></span> Birthday Events</a>
                                <a href="" class="holiday show"><span></span> Holiday Calendar</a>
                                <a href="" class="discover show"><span></span> Discovered Events</a>
                                <a href="" class="meetup show"><span></span> Meetup Events</a>
                                <a href="" class="other show"><span></span> Other Events</a>
                            </nav>
                        </div>

                        <div class="pd-20 mg-b-20">
                            <label class="tx-uppercase tx-sans tx-10 tx-medium tx-spacing-1 tx-color-03 mg-b-15">Upcoming Events</label>
                            <div class="schedule-group">
                                <a href="#" class="schedule-item bd-l bd-2 bd-danger">
                                    <h6>Company Standup Meeting</h6>
                                    <span>8:00am - 9:00am, Engineering Room</span>
                                </a>
                                <a href="#" class="schedule-item bd-l bd-2 bd-success">
                                    <h6>Start Dashboard Concept</h6>
                                    <span>9:30am - 11:30am, Office Desk</span>
                                </a>
                                <a href="#" class="schedule-item bd-l bd-2 bd-primary">
                                    <h6>Chat Design Presentation</h6>
                                    <span>2:30pm - 3:00pm, Visual Room</span>
                                </a>
                            </div>
                        </div>
                    </PerfectScrollbar >
                </div>
        )
    }
}

export default SideBar;