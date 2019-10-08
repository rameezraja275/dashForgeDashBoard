import React, { Component } from 'react';

const AgentDetail = (props) => {
    const { name, profession, level, points, image, margin } = props
    return (
        <div class={"media " + margin }>
            <div class="avatar"><img src={image} class="rounded-circle" alt="" /></div>
            <div class="media-body mg-l-15">
                <h6 class="tx-13 mg-b-2">{name}</h6>
                <p class="tx-color-03 tx-12 mg-b-10">{profession}</p>
                <div class="progress ht-4 op-7 mg-b-5">
                    <div class="progress-bar wd-85p" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="d-flex justify-content-between tx-12">
                    <span class="tx-color-03">{level} Level</span>
                    <strong class="tx-medium">{points} points</strong>
                </div>
            </div>
        </div>
    )
}

class AgentPerfomance extends Component {
    render() {
        return (
            <div class="col-md-6 mg-t-10">
                <div class="card">
                    <div class="card-header pd-b-0 pd-x-20 bd-b-0">
                        <h6 class="mg-b-0">Agent Performance Points</h6>
                    </div>
                    <div class="card-body pd-t-25">
                        <AgentDetail name="Sher" profession="Front-End dev" level="Expert" points="1234" image="a.jpg" margin=""/>
                        <AgentDetail name="Sher" profession="Front-End dev" level="Expert" points="1234" image="a.jpg" margin="mg-t-20"/>
                        <AgentDetail name="Sher" profession="Front-End dev" level="Expert" points="1234" image="a.jpg" margin="mg-t-20"/>
                        <AgentDetail name="Sher" profession="Front-End dev" level="Expert" points="1234" image="a.jpg" margin="mg-t-20"/>   
                    </div>
                </div>
            </div>
        );
    }
}

export default AgentPerfomance