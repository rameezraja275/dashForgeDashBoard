import React from "react"
import { Route, Switch } from 'react-router-dom'
import WebAnalytics from './containers/webAnalytics'
import Mail from './containers/mail';
import FileManager from './containers/fileManager';
import Calendar from './containers/calendar'
import Facebook from './containers/facebook'
import Whatsapp from './containers/whatsapp'
import Instagram from './containers/instagram'
import Twitter from './containers/twitter'
import SMS from './containers/sms'
import WebChat from './containers/webchat'
// import Chat from './containers/chat'
import Contact from './containers/contact'
import HelpDesk from './containers/helpDesk'
import SaleMonitoring from './containers/salesMonitoring'

// const url = "http://www5.sprysol.com"

export default(
    <Switch>
        <Route exact path="/" component={WebAnalytics} />
        <Route path="/salemonitoring" component={ SaleMonitoring } />
        <Route path="/helpdesk" component={HelpDesk} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/WebsiteChat" component={WebChat} />
        <Route path="/whatsapp" component={Whatsapp} />
        <Route path="/textMessaging" component={SMS} />
        <Route path="/contacts" component={Contact} />
        <Route path="/filemanager" component={FileManager} />
        <Route path="/mail" component={Mail} />
        <Route path="/facebook" component={Facebook} />
        <Route path="/instagram" component={Instagram} />
        <Route path="/twitter" component={Twitter} />
        {/* <Route path="/teams" component={Chat} /> */}
    </Switch>
)