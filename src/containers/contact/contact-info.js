import React, { Component } from 'react'
import { connect } from "react-redux";
import FeatherIcon from 'feather-icons-react';
import { setModel } from './actions' 

const InfoField = (props) => {
    const { label, value, size, classname } = props
    return (
        <div class={"col-sm-"+ size +" mg-t-20 mg-sm-t-30"}>
            <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">{label}</label>
            {
                label != "SOCIAL PROFILES" ? <p class={classname}>{value}</p> :
                    <nav class="nav nav-social">
                        <a href="" class="nav-link"><FeatherIcon icon="facebook"></FeatherIcon></a>
                        <a href="" class="nav-link"><FeatherIcon icon="twitter"></FeatherIcon></a>
                        <a href="" class="nav-link"><FeatherIcon icon="instagram"></FeatherIcon></a>
                        <a href="" class="nav-link"><FeatherIcon icon="github"></FeatherIcon></a>
                    </nav>
            }

        </div>
    )
}

class ContactInfo extends Component {

   

    render() {
        const ContactDetails  = this.props.contacts;
        if( ContactDetails != null ){
            return (
                <div class="contact-content">
                    <div class="contact-content-header">
                        <nav class="nav">
                            <a href="#contactInformation" class="nav-link active" data-toggle="tab">Contact Info<span>rmation</span></a>
                            <a href="#contactLogs" class="nav-link" data-toggle="tab"><span>Call &amp; Message </span>Logs</a>
                        </nav>
                        <a href="" id="contactOptions" class="text-secondary mg-l-auto d-xl-none"><FeatherIcon icon="more-horizontal"></FeatherIcon></a>
                    </div>
    
                    <div class="contact-content-body">
                        <div class="tab-content">
    
                            <div id="contactInformation" class="tab-pane show active pd-20 pd-xl-25">
                                <div class="d-flex align-items-center justify-content-between mg-b-25">
                                    <h6 class="mg-b-0">Personal Details</h6>
                                    <div class="d-flex">
                                        <button onClick={ () => this.props.setModel("edit") }data-toggle="modal" class="btn btn-sm btn-white d-flex align-items-center mg-r-5"><FeatherIcon icon="edit-2"></FeatherIcon><span class="d-none d-sm-inline mg-l-5"> Edit</span></button>
                                        <button href="#modalDeleteContact" data-toggle="modal" class="btn btn-sm btn-white d-flex align-items-center"><FeatherIcon icon="trash"></FeatherIcon><span class="d-none d-sm-inline mg-l-5"> Delete</span></button>
                                    </div>
                                </div>
    
                                <div class="row">
                                    <InfoField label="FIRST NAME" value={ContactDetails.FirstName} size={4} classname="mg-b-0"/>
                                    <InfoField label="MIDDLE NAME" value={ContactDetails.MiddleName} size={4} classname="mg-b-0"/>
                                    <InfoField label="LAST NAME" value={ContactDetails.LastName} size={4} classname="mg-b-0"/>
                                </div>
    
                                <h6 class="mg-t-40 mg-b-20">Contact Details</h6>
    
                                <div class="row row-sm">
                                    <InfoField label="MOBILE" value={ContactDetails.MobilePhone} size={4} classname="tx-primary tx-rubik mg-b-0"/>
                                    <InfoField label="HOME PHONE" value={ContactDetails.HomePhone} size={4} classname="tx-primary tx-rubik mg-b-0"/>
                                    <InfoField label="WORK PHONE" value={ContactDetails.WorkPhone} size={4} classname="tx-primary tx-rubik mg-b-0"/>
                                    <InfoField label="EMAIL ADDRESS" value={ContactDetails.EmailAddress} size={4} classname="tx-primary tx-rubik mg-b-0"/>
                                    <InfoField label="COMPANY" value={ContactDetails.Company} size={4} classname="mg-b-0"/>
                                    <InfoField label="JOB POSITION" value={ContactDetails.JobPosition} size={4} classname="mg-b-0"/>
                                    <InfoField label="HOME ADDRESS" value={ContactDetails.HomeAddress} size={6} classname="mg-b-0"/>
                                    <InfoField label="WORK ADDRESS" value={ContactDetails.WorkAdress} size={6} classname="mg-b-0"/>
                                    <InfoField label="PERSONAL WEBSITE" value={ContactDetails.PersonalWebsite} size={6} classname="tx-primary tx-rubik mg-b-0"/>
                                    <InfoField label="SOCIAL PROFILES" value={ContactDetails.Social} size={6} classname="mg-b-0"/>
                                    <InfoField label="NOTES" value={ContactDetails.Notes} size={12} classname="mg-b-0"/>
                                </div>
                            </div>
                            <div id="contactLogs" class="tab-pane pd-20 pd-xl-25">
                                <div class="d-flex align-items-center justify-content-between mg-b-30">
                                    <h6 class="tx-15 mg-b-0">Call &amp; Message Logs</h6>
                                    <a href="#" class="btn btn-sm btn-white d-flex align-items-center"><i class="icon ion-md-time mg-r-5 tx-16 lh--9"></i> Clear History</a>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="contact-content-sidebar">
                        <div class="clearfix mg-b-25">
                            <div id="contactAvatar" class="pos-relative float-left">
                                <div class="avatar avatar-xl"><span class="avatar-initial rounded-circle bg-gray-700 tx-normal">A</span></div>
                                <a href="" class="contact-edit-photo" data-toggle="tooltip" title="Upload Photo"><FeatherIcon icon="edit-2"></FeatherIcon></a>
                            </div>
                        </div>
                        <h5 id="contactName" class="tx-18 tx-xl-20 mg-b-5">Abigail Johnson</h5>
                        <p class="tx-13 tx-lg-12 tx-xl-13 tx-color-03 mg-b-20">President &amp; CEO - ThemePixels, Inc.</p>
                        <nav class="contact-call-nav mg-b-20">
                            <a href="#" class="nav-call" data-toggle="tooltip" title="Make a Phone Call"><FeatherIcon icon="phone"></FeatherIcon></a>
                            <a href="#" class="nav-video" data-toggle="tooltip" title="Make a Video Call"><FeatherIcon icon="video"></FeatherIcon></a>
                            <a href="#" class="nav-msg" data-toggle="tooltip" title="Send Message"><FeatherIcon icon="message-square"></FeatherIcon></a>
                        </nav>
    
                        <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Biography</label>
                        <p class="tx-13 mg-b-0">Gambler, Tea Drinker, Ultimate Piggie, Replacement President of a Major Soft Drink Manufacturer. When I give out candies, I give people the flavour I don't like. </p>
    
                        <hr class="mg-y-20" />
    
                        <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-15">Options</label>
                        <nav class="nav flex-column contact-content-nav mg-b-25">
                            <a href="" class="nav-link"><FeatherIcon icon="share"></FeatherIcon> Share this Contact</a>
                            <a href="" class="nav-link"><FeatherIcon icon="star"></FeatherIcon> Add to Favorites</a>
                            <a href="" class="nav-link"><FeatherIcon icon="slash"></FeatherIcon> Block this Contact</a>
                        </nav>
    
                    </div>
                </div>
            )
        }
        else{
            return <React.Fragment></React.Fragment>
        }
    }
}

const mapStateToProps = (state) => {
    return {
      contacts: state.contact.contactDetail
    }
  }
  
export default connect(mapStateToProps, { setModel })(ContactInfo);