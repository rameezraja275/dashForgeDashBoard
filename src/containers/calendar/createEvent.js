import React, { Component } from 'react'
import { connect } from "react-redux";
import { setModel } from "./actions"

class CreateEvent extends Component {

  state = {
      title : null,
      type: "event",
      eventStartDate: new Date(),
      eventStartTime: null,
      eventEndDate: new Date(),
      eventEndTime: null,
      note: null
  }

  onTextFieldChange = (e) => {
    if( e.target.id == "eventStartDate" || e.target.id == "eventEndDate"){
      this.setState({
        [e.target.id]: new Date(e.target.value)
      })
    }else{
      this.setState({
        [e.target.id]: new Date(e.target.value)
      })
    }
    
  }

  onSave = () => {
    console.log("form a data ", this.state);
  }

  componentDidMount = () => {
    const { date } = this.props
    this.setState({ eventStartDate : new Date(date) }) 
  }

  render() {
    const { modelOpen, date } = this.props
    const { title, type, eventStartDate, eventEndDate, note, eventStartTime, eventEndTime } = this.state;
    const classes = modelOpen ? " show" : "";
    const display = modelOpen ? "block" : "none";
    return (
      <div class={"modal calendar-modal-create fade effect-scale" + classes} 
        id="modalCreateEvent" role="dialog" aria-hidden="true" 
        style={{ display : display , paddingRight: "17px",backgroundColor: "rgba(15, 21, 32, 0.7)" }}> >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body pd-20 pd-sm-30">
              <button type="button" class="close pos-absolute t-20 r-20" data-dismiss="modal" 
                  aria-label="Close" onClick={ this.props.setModel }>
                <span aria-hidden="true"><i data-feather="x"></i></span>
              </button>

              <h5 class="tx-18 tx-sm-20 mg-b-20 mg-sm-b-30">Create New Event</h5>

              <form id="formCalendar" method="post" action="app-calendar.html">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Add title" 
                    id="title" value={title} onChange={this.onTextFieldChange}/>
                </div>
                <div class="form-group d-flex align-items-center">
                  <div class="custom-control custom-radio">
                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"
                      onClick={ () => this.setState({ type : "event" })  }/>
                    { type == "event" && <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"
                      onClick={ () => this.setState({ type : "event" }) } checked/> }
                    <label class="custom-control-label" for="customRadio1">Event</label>
                  </div>
                  <div class="custom-control custom-radio mg-l-20">
                    <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"
                      onClick={ () => this.setState({ type : "reminder" }) }/>
                    { type == "reminder" &&  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"
                      onClick={ () => this.setState({ type : "reminder" }) }/>}
                    <label class="custom-control-label" for="customRadio2">Reminder</label>
                  </div>
                </div>
                <div class="form-group mg-t-30">
                  <label class="tx-uppercase tx-sans tx-11 tx-medium tx-spacing-1 tx-color-03">Start Date</label>
                  <div class="row row-xs">
                    <div class="col-7">
                      <input id="eventStartDate" type="date" value="" class="form-control" placeholder="Select date" 
                        value={eventStartDate.toISOString().substr(0, 10)} onChange={this.onTextFieldChange}/>
                    </div>
                    <div class="col-5">
                      <input id="eventStartTime" type="time" value="" class="form-control" placeholder="Select date" 
                          value={eventStartTime} onChange={this.onTextFieldChange}/>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="tx-uppercase tx-sans tx-11 tx-medium tx-spacing-1 tx-color-03">End Date</label>
                  <div class="row row-xs">
                    <div class="col-7">
                      <input id="eventEndDate" type="date" value="" class="form-control" placeholder="Select date" 
                        value={eventEndDate.toISOString().substr(0, 10)} onChange={this.onTextFieldChange}/>
                    </div>
                    <div class="col-5">
                      <input id="eventEndTime" type="time" value="" class="form-control" placeholder="Select date" 
                            value={eventEndTime} onChange={this.onTextFieldChange}/>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <textarea id="note" class="form-control" rows="2" placeholder="Write some description (optional)"
                        value={note} onChange={this.onTextFieldChange} ></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary mg-r-5" onClick={ this.onSave }>Add Event</button>
              <div class="btn btn-secondary" data-dismiss="modal" onClick={ this.props.setModel }>Discard</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    modelOpen : state.calendar.modelOpen,
    date : state.calendar.date
  }
}

export default connect(mapStateToProps, { setModel })(CreateEvent);