import React, { Component } from 'react';
import Select from 'react-select';
import { Route, Link, Redirect, Router } from 'react-router-dom';
// import * as firebase from 'firebase';
import firebase from 'firebase';
import './Sectors.css';
import '../Plots/sectorplot.js'

// const techCompanies = [
//     { label: "Apple", value: ["apple1", "apple2", "apple3"] },
//     { label: "Facebook", value: ["facebook1", "facebook2", "facebook3", "facebook4", "facebook5"] },
//     { label: "Google", value: 3 },
//     { label: "ABB Ltd.", value: 4 },
//     { label: "Amazon", value: 5 },
//     { label: "Mayra Solutions", value: 6 },
// ];

class Sectors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption:null,
            showMe: false,
            techCompanies: [],
        };
    }

    componentDidMount() {
        this.plotBarChart()
        this.getFirebaseData()
    }

    getFirebaseData() {
        var loadingBar = "visible"
        console.log("get firebase data function called from sectors")
        // firebase for sectors collection
        const sectorsDataRef = firebase.database().ref().child('SectorsData');
        sectorsDataRef.on('value', snap => {
            snap.forEach(child => {
                this.setState({
                    techCompanies: this.state.techCompanies.concat({"label": [child.key], "value": child.val()}),
                })
                this.loadingBar = "hidden"
            })
            console.log("now tech companies", this.state.techCompanies)
        })
    }

    plotBarChart() {
        var Chart = require('chart.js')
        var ctx = document.getElementById("myBarChart");
        console.log("chart plotting function called")
        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Finance", "Textiles", "Other Financial Services", "Comm. Trading & Distribution", "Pharmaceuticals", "Realty", "Other Apparels & Accessories", "Construction & Engineering", "Auto Parts & Equipment", "Industrial Machinery", "Iron & Steel/Interm.Products", "Misc.Commercial Services"],
                datasets: [{
                    label: "Companies Count",
                //   backgroundColor: "#4e73df",
                //   borderColor: "#4e73df",
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)',
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2,
                    hoverBackgroundColor: "#2e59d9",
                    data: [324,263,261,208,172,140,111,108,106,104,100,100],
                    }],
            },
            options: {
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 0
                    }
                },
                scales: {
                    xAxes: [{
                        time: {
                            unit: 'companies'
                        },
                        gridLines: {
                            display: true,
                            drawBorder: true
                        },
                        ticks: {
                            maxTicksLimit: 10
                        },
                        maxBarThickness: 25,
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 400,
                            maxTicksLimit: 5,
                            padding: 5,
                        },
                        gridLines: {
                            color: "rgb(234, 236, 244)",
                            zeroLineColor: "rgb(234, 236, 244)",
                            drawBorder: false,
                            borderDash: [2],
                            zeroLineBorderDash: [2]
                        }
                    }],
                },
                legend: {
                    display: false
                },
                tooltips: {
                    titleMarginBottom: 10,
                    titleFontColor: '#6e707e',
                    titleFontSize: 14,
                    backgroundColor: "rgb(255,255,255)",
                    bodyFontColor: "#858796",
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                },
            }
        });
    }
    
    handleSubmit(){
        this.setState({
            showMe: !this.state.showMe
        });
    }

    onChange=selectedOption => {
        this.setState({selectedOption});
        console.log(`option selected: `, selectedOption);
    };

    render() {
        const {selectedOption} = this.state;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="col-xl-12 col-lg-8">
                        <div className="card shadow mb-4">
                            {/* Card Header - Dropdown */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h5 className="m-0 font-weight-bold" style={{color:"rgb(52, 58, 64)"}}>Sectors Overview</h5>
                            {/* <div class="dropdown no-arrow">
                                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                <div class="dropdown-header">Dropdown Header:</div>
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div> */}
                            </div>
                            {/* Card Body */}
                            <div className="card-body">
                                <div className="chart-area">
                                    <canvas id="myBarChart"></canvas>
                                    {/* <script type="javascript/text" src="../Plots/sectorplot.js"></script> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div class="loader" style={{visibility:this.loadingBar}}>Loading...</div>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <h3>Select a sector: </h3>
                            <Select options={ this.state.techCompanies } onChange={this.onChange.bind(this)} value={selectedOption}/>
                        </div>
                        <div className="col-md-4">
                            <div className= "row buttonStyle">
                                <button type="submit" className="btn btn-primary" onClick={() => this.handleSubmit()}>Submit</button>
                            </div>
                        </div>
                    </div>

                    <div className="row"></div>
                    <p> {this.state.value}</p>
                    {this.state.showMe ?
                    <div className="list-group list-group-sectors">
                        {/* <ul className="list-group"> */}
                            {selectedOption.value.map(item => {
                                return <Link to={{pathname:'/companydetails/'+item+'', aboutProps:{name:item}}} className="list-group-item" key={item}><h5>{item}</h5></Link>
                            })}
                        {/* </ul> */}
                    </div>
                    :null }
                </div>
            </React.Fragment>
        );
    }
}

export default Sectors