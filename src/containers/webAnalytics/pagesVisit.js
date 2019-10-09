import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react';

const TableRow = (props) => {
    const { title, value  } = props
    return (
        <tr>
            <td class="align-middle text-center"><a href=""><FeatherIcon icon="external-link" class="wd-12 ht-12 stroke-wd-3"></FeatherIcon></a></td>
            <td class="align-middle tx-medium">{title}</td>
            <td class="align-middle text-right">
                <div class="wd-150 d-inline-block">
                    <div class="progress ht-4 mg-b-0">
                        <div class={"progress-bar bg-teal wd-"+value+"p"} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </td>
            <td class="align-middle text-right"><span class="tx-medium">{value}</span></td>
        </tr>
    )
}

class PagesVisit extends Component {

    render() {
        return (
            <table class="table table-borderless table-sm tx-13 tx-nowrap mg-b-0">
                <thead>
                    <tr class="tx-10 tx-spacing-1 tx-color-03 tx-uppercase">
                        <th class="wd-5p">Link</th>
                        <th>Page Title</th>
                        <th class="text-right">Percentage (%)</th>
                        <th class="text-right">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow title="Homepage" value={65}/>
                    <TableRow title="Our Services" value={15}/>
                    <TableRow title="List of Products" value={40}/>
                    <TableRow title="Contact Us" value={15}/>
                </tbody>
            </table>
        )
    }
}

export default PagesVisit 