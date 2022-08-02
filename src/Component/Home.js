import React, { Component } from "react";

import Footer from './Footer';
import Header from './Header';
import Intro from "./Intro";


class Home extends Component {

    state={
        Fronts:[
           {id:'1',name: 'HTML'},
           {id:'2',name: 'CSS'},
           {id:'3',name: 'Javascript'},
        ],
        Backend:[
            {id:'1',name:'Python'},
            {id:'2',name:'PHP'},
            {id:'3',name:'WordPress'},
        ],
        Framework:[
            {id:'1',name:'ReactJS'},
            {id:'2',name:'Django'},
            {id:'1',name:'Fastapi'},
        ],
        Cloudtechnology:[
            {id:'1',name:'Cpanel'},
            {id:'2',name:'AWS,GCP - Basic Knowledge'},
            {id:'3',name:'DigitalOcean'},
            {id:'4',name:'Zendesk'},
        ]

    }


    render() {
        return (
            <>
                <Header />
                <Intro />
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card" >
                                <div className="card-header">
                                    Front End Development
                                </div>
                                {/* {this.state.links.map(link => { */}
                                { this.state.Fronts.map( (front) => {
                                return (

                                    <ul className="list-group list-group-flush" key={front.id}>
                                        <li className="list-group-item">{front.name}</li>
                                    </ul>

                                 ) })}
                                   
                                
                                
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card" >
                                <div className="card-header">
                                    Backend Dev./CMS
                                </div>

                                { this.state.Backend.map( (back )=>{
                                    return (
                                    <ul className="list-group list-group-flush" key={back.id}>
                                        <li className="list-group-item">{back.name}</li>
                                    </ul>
                                    )}) }

                                
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card" >
                                <div className="card-header">
                                    Framework/Library
                                </div>
                                {this.state.Framework.map((frame)=>{
                                    return(
                                        <ul className="list-group list-group-flush" key={frame.id}>
                                            <li className="list-group-item">{frame.name}</li>
                                    </ul>
                                    )
                                })}
                               
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card" >
                                <div className="card-header">
                                    Cloud Technology
                                </div>
                                {this.state.Cloudtechnology.map((clouyd)=>{
                                    return(
                                        <ul className="list-group list-group-flush" key={clouyd.id}>
                                            <li className="list-group-item">{clouyd.name}</li>
                                    </ul>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>


                <Footer />
            </>
        );
    }
}

export default Home;
