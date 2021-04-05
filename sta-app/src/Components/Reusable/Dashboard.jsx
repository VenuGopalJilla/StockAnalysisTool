import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Dashboard.css'

class Dashboard extends Component{
    state = {
        visible: this.props.toBeVisible
    }
    render(){
        return(
            <div></div>
            // <div className="wrapper d-flex" style={{visibility:this.state.visible}}>
            //     <div className="sideMenu">
            //         <div className="sidebar">
            //             <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" >
            //                 <li className="nav-item">
            //                     <a to="#" className="nav-link text-white text-uppercase ml-5" data-toggle="collapse" href="#top10collapse" role="button" aria-expanded="false" aria-controls="top10collapse">
            //                         <span className="text">Top 10</span>
            //                     </a>
            //                 </li>
            //                 <div className="collapse" id="top10collapse">
            //                     <ul className="navbar-nav">
            //                         <li className="nav-item"><Link to="#" className="nav-link text-secondary text-uppercase ml-5"><span className="text"><i class="fas fa-hand-point-right"></i> To Sell</span></Link></li>
            //                         <li className="nav-item"><Link to="/top10buy" className="nav-link text-secondary text-uppercase ml-5"><span className="text"><i class="fas fa-hand-point-right"></i>To Buy</span></Link></li>
            //                     </ul>
            //                 </div>

            //                 <li className="nav-item">
            //                     <a to="#" className="nav-link text-white text-uppercase ml-5" data-toggle="collapse" href="#top30collapse" role="button" aria-expanded="false" aria-controls="top30collapse">
            //                         <span className="text">Top 30</span>
            //                     </a>
            //                 </li>
            //                 <div className="collapse" id="top30collapse">
            //                     <ul className="navbar-nav">
            //                         <li className="nav-item"><Link to="#" className="nav-link text-secondary text-uppercase ml-5"><span className="text"><i class="fas fa-hand-point-right"></i>To Sell</span></Link></li>
            //                         <li className="nav-item"><Link to="#" className="nav-link text-secondary text-uppercase ml-5"><span className="text"><i class="fas fa-hand-point-right"></i>To Buy</span></Link></li>
            //                     </ul>
            //                 </div>
                            
            //                 {/* Divider */}
			// 			    <hr className="sidebar-divider my-0"></hr>
                            
            //                 <li className="nav-item"><Link to="#" className="nav-link text-white text-uppercase ml-5"><span className="text">sectors</span></Link></li>
            //                 <li className="nav-item"><Link to="#" className="nav-link text-white text-uppercase ml-5"><span className="text">S and P 500</span></Link></li>
            //                 <li className="nav-item"><Link to="#" className="nav-link text-white text-uppercase ml-5"><span className="text">Top revenue</span></Link></li>
            //             </ul>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default Dashboard;