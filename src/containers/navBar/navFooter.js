import React, { Component } from 'react'

class NavFooter extends Component {

    render() {
        const { currenttab } = this.props
        const styleBackground = { background: "#F7F8FA" }
        return (
            <div className="sidebar-footer" style={ styleBackground }>
                <div className="icon-wrapper" onClick={ () => this.props.changeTab("apps") }>
                    <div className={ currenttab == "apps" ? "button-icon opened-tab" : "button-icon"}>
                        <i class="fas fa-chart-bar"></i>
                        {/* <span className="visuallyHidden__StyledWrapperSpan-sc-11zdheu-0 eWSXht">Inbox</span> */}
                    </div>
                </div>

                <div className="icon-wrapper" onClick={ () => this.props.changeTab("integartions") }>
                    <div className={ currenttab == "integartions" ? "button-icon opened-tab" : "button-icon"}>
                        <i class="fas fa-inbox"></i>
                        {/* <span className="visuallyHidden__StyledWrapperSpan-sc-11zdheu-0 eWSXht">Inbox</span> */}
                    </div>
                </div>

                <div className="icon-wrapper" onClick={ () => this.props.changeTab("sequence") }>
                    <div className={ currenttab == "sequence" ? "button-icon opened-tab" : "button-icon"}>
                        <i class="fas fa-users"></i>
                        {/* <span className="visuallyHidden__StyledWrapperSpan-sc-11zdheu-0 eWSXht">Inbox</span> */}
                    </div>
                </div>

                <div className="icon-wrapper" onClick={ () => this.props.changeTab("support") }>
                    <div className={ currenttab == "support" ? "button-icon opened-tab" : "button-icon"}>
                        <i class="fas fa-inbox"></i>
                        {/* <span className="visuallyHidden__StyledWrapperSpan-sc-11zdheu-0 eWSXht">Inbox</span> */}
                    </div>
                </div>

            </div>
        )
    }
}

export default NavFooter;