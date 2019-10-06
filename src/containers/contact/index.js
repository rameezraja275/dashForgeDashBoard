import React, { Component } from 'react'
import LeftBar from './leftbar';
import ContactList from './contact-list'
import ContactInfo from './contact-info'

class Conatct extends Component {

    render() {
        return (
            <div class="contact-wrapper contact-wrapper-two">
                <LeftBar />
                <ContactList />
                <ContactInfo />
            </div>
        )
    }
}

export default Conatct;