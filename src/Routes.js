import React from "react"
import { Route, Switch } from 'react-router-dom'
import WebAnalytics from './containers/webAnalytics'
import Mail from './containers/mail';
import FileManager from './containers/fileManager';
import Calendar from './containers/calendar'
import Chat from './containers/chat'
import Contact from './containers/contact'
import HelpDesk from './containers/helpDesk'
import SaleMonitoring from './containers/salesMonitoring'

export default(
    <Switch>
        <Route exact path="/" component={WebAnalytics} />
        <Route path="/salemonitoring" component={ SaleMonitoring } />
        <Route path="/helpdesk" component={ HelpDesk } />
        <Route path="/calendar" component={Calendar} />
        <Route path="/WebsiteChat" component={Chat} />
        <Route path="/whatsapp" component={Chat} />
        <Route path="/textMessaging" component={Chat} />
        <Route path="/contacts" component={Contact} />
        <Route path="/filemanager" component={FileManager} />
        <Route path="/mail" component={Mail} />
        <Route path="/facebook" component={Chat} />
        <Route path="/instagram" component={Chat} />
        <Route path="/twitter" component={Chat} />
        <Route path="/teams" component={Chat} />
    </Switch>
)