import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/stocks_logo.png';
// import searchIcon from './search-icon.png'

class Navbar extends Component {
    // state = {
    //   isOpen:false
    // }

    // handleClick=()=>{
    //   this.setState({
    //     isOpen: !this.state.isOpen
    //   })
    // }

    // closeNavbar=()=>{
    //   this.setState({
    //     isOpen:false
    //   })
    // }

    // render() {
    //     return(
    //         <nav>
    //           <div className='logoBtn'>
    //             <div className="logo">
    //               <Link to='/' onClick={this.closeNavbar}><img src = {logo} className="logo" alt = ""></img></Link>
    //               <h3>Stock Trends</h3>
    //             </div>
    //             <div className="btn" onClick={this.handleClick}>
    //               <div className="bar"></div>
    //               <div className="bar"></div>
    //               <div className="bar"></div>
    //             </div>
    //           </div>

    //             <ul className={this.state.isOpen? 'showNav':'undefined'}>
    //               <li><Link to = '/' onClick={this.closeNavbar}>Home</Link></li>
    //               <li><Link to = "/about" onClick={this.closeNavbar}>About</Link></li>
    //               <li><Link to = "/performance" onClick={this.closeNavbar}>Performance</Link></li>
    //               <li><Link to = "/login" onClick={this.closeNavbar}>Login</Link></li>
    //             </ul>
    //         </nav>
    //     );
    // }
}
 
export default Navbar;