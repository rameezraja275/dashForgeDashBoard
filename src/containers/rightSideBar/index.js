import React, { Component, Fragment } from 'react'
import { Button, Drawer } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { connect } from "react-redux";
import { setDrawer } from "./action"


class RightSideBar extends Component {

    showDrawer = (contentNumber) => {
        this.props.setDrawer(contentNumber)
    };

    onClose = () => {
        this.props.setDrawer(null)
    };


    render() {
        const content = this.props.contentNumber
        return (
            <div className="RightSideBAr">
                <div class="btn-wrapper">
                    <div className={content === 1 ? "btn-rightbar active" : "btn-rightbar" } onClick={content === 1 ? () => { this.onClose() } : () => { this.showDrawer(1) }}>
                        <i class="fas fa-rocket"></i>
                    </div>
                </div>
                <div class="btn-wrapper">
                    <div className={content === 2 ? "btn-rightbar active" : "btn-rightbar" } onClick={content === 2 ? () => { this.onClose() } : () => { this.showDrawer(2) }}>
                        <i class="fas fa-calendar"></i>
                    </div>
                </div>
                <div class="btn-wrapper">
                    <div className={content === 3 ? "btn-rightbar active" : "btn-rightbar" } onClick={() => this.showDrawer(2)}>
                        <i class="fas fa-address-book"></i>
                    </div>
                </div>
                <div class="btn-wrapper">
                    <div className={content === 4 ? "btn-rightbar active" : "btn-rightbar" } onClick={content === 4 ? () => { this.onClose() } : () => { this.showDrawer(4) }}>
                        <i class="fas fa-keyboard"></i>
                    </div>
                </div>
                <div class="btn-wrapper">
                    <div className={content === 5 ? "btn-rightbar active" : "btn-rightbar" } onClick={content === 5 ? () => { this.onClose() } : () => { this.showDrawer(5) }}>
                        <i class="fas fa-plus"></i>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contentNumber: state.drawers.contentNumber
    }
}

export default connect(mapStateToProps, { setDrawer })(RightSideBar); 