import React from "react"
import { Route, Switch } from 'react-router-dom'
import WebAnalytics from '../containers/webAnalytics'
import Mail from '../containers/mail';
import FileManager from '../containers/fileManager';
import Calendar from '../containers/calendar'
import Facebook from '../containers/chat/facebook'
import Whatsapp from '../containers/chat/whatsapp'
import Instagram from '../containers/chat/instagram'
import Twitter from '../containers/chat/twitter'
import SMS from '../containers/chat/sms'
import WebChat from '../containers/chat/webchat'
import Channels from '../containers/chat/channels'
import Contact from '../containers/contact'
import HelpDesk from '../containers/helpDesk'
import SaleMonitoring from '../containers/salesMonitoring'
import Settings from '../containers/settings'

const Routes = () => {
    const ROOT_URL = ""
    return (<Switch>
        <Route exact path={ROOT_URL + "/"} component={HelpDesk} />
        <Route path={ROOT_URL + "/salemonitoring"} component={SaleMonitoring} />
        <Route path={ROOT_URL + "/analytics"} component={WebAnalytics} />
        <Route path={ROOT_URL + "/calendar"} component={Calendar} />
        <Route path={ROOT_URL + "/WebsiteChat"} component={WebChat} />
        <Route path={ROOT_URL + "/whatsapp"} component={Whatsapp} />
        <Route path={ROOT_URL + "/textMessaging"} component={SMS} />
        <Route path={ROOT_URL + "/contacts"} component={Contact} />
        <Route path={ROOT_URL + "/filemanager"} component={FileManager} />
        <Route path={ROOT_URL + "/mail"} component={Mail} />
        <Route path={ROOT_URL + "/facebook"} component={Facebook} />
        <Route path={ROOT_URL + "/instagram"} component={Instagram} />
        <Route path={ROOT_URL + "/twitter"} component={Twitter} />
        <Route path={ROOT_URL + "/teamdiscussions"} component={Channels} />
        <Route path={ROOT_URL + "/settings"} component={Settings} />
    </Switch>)
}

export default Routes