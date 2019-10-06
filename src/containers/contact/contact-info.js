import React, { Component } from 'react'

const InfoField = (props) => {
    const { label, value, size, classname } = props
    return (
        <div class={"col-sm-"+ size +" mg-t-20 mg-sm-t-30"}>
            <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">{label}</label>
            {
                label != "SOCIAL PROFILES" ? <p class={classname}>{value}</p> :
                    <nav class="nav nav-social">
                        <a href="" class="nav-link"><i data-feather="facebook"></i></a>
                        <a href="" class="nav-link"><i data-feather="twitter"></i></a>
                        <a href="" class="nav-link"><i data-feather="instagram"></i></a>
                        <a href="" class="nav-link"><i data-feather="github"></i></a>
                    </nav>
            }

        </div>
    )
}

class ContactInfo extends Component {

    state = {
        ContactDetails: {
            FirstName: "Abid",
            MiddleName: "Christensen",
            LastName: "Johnson",
            MobilePhone: "+57 4265743594",
            HomePhone: "+12 3454334",
            WorkPhone: "+34 45253452",
            EmailAddress: "me@gmail.com",
            Company: "ThemePixle",
            JobPosition: "President",
            HomeAddress: "4658 Kenwood Place Pompano Beach, FL 33060, United States",
            WorkAdress: "819 Waldeck Street Farmers Branch, TX 75244, United States",
            PersonalWebsite: "http://themepixels.me",
            Notes: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            Social: {
                Facebook: "facebook.com",
                twitter: "twitter.com",
                instagram: "instagram.com",
                github: "github.com"
            }
        }
    }

    render() {
        const { ContactDetails } = this.state;
        return (
            <div class="contact-content">
                <div class="contact-content-header">
                    <nav class="nav">
                        <a href="#contactInformation" class="nav-link active" data-toggle="tab">Contact Info<span>rmation</span></a>
                        <a href="#contactLogs" class="nav-link" data-toggle="tab"><span>Call &amp; Message </span>Logs</a>
                    </nav>
                    <a href="" id="contactOptions" class="text-secondary mg-l-auto d-xl-none"><i data-feather="more-horizontal"></i></a>
                </div>

                <div class="contact-content-body">
                    <div class="tab-content">

                        <div id="contactInformation" class="tab-pane show active pd-20 pd-xl-25">
                            <div class="d-flex align-items-center justify-content-between mg-b-25">
                                <h6 class="mg-b-0">Personal Details</h6>
                                <div class="d-flex">
                                    <a href="#modalEditContact" data-toggle="modal" class="btn btn-sm btn-white d-flex align-items-center mg-r-5"><i data-feather="edit-2"></i><span class="d-none d-sm-inline mg-l-5"> Edit</span></a>
                                    <a href="#modalDeleteContact" data-toggle="modal" class="btn btn-sm btn-white d-flex align-items-center"><i data-feather="trash"></i><span class="d-none d-sm-inline mg-l-5"> Delete</span></a>
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
                            <a href="" class="contact-edit-photo" data-toggle="tooltip" title="Upload Photo"><i data-feather="edit-2"></i></a>
                        </div>
                    </div>
                    <h5 id="contactName" class="tx-18 tx-xl-20 mg-b-5">Abigail Johnson</h5>
                    <p class="tx-13 tx-lg-12 tx-xl-13 tx-color-03 mg-b-20">President &amp; CEO - ThemePixels, Inc.</p>
                    <nav class="contact-call-nav mg-b-20">
                        <a href="#" class="nav-call" data-toggle="tooltip" title="Make a Phone Call"><i data-feather="phone"></i></a>
                        <a href="#" class="nav-video" data-toggle="tooltip" title="Make a Video Call"><i data-feather="video"></i></a>
                        <a href="#" class="nav-msg" data-toggle="tooltip" title="Send Message"><i data-feather="message-square"></i></a>
                    </nav>

                    <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Biography</label>
                    <p class="tx-13 mg-b-0">Gambler, Tea Drinker, Ultimate Piggie, Replacement President of a Major Soft Drink Manufacturer. When I give out candies, I give people the flavour I don't like. </p>

                    <hr class="mg-y-20" />

                    <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-15">Options</label>
                    <nav class="nav flex-column contact-content-nav mg-b-25">
                        <a href="" class="nav-link"><i data-feather="share"></i> Share this Contact</a>
                        <a href="" class="nav-link"><i data-feather="star"></i> Add to Favorites</a>
                        <a href="" class="nav-link"><i data-feather="slash"></i> Block this Contact</a>
                    </nav>

                </div>
            </div>
        )
    }
}

export default ContactInfo