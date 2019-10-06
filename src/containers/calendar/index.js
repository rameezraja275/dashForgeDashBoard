import React, { Component } from 'react'

class Calendar extends Component{

    state = {
        refresh : false
    }
    componentDidMount = () => {
        this.setState({ refresh : true })
    }
    render(){
        return(
            <div id="calendar" class="calendar-content-body">
            </div>     
        )
    }
}

export default Calendar;