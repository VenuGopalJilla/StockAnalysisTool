import React, { Component } from 'react';
import './CompanyDetails.css';
// import * as firebase from 'firebase';
import firebase from 'firebase';
import DatePicker from 'react-date-picker';

// var companyName = "no company"
class CompanyDetails extends Component {
    
    dates = []
    lowerband = []
    upperband = []
    closeprice = []
    dates_copy = []
    lowerband_copy = []
    upperband_copy = []
    closeprice_copy = []
    
    // securityCode = ""
    // isin = ""
    // sector = ""
    // securityId = ""

    constructor(props){
        super(props);

        // get company name
        this.state = {
            companyName : "No Company", 
            securityCode : "",
            isin : "",
            sector : "",
            securityId : "",
            date: new Date(),
        }
        if (props.location.aboutProps != null) {
            this.state = {
                companyName : props.location.aboutProps.name,
            }
        } else {
            var url_split = window.location.href.split("/")
            if (url_split[url_split.length - 2] == "companydetails") {
                this.state = {
                    companyName : (url_split[url_split.length - 1]).replace(/%20/g," ")
                }
            }
        }
        console.log(this.state.companyName)
    }

    componentDidMount() {
        this.getFirebaseData()
    }

    getFirebaseData() {
        var stockDataRef = firebase.database().ref().child('StockData');
        var companyDataRef = '';

        var companyData = firebase.database().ref().child('Companies').child(this.state.companyName)
        if(companyData != '') {
            companyData.on('value', details => {
                if(details.key == this.state.companyName){
                    this.setState({
                        securityCode : details.child('Security Code').val(),
                        isin : details.child('ISIN No').val(),
                        sector : details.child('Industry').val(),
                        securityId : details.child('Security Id').val()
                    })
                    // this.securityCode = details.child('Security Code').val();
                    // this.isin = details.child('ISIN No').val();
                    // this.sector = details.child('Industry').val();
                    // this.securityId = details.child('Security Id').val();
                }
                console.log("company security code -> ", this.isin)
            })
        }

        stockDataRef.on('value', snap => {
            snap.forEach(db_companyName => {
                if (this.state.companyName == db_companyName.key) {
                    console.log("db company name ", db_companyName.key)
                    companyDataRef = firebase.database().ref().child('StockData').child(db_companyName.key);
                }
                this.getCompanyDataFromFirebase(companyDataRef)       
            })
        })

        // companiesRef.on('value', snap => {
        //     snap.forEach(company => {
        //         if(this.state.companyName == company.key) {
        //             this.securityCode = company.child('Security Code').val();
        //             this.isin = company.child('ISIN No').val();
        //             this.sector = company.child('Industry').val();
        //             this.securityId = company.child('Security Id').val();
        //         }
        //     })
        // })
    }

    getCompanyDataFromFirebase(companyDataRef) {
        console.log("companydataref1 ", companyDataRef)
        if (companyDataRef != '') {
            companyDataRef.on('value', snap => {
                snap.forEach(dailyData => {
                    // this.setState({
                        this.dates = [...this.dates, dailyData.child('Date').val()]
                        this.lowerband = this.lowerband.concat(dailyData.child('Lower Band').val())
                        this.upperband = this.upperband.concat(dailyData.child('Upper Band').val())
                        this.closeprice = this.closeprice.concat(dailyData.child('Close Price').val())
                    // })
                })
                this.dates_copy = this.dates;
                this.lowerband_copy = this.lowerband;
                this.upperband_copy = this.upperband;
                this.closeprice_copy = this.closeprice;
                console.log("dates -> ", this.dates)
                console.log("lowerband -> ", this.lowerband)
                console.log("upperband -> ", this.upperband)
            })
            this.plotChart()
        }
    }

