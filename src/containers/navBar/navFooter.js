import React, { Component } from 'react'

class NavFooter extends Component {

    render() {

        return (
            <div className="sidebar-footer" >
                <div className="icon-wrapper" onClick={ () => this.props.changeTab("Insight") }>
                    <div className="button-icon">
                        <i class="fas fa-chart-bar"></i>
                        {/* <span className="visuallyHidden__StyledWrapperSpan-sc-11zdheu-0 eWSXht">Inbox</span> */}
                    </div>
                </div>

                <div className="icon-wrapper" onClick={ () => this.props.changeTab("Apps") }>
                    <div className="button-icon">
                        <i class="fas fa-inbox"></i>
                        {/* <span className="visuallyHidden__StyledWrapperSpan-sc-11zdheu-0 eWSXht">Inbox</span> */}
                    </div>
                </div>

                <div className="icon-wrapper" onClick={ () => this.props.changeTab("Team Servers") }>
                    <div className="button-icon">
                        <i class="fas fa-users"></i>
                        {/* <span className="visuallyHidden__StyledWrapperSpan-sc-11zdheu-0 eWSXht">Inbox</span> */}
                    </div>
                </div>

                <div className="icon-wrapper" onClick={ () => this.props.changeTab("others") }>
                    <div className="button-icon">
                        <i class="fas fa-inbox"></i>
                        {/* <span className="visuallyHidden__StyledWrapperSpan-sc-11zdheu-0 eWSXht">Inbox</span> */}
                    </div>
                </div>

            </div>
        )
    }
}

export default NavFooter;