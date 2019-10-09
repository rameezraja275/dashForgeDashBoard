import React, { Component } from 'react'

const ListItem = (props) => {
    const { name, id } = props 
    return (
        <li class="list-group-item d-flex pd-sm-x-20">
            <div class="avatar"><span class="avatar-initial rounded-circle bg-gray-600">s</span></div>
            <div class="pd-l-10">
                <p class="tx-medium mg-b-0">{name}</p>
                <small class="tx-12 tx-color-03 mg-b-0">Customer ID#{id}</small>
            </div>
            <div class="mg-l-auto d-flex align-self-center">
                <nav class="nav nav-icon-only">
                    <a href="" class="nav-link d-none d-sm-block"><i data-feather="mail"></i></a>
                    <a href="" class="nav-link d-none d-sm-block"><i data-feather="slash"></i></a>
                    <a href="" class="nav-link d-none d-sm-block"><i data-feather="user"></i></a>
                    <a href="" class="nav-link d-sm-none"><i data-feather="more-vertical"></i></a>
                </nav>
            </div>
        </li>
    )
}

class NewCustomer extends Component {

    render() {
        return (
            <div class="col-md-6 col-xl-4 mg-t-10">
                <div class="card ht-100p">
                    <div class="card-header d-flex align-items-center justify-content-between">
                        <h6 class="mg-b-0">New Customers</h6>
                        <div class="d-flex align-items-center tx-18">
                            <a href="" class="link-03 lh-0"><i class="icon ion-md-refresh"></i></a>
                            <a href="" class="link-03 lh-0 mg-l-10"><i class="icon ion-md-more"></i></a>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush tx-13">
                       <ListItem name="rameez raja" id={1}/>
                       <ListItem name="sher ali" id={2}/>
                    </ul>
                    <div class="card-footer text-center tx-13">
                        <a href="" class="link-03">View More Customers <i class="icon ion-md-arrow-down mg-l-5"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewCustomer