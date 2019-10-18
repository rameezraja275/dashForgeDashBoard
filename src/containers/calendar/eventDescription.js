import React, { Component } from 'react'
import { connect } from "react-redux";
import { setModel } from "./actions"
import FeatherIcon from 'feather-icons-react';

class EventDescription extends Component {

    render() {
        const { modelOpen,eventDescription  } = this.props
        const {  title, eventStartDate, eventStartTime, eventEndDate, eventEndTime, note} = eventDescription
        const classes = modelOpen ? " show" : "";
        const display = modelOpen ? "block" : "none";
        return (
            <div class={"modal calendar-modal-event fade effect-scale" + classes} id="modalCalendarEvent" role="dialog" aria-hidden="true"
                style={{ display: display, paddingRight: "17px", backgroundColor: "rgba(15, 21, 32, 0.7)" }}> >
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header" style={{ backgroundColor : '#3a87ad'}}>
                            <h6 class="event-title">{title}</h6>
                            <nav class="nav nav-modal-event">
                                <div class="nav-link"><FeatherIcon icon="external-link"></FeatherIcon></div>
                                <div class="nav-link"><FeatherIcon icon="trash-2"></FeatherIcon></div>
                                <div class="nav-link" data-dismiss="modal" onClick={ () => this.props.setModel(null, "eventDescription")}><FeatherIcon icon="x"></FeatherIcon></div>
                            </nav>
                        </div>
                        <div class="modal-body">
                            <div class="row row-sm">
                                <div class="col-sm-6">
                                    <label class="tx-uppercase tx-sans tx-11 tx-medium tx-spacing-1 tx-color-03">Start Date</label>
                                    <p class="event-start-date">{eventStartDate}</p>
                                </div>
                                <div class="col-sm-6">
                                    <label class="tx-uppercase tx-sans tx-11 tx-medium tx-spacing-1 tx-color-03">End Date</label>
                                    <p class="event-end-date">{eventEndDate}</p>
                                </div>
                            </div>

                            <label class="tx-uppercase tx-sans tx-11 tx-medium tx-spacing-1 tx-color-03">Description</label>
                            <p class="event-desc tx-gray-900 mg-b-40">{note}</p>

                            <div class="btn btn-secondary pd-x-20" data-dismiss="modal" onClick={ () => this.props.setModel(null, "eventDescription")}>Close</div >
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        modelOpen: state.calendar.modelOpen,
        eventDescription : state.calendar.eventdescription
    }
}

export default connect(mapStateToProps, { setModel })(EventDescription);