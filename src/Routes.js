import React from "react"
import { Route, Switch } from 'react-router-dom'
import WebAnalytics from './containers/webAnalytics'
import Mail from './containers/mail';
import FileManager from './containers/fileManager';
import Calendar from './containers/calendar'
import Chat from './containers/chat'
import Contact from './containers/contact'

export default(
    <Switch>
        <Route path="/analytics" component={WebAnalytics} />
        {/* <Route path="/hepldesk" component={} /> */}
        <Route path="/calendar" component={Calendar} />
        <Route path="/WebsiteChat" component={Chat} />
        <Route path="/whatsapp" component={Chat} />
        <Route path="/textMessaging" component={Chat} />
        <Route path="/contacts" component={Contact} />
        <Route path="/filemanager" component={FileManager} />
        <Route path="/mail" component={Mail} />
        {/* <Route path="/profileview" component={} />
        <Route path="/connections" component={} />
        <Route path="/group" component={} />
        <Route path="/events" component={} />
        <Route path="/timeline" component={} />
        <Route path="/components" component={} />
        <Route path="/collections" component={} /> */}
    </Switch>
)