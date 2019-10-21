import React, { Component } from 'react'
import FullCalendar from 'fullcalendar-reactwrapper';
import { connect } from 'react-redux'
import { setCurrentRoute } from '../../config/commanActions'
import moment from 'moment'
import $ from 'jquery'
import calendarJquery from './calendarJquery'
import { setModel } from './actions'
import PerfectScrollbar from 'perfect-scrollbar';
import SideBar from './sidebar';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'

class Calendar extends Component {
  state = {
    height: null,
     calendarEvents : {
      id: 1,
      backgroundColor: 'rgba(1,104,250, .15)',
      borderColor: '#0168fa',
      events: [
        {
          id: '1',
          start: 2019+'-'+10+'-08T08:30:00',
          end: 2019+'-'+10+'-08T13:00:00',
          title: 'ThemeForest Meetup',
          description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
        },{
          id: '2',
          start: 2019+'-'+10+'-10T09:00:00',
          end: 2019+'-'+10+'-10T17:00:00',
          title: 'Design Review',
          description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
        },{
          id: '3',
          start: 2019+'-'+10+'-13T12:00:00',
          end: 2019+'-'+10+'-13T18:00:00',
          title: 'Lifestyle Conference',
          description: 'Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi...'
        },{
          id: '4',
          start: 2019+'-'+10+'-15T07:30:00',
          end: 2019+'-'+10+'-15T15:30:00',
          title: 'Team Weekly Brownbag',
          description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
        },{
          id: '5',
          start: 2019+'-'+10+'-17T10:00:00',
          end: 2019+'-'+10+'-19T15:00:00',
          title: 'Music Festival',
          description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
        },{
          id: '6',
          start: 2019+'-'+10+'-08T13:00:00',
          end: 2019+'-'+10+'-08T18:30:00',
          title: 'Attend Lea\'s Wedding',
          description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
        }
      ]
    },
    
    // Birthday Events Source
     birthdayEvents : {
      id: 2,
      backgroundColor: 'rgba(16,183,89, .25)',
      borderColor: '#10b759',
      events: [
        {
          id: '7',
          start: 2019+'-'+10+'-01T18:00:00',
          end: 2019+'-'+10+'-01T23:30:00',
          title: 'Socrates Birthday',
          description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
        },
        {
          id: '8',
          start: 2019+'-'+10+'-21T15:00:00',
          end: 2019+'-'+10+'-21T21:00:00',
          title: 'Reynante\'s Birthday',
          description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
        },
        {
          id: '9',
          start: 2019+'-'+10+'-23T15:00:00',
          end: 2019+'-'+10+'-23T21:00:00',
          title: 'Pauline\'s Birthday',
          description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
        }
      ]
    },
    
    
     holidayEvents : {
      id: 3,
      backgroundColor: 'rgba(241,0,117,.25)',
      borderColor: '#f10075',
      events: [
        {
          id: '10',
          start: 2019+'-'+10+'-04',
          end: 2019+'-'+10+'-06',
          title: 'Feast Day'
        },
        {
          id: '11',
          start: 2019+'-'+10+'-26',
          end: 2019+'-'+10+'-27',
          title: 'Memorial Day'
        },
        {
          id: '12',
          start: 2019+'-'+10+'-28',
          end: 2019+'-'+10+'-29',
          title: 'Veteran\'s Day'
        }
      ]
    },
    
     discoveredEvents : {
      id: 4,
      backgroundColor: 'rgba(0,204,204,.25)',
      borderColor: '#00cccc',
      events: [
        {
          id: '13',
          start: 2019+'-'+10+'-17T08:00:00',
          end: 2019+'-'+10+'-18T11:00:00',
          title: 'Web Design Workshop Seminar'
        }
      ]
    },
    
     meetupEvents : {
      id: 5,
      backgroundColor: 'rgba(91,71,251,.2)',
      borderColor: '#5b47fb',
      events: [
        {
          id: '14',
          start: 2019+'-'+10+'-03',
          end: 2019+'-'+10+'-05',
          title: 'UI/UX Meetup Conference'
        },
        {
          id: '15',
          start: 2019+'-'+10+'-18',
          end: 2019+'-'+10+'-20',
          title: 'Angular Conference Meetup'
        }
      ]
    },
    
    
     otherEvents : {
      id: 6,
      backgroundColor: 'rgba(253,126,20,.25)',
      borderColor: '#fd7e14',
      events: [
        {
          id: '16',
          start: 2019+'-'+10+'-06',
          end: 2019+'-'+10+'-08',
          title: 'My Rest Day'
        },
        {
          id: '17',
          start: 2019+'-'+10+'-29',
          end: 2019+'-'+10+'-31',
          title: 'My Rest Day'
        }
      ]
    }
    

  }

  componentDidMount = () => {
    this.props.setCurrentRoute("calendar");
    new PerfectScrollbar('.calendar-sidebar-body', {
      suppressScrollX: true
    });

    $('#calendarSidebarShow').on('click', function (e) {
      e.preventDefault()
      $('body').toggleClass('calendar-sidebar-show');

      $(this).addClass('d-none');
      $('#mainMenuOpen').removeClass('d-none');
    });

    let calBtn = $('div.revealFullCalBtn');
    let cal = $('#your-custom-ID');

    calBtn.appendTo(cal.find('.fc-left > .fc-button-group'));

    $('div.revealFullCalBtn').on('click', function (e) {

      e.preventDefault();

      let cal2 = $('.content-body > .calendar-sidebar');

      cal2.toggleClass('revealCal');

    });



  }

  render() {

    console.log( "yai hai ",2019,"ya iha i " ,10)
    const { calendarEvents, birthdayEvents, holidayEvents, discoveredEvents, meetupEvents, otherEvents } = this.state
    let view = ""
    console.log(window.innerWidth)
    view = window.innerWidth > 700 ? "month" : "list"

    return (

      <div class="content-body pd-0">
        <SideBar setModel={this.props.setModel} />
        <div class="calendar-content">
          <div id="calendar" class="calendar-content-body">
            <div className="revealFullCalBtn"><i class="fas fa-calendar-week"></i></div>
            <FullCalendar
              id="your-custom-ID"
              header={{
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay,list'
              }}
              defaultDate={new Date()}
              navLinks={true}
              editable={true}
              eventLimit={true}
              eventSources={[calendarEvents, birthdayEvents, holidayEvents, discoveredEvents, meetupEvents, otherEvents]}
              eventClick={(e, jsEvent, view, resourceObj) => this.props.setModel(null, "eventDescription")}
              dayClick={(e) => this.props.setModel(e._d)}
              defaultView={view}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { setModel, setCurrentRoute })(Calendar);



