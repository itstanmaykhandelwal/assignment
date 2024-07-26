import React from 'react';
import './style.css';
import Globe from '../assets/images/globe.svg';
import BlackBtn from '../assets/images/black-arrow.png';

const Network = () => {
    return (
        <div className='network-lyt'>
            <h2 className='network-heading wow fadeInUp' data-wow-duration="0.7s">FanCloud CDN network revolutionizes video infrastructure <span className='txt-block'>with community-driven Innovation</span></h2>
            <p className='fancloud-para wow fadeInUp' data-wow-duration="0.9s">FanCloud pioneers a new era of connectivity with its decentralised content delivery network (dCDN), leveraging a global network of community-powered nodes. By harnessing a decentralised architecture, dCDN drastically reduces data transfer and compute costs while enhancing load time. Join FanCloud’s dCDN network and experience the future of seamless, secure and community- driven consumption</p>
            <img src={Globe} alt="globe wow fadeInUp" data-wow-duration="1.2s" className='globe-img' />
            <div className='card-flex'>
                <div className="card-network typ-blue-card wow fadeInUp" data-wow-duration="0.4s">
                    <h3 className="card--heading">Content Nodes</h3>
                    <p className='card--para'>Content Nodes, Earn rewards for supplying their GPU, Storage and bandwidth for dCDN</p>
                    <button className='typ-white-btn'>Deploy <img src={BlackBtn} alt="arrow" /></button>
                </div>
                <div className="card-network typ-pink-card wow fadeInUp" data-wow-duration="0.6s">
                    <h3 className="card--heading">Orchestrators</h3>
                    <p className='card--para'>Orchestrators will be responsible for connecting the client with the content node for seamless streaming. Traffic distribution will be based on multiple factors like job type, performance</p>
                    <div className='typ-end-align'>
                        <div className='pink-comming-soon'>Coming soon</div>
                    </div>
                </div>
                <div className="card-network typ-green-card wow fadeInUp" data-wow-duration="0.8s">
                    <h3 className="card--heading">Validators</h3>
                    <p className='card--para'>Validators will be responsible for validating the execution of dCDN Network. Validators will earn rewards from Staking and earn a cut on the executions validated.</p>
                    <div className='typ-end-align'>
                        <div className='green-comming-soon'>Coming soon</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Network