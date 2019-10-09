import React, { Component } from 'react'

const TableRow = (props) => {
    const { browser, sessions, bouncerate, conversionrate } = props
    return (
        <tr>
            <td><i class="fab fa-chrome tx-primary op-6"></i></td>
            <td class="tx-medium">{browser}</td>
            <td class="text-right">{sessions}</td>
            <td class="text-right">{bouncerate}</td>
            <td class="text-right">{conversionrate}</td>
        </tr>
    )
}
class BrowserUsed extends Component {

    render() {
        return (
            <table class="table table-borderless table-sm tx-13 tx-nowrap mg-b-0">
                <thead>
                    <tr class="tx-10 tx-spacing-1 tx-color-03 tx-uppercase">
                        <th class="wd-5p">&nbsp;</th>
                        <th>Browser</th>
                        <th class="text-right">Sessions</th>
                        <th class="text-right">Bounce Rate</th>
                        <th class="text-right">Conversion Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow browser="Chorme" sessions="13400" bouncerate="40.12%" conversionrate="19.12%"/>
                    <TableRow browser="Mozilla FireFox" sessions="13400" bouncerate="40.12%" conversionrate="19.12%"/>
                    <TableRow browser="Safari" sessions="13400" bouncerate="40.12%" conversionrate="19.12%"/>
                    <TableRow browser="Edge" sessions="13400" bouncerate="40.12%" conversionrate="19.12%"/>
                </tbody>
            </table>
        )
    }
}

export default BrowserUsed