import React, { Component } from 'react';
import './Home.css'
import bse_sensex_logo from '../../images/bse_sensex_logo.jpg'
import TopCard from '../Reusable/TopCard';
// import * as firebase from 'firebase';
import firebase from 'firebase';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previousClose : "",
            daysRange : "",
            percentage : ""
        }
    }
    
    componentDidMount() {
        // firebase for market action
        const marketActionRef = firebase.database().ref().child('MarketAction');
        marketActionRef.on('value', snap => {
            this.setState({
                previousClose : snap.child('Previous Close').val(),
                daysRange : snap.child('Days Range').val(),
                percentage : snap.child('Percentage').val()
            })
            this.changeTagColor()
        })
    }

    changeTagColor() {
        // change the Percentage tag in market action
        var per = parseFloat(this.state.percentage.replace("%",""))
        console.log(per)
        if(per >= 0) {
            document.getElementById("percentageTag").className = "badge badge-success"
        } else {
            document.getElementById("percentageTag").className = "badge badge-danger"
        }
    }

    render() { 
        return ( 
            <div>
                <div>
                    <div className="row">
                        <div className="col-sm">
                            <img src={bse_sensex_logo} className="dailyChangeImage" alt="bse_sensex_logo"></img>
                        </div>
                        <div className="col-sm">
                            <ul className="list-group dailyChange" >
                            <li className="list-group-item list-group-item-dark">Market Action</li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Previous Close
                                    <span className="badge badge-info">{this.state.previousClose}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Day's Range
                                    <span className="badge badge-lightdark">{this.state.daysRange}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Percentage Change
                                    <span id="percentageTag" >{this.state.percentage}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <TopCard name={"Top Trading Companies"}></TopCard>
            </div>
         );
    }
}

export default Home;