    plotChart() {
        var Chart = require('chart.js')
        var ctx = document.getElementById("myChart");
        if(window.bar != undefined) {
            window.bar.destroy(); 
        }
        window.bar = new Chart(ctx, {
            type: 'line',
            data: {
                // labels: ["12-Feb-20","11-Feb-20","10-Feb-20","07-Feb-20","06-Feb-20","05-Feb-20","04-Feb-20","03-Feb-20","01-Feb-20","31-Jan-20"],
                labels: this.dates_copy,
                datasets: [
                    {
                        label: "Lower Band",
                        data: this.lowerband_copy,
                        // data: [1,2,2,3,5,3,3,5,6,5],
                        lineTension: 0,
                        borderColor: 'rgba(51, 204, 255, 1)',
                        backgroundColor: 'rgba(51, 204, 255, 0.2)',
                        borderDash: [3, 3],
                        pointBorderColor: 'rgba(51, 204, 255, 1)',
                        pointBackgroundColor: 'rgba(51, 204, 255, 0.5)',
                        pointRadius: 0.5,
                        pointHoverRadius: 5,
                        pointHitRadius: 30,
                        pointBorderWidth: 2,
                        pointStyle: 'rectRounded'
                    },
                    {
                        label: "Upper Band",
                        data: this.upperband_copy,
                        // data: [1,5,7,8,9,4,3,5,9,7],
                        lineTension: 0,
                        borderColor: 'rgba(255, 80, 80, 1)',
                        backgroundColor: 'rgba(255, 80, 80, 0.2)',
                        borderDash: [3, 3],
                        pointBorderColor: 'rgba(255, 80, 80, 1)',
                        pointBackgroundColor: 'rgba(255, 80, 80, 0.5)',
                        pointRadius: 0.5,
                        pointHoverRadius: 5,
                        pointHitRadius: 30,
                        pointBorderWidth: 2,
                        pointStyle: 'rectRounded'
                    },
                    {
                        label: "Close Price",
                        data: this.closeprice_copy,
                        // data: [1,2,2,3,5,3,3,5,6,5],
                        lineTension: 0,
                        borderColor: 'rgba(255, 153, 0, 1)',
                        backgroundColor: 'rgba(255, 153, 0, 0.2)',
                        pointBorderColor: 'rgba(255, 153, 0, 1)',
                        pointRadius: 0.1,
                        pointHoverRadius: 5,
                        pointHitRadius: 30,
                        pointBorderWidth: 0.5,
                        pointStyle: 'rectRounded'
                    },
                    
                ]
            },
            options: {
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                },
                // title: {
                //     display: true,
                //     text: 'Variation in Stock Price',
                //     fontSize: 15,
                //     fontStyle: 'bold'
                // },
                legend: {
                    display: true,
                    position: 'top',
                    align: 'end',
                    cursor: "pointer",
                }
            }
        });
    }

    chartDuration(duration) {
        console.log("duration ", duration)
        if (duration == "week") {
            this.dates_copy = this.dates.slice(-7)
            this.lowerband_copy = this.lowerband.slice(-7)
            this.upperband_copy = this.upperband.slice(-7)
            this.closeprice_copy = this.closeprice.slice(-7)           
        } else if (duration == "month") {
            this.dates_copy = this.dates.slice(-30)
            this.lowerband_copy = this.lowerband.slice(-30)
            this.upperband_copy = this.upperband.slice(-30) 
            this.closeprice_copy = this.closeprice.slice(-30)           
        } else if (duration == "half") {
            this.dates_copy = this.dates.slice(-180)
            this.lowerband_copy = this.lowerband.slice(-180)
            this.upperband_copy = this.upperband.slice(-180)
            this.closeprice_copy = this.closeprice.slice(-180)            
        } else if (duration == "year") {
            this.dates_copy = this.dates.slice(-365)
            this.lowerband_copy = this.lowerband.slice(-365)
            this.upperband_copy = this.upperband.slice(-365) 
            this.closeprice_copy = this.closeprice.slice(-365)           
        }
        this.plotChart()
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <React.Fragment>
            <div className="container">
                <p>{this.state.companyName}</p>
                <div className="col-xl-12 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col mr-2">
                                <div className="companyName mb-1">{this.state.companyName}</div>
                                <div className="companyDetails h5 mb-0">
                                    <p>
                                    <b>Security Code : </b>
                                    {this.state.securityCode}
                                    <b> &emsp; | &emsp; ISIN : </b>
                                    {this.state.isin}
                                    <b> &emsp; | &emsp; Sector : </b>
                                    {this.state.sector}
                                    <b> &emsp; | &emsp; Security ID : </b>
                                    {this.state.securityId}
                                    </p>
                                </div>
                            </div>
                            <div className="col-auto">
                                {/* <p>Figures in &#x20b9;</p> */}
                                <br/>
                                <br/>
                                <br/>
                                <h5>Figures in  <i className="fa fa-rupee text-gray-300" style={{fontsize:24}}></i></h5>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>


                <div className="col-xl-12 col-md-6 mb-4">
                <div className="col-md-4 card-body shadow">
                    <div className="service-item ">
                    <div className="down-content">
                        <ul className="list-group list-group-flush listGroupStyle">
                            <li className="list-group-item">Open Price <span className="badge badge-info badge-pill">36.65</span></li>
                            <li className="list-group-item">High Price <span className="badge badge-info badge-pill">37.7</span></li>
                            <li className="list-group-item">Low Price <span className="badge badge-info badge-pill">36.4</span></li>
                            <li className="list-group-item">Close Price <span className="badge badge-info badge-pill">37</span></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 card-body shadow">
                    <div className="service-item">
                    <div className="down-content">
                        <ul className="list-group list-group-flush listGroupStyle">
                            <li className="list-group-item">WAP <span className="badge badge-info badge-pill">37.12268896</span></li>
                            <li className="list-group-item">No. of Shares <span className="badge badge-info badge-pill">557271</span></li>
                            <li className="list-group-item">No. of Trades <span className="badge badge-info badge-pill">1230</span></li>
                            <li className="list-group-item">Total Turnover <span className="badge badge-info badge-pill">20687398</span></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 card-body shadow">
                    <div className="service-item">
                    <div className="down-content">
                        <ul className="list-group list-group-flush listGroupStyle">
                            <li className="list-group-item">Lower Band <span className="badge badge-info badge-pill">37</span></li>
                            <li className="list-group-item">Upper Band <span className="badge badge-info badge-pill">198.45</span></li>
                            <li className="list-group-item">Beta Value <span className="badge badge-info badge-pill">1.221185058</span></li>
                            <li className="list-group-item">Alpha value <span className="badge badge-info badge-pill">191.2772211</span></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="col-xl-12 col-lg-8">
                    <div className="card shadow mb-4">
                        {/* Card Header - Dropdown */}
                        <div className="card-body py-3 d-flex flex-row align-items-center">
                            <h3 className="column1 m-0 font-weight-bold chartHeading">Variation in Stock Price</h3>
                            <div className="column2 btn-group btn-group-lg chartButtons" role="group" aria-label="Basic example">
                                <div className="row">
                                    <button type="button" class="btn btn-outline-secondary" onClick={() => this.chartDuration("week")}>Weekly</button>
                                    <button type="button" class="btn btn-outline-secondary" onClick={() => this.chartDuration("month")}>Monthly</button>
                                    <button type="button" class="btn btn-outline-secondary" onClick={() => this.chartDuration("half")}>Half Yearly</button>
                                    <button type="button" class="btn btn-outline-secondary" onClick={() => this.chartDuration("year")}>Yearly</button>
                                </div>
                                {/* <div className="row">
                                    <h4>From Date:</h4>
                                    <DatePicker
                                        onChange={this.onChange}
                                        value={this.state.date}
                                    />
                                </div> */}
                            </div>
                        </div>
                        {/* <div className="card-body py-3 d-flex flex-row align-items-center">
                            <h3 className="m-0 font-weight-bold chartHeading">Variation in Stock Price</h3>
                            <div class="btn-group btn-group-lg chartButtons" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-outline-secondary" onClick={() => this.chartDuration("week")}>Weekly</button>
                                <button type="button" class="btn btn-outline-secondary" onClick={() => this.chartDuration("month")}>Monthly</button>
                                <button type="button" class="btn btn-outline-secondary" onClick={() => this.chartDuration("half")}>Half Yearly</button>
                                <button type="button" class="btn btn-outline-secondary" onClick={() => this.chartDuration("year")}>Yearly</button>
                            </div>
                            <h4 className="m-0 font-weight-bold chartHeading"> OR.. </h4>
                            <div className="chartFromDate">
                                <h4>From Date:</h4>
                                <DatePicker
                                    onChange={this.onChange}
                                    value={this.state.date}
                                />
                            </div>
                            <div className="chartFromDate">
                                <h4>To Date:</h4>
                                <DatePicker
                                    onChange={this.onChange}
                                    value={this.state.date}
                                />
                            </div>
                        </div> */}
                        
                        {/* Card Body */}
                        <div className="card-body">
                            <div className="chart-area">
                                <canvas id="myChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="Services_sec col-xl-12 col-md-6 mb-4" id="services">
                <div className="Center">
                    <h2>Suggestions</h2>
                    <div className="Line"></div>
                    <div className="Serviceside">
                        <ul>
                            <li className="Development">
                                <a href="#services"><h4>Indian Overseas Bank</h4></a>
                                <h5>Close Price : 300</h5>
                                <h5>Similarity % : 75</h5>
                            </li>
                            <li className="Development">
                                <a href="#services"><h4>Bank of Maharastra</h4></a>
                                <h5>Close Price : 220</h5>
                                <h5>Similarity % : 70</h5>
                            </li>
                            <li className="Development">
                                <a href="#services"><h4>Axis Bank</h4></a>
                                <h5>Close Price : 800</h5>
                                <h5>Similarity % : 60</h5>
                            </li>
                            <li className="Development">
                                <a href="#services"><h4>Jio</h4></a>
                                <h5>Close Price : 400</h5>
                                <h5>Similarity % : 50</h5>
                            </li>
                        </ul>
                    </div>
                </div>                
            </div>

            {/* <div class="Pricing_sec col-xl-12 col-md-6 mb-4" id="pricing">
                <div class="Center">
                    <h2>Suggestions</h2>
                    <div class="Line"></div>
                    <div class="Pricingside">
                        <ul>
                            <li>
                                <div class="Dollar">
                                    <h2>IOB</h2>
                                </div>
                                <div class="Band">
                                    <p>Close Price <span>150</span></p>
                                </div>
                                <div class="Band">
                                    <p>Lower Band<span>100</span></p>
                                </div>
                                <div class="Band">
                                    <p>Upper Band<span>200</span></p>
                                </div>
                                <div class="Band">
                                    <p>Similarity %<span>60%</span></p>
                                </div>
                                <div class="Order">
                                    <a href="#">Go to</a>
                                </div>
                            </li>
                        </ul>  
                        <ul>
                            <li>
                                <div class="Dollar">
                                    <h2>Axis</h2>
                                </div>
                                <div class="Band">
                                    <p>Close Price <span>150</span></p>
                                </div>
                                <div class="Band">
                                    <p>Lower Band<span>100</span></p>
                                </div>
                                <div class="Band">
                                    <p>Upper Band<span>200</span></p>
                                </div>
                                <div class="Band">
                                    <p>Similarity %<span>60%</span></p>
                                </div>
                                <div class="Order">
                                    <a href="#">Go to</a>
                                </div>
                            </li>
                        </ul>   
                        <ul>
                            <li>
                                <div class="Dollar">
                                    <h2>Tata Consultancy services</h2>
                                </div>
                                <div class="Band">
                                    <p>Close Price <span>150</span></p>
                                </div>
                                <div class="Band">
                                    <p>Lower Band<span>100</span></p>
                                </div>
                                <div class="Band">
                                    <p>Upper Band<span>200</span></p>
                                </div>
                                <div class="Band">
                                    <p>Similarity %<span>60%</span></p>
                                </div>
                                <div class="Order">
                                    <a href="#">Go to</a>
                                </div>
                            </li>
                        </ul>                 	
                    </div>
                </div>
            </div> */}


            </div>

            </React.Fragment>
        );
    }
}

export default CompanyDetails;