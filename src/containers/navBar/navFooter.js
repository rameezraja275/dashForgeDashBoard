import React, { Component } from 'react'

class NavFooter extends Component {

    toggleButtons = () => {
        var tabs = document.querySelector('.js-tabs');
        var tabItems = document.querySelectorAll('.js-tab-item:not(.js-tab-item-main-control)');
        var tabItemMainControl = document.querySelector('.js-tab-item-main-control');

        if (tabs.classList.contains('js-tabs-init')) {
            tabs.classList.remove('js-tabs-init');
            tabItemMainControl.style.transform = 'rotate(45deg)';
            for (var i = 0; i < tabItems.length; i++) {
                tabItems[i].classList.add('js-tab-item-show');
            }
        } else {
            for (var i = 0; i < tabItems.length; i++) {
                tabItems[i].classList.remove('js-tab-item-show');
            }
            setTimeout(function () {
                tabItemMainControl.style.transform = 'rotate(0deg)';
                tabs.classList.add('js-tabs-init');
            }, 2000);
        }
    }

    render() {
        const { currenttab } = this.props
        return (
            <React.Fragment>


                <div className="sidebar-footer" >
                    <div class="tabs js-tabs">

                        <div class="cover-back cover-back-tabs js-cover-back-tabs"></div>

                        <div class="tabs-container">
                            <div class="tab-item js-tab-item"  onClick={ () => this.props.changeTab("apps") }>
                                <i class="fas fa-chart-bar"></i>
                            </div>

                            <div class="tab-item js-tab-item" onClick={ () => this.props.changeTab("integartions") }>
                                <i class="fas fa-inbox"></i>
                            </div>

                            <div class="tab-item tab-item--middle js-tab-item js-tab-item-main-control" onClick={this.toggleButtons}>
                                <i class="fas fa-plus"></i>
                            </div>

                            <div class="tab-item js-tab-item" onClick={ () => this.props.changeTab("sequence") }>
                                <i class="fas fa-users"></i>
                            </div>

                            <div class="tab-item js-tab-item" onClick={ () => this.props.changeTab("support") }>
                                <i class="fas fa-cog"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

            // <div className="sidebar-footer" >
            //     <div className="icon-wrapper" onClick={ () => this.props.changeTab("apps") }>
            //         <div className={ currenttab == "apps" ? "button-icon opened-tab" : "button-icon"}>
            //             <i class="fas fa-chart-bar"></i>
            //             {/* <span className="visuallyHidden__StyledWrapperSpan-sc-11zdheu-0 eWSXht">Inbox</span> */}
            //         </div>
            //     </div>

            //     <div className="icon-wrapper" onClick={ () => this.props.changeTab("integartions") }>
            //         <div className={ currenttab == "integartions" ? "button-icon opened-tab" : "button-icon"}>
            //             <i class="fas fa-inbox"></i>
            //             {/* <span className="visuallyHidden__StyledWrapperSpan-sc-11zdheu-0 eWSXht">Inbox</span> */}
            //         </div>
            //     </div>

            //     <div className="icon-wrapper" onClick={ () => this.props.changeTab("sequence") }>
            //         <div className={ currenttab == "sequence" ? "button-icon opened-tab" : "button-icon"}>
            //             <i class="fas fa-users"></i>
            //             {/* <span className="visuallyHidden__StyledWrapperSpan-sc-11zdheu-0 eWSXht">Inbox</span> */}
            //         </div>
            //     </div>

            //     <div className="icon-wrapper" onClick={ () => this.props.changeTab("support") }>
            //         <div className={ currenttab == "support" ? "button-icon opened-tab" : "button-icon"}>
            //             <i class="fas fa-inbox"></i>
            //             {/* <span className="visuallyHidden__StyledWrapperSpan-sc-11zdheu-0 eWSXht">Inbox</span> */}
            //         </div>
            //     </div>

            // </div>
        )
    }
}

export default NavFooter;