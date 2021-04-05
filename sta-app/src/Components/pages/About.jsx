import React, { Component } from 'react';
import './About.css'
import how_to_invest_safely from '../../images/how_to_invest_safely.jpg';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="Container">
                <div class="About_sec" id="about">
                    <div class="Center">            	
                        <h2>about us</h2>            		
                        <p>We are a team of analytical experts who utilize their skills in both technology and social science to find trends and manage data. </p>
                        <div class="Line"></div>	
                        <div class="Tabside">
                            <div class="tabcontent" id="cont-1-1">
                                <div class="TabImage">
                                    <div class="img1">
                                        <img src={how_to_invest_safely} alt="About"></img>
                                    </div>
                                </div>
                                <div class="Description">
                                    <h3>What we do?</h3>
                                    <p>We extract huge volumes of structured & unstructured data and solve business problems through undirected research. </p>
                                    <p><span class="cyan">Stock Trends</span> is a tool for stock investors to optimize their returns by predicting the stock price of the given company in midterm investments.</p>
                                    <p>This tool considers each stock, understand the trend of the stock for short and longer periods, evaluates volatility and risk of the stock, assess the effect of market sentiment and corporate actions on the stock and estimates the stock real value to advise investors on entry and exit of that stock.</p>
                                    <h3><span>- Stock Trends Team</span></h3>
                                </div>
                            <div class="clear"></div>	
                        </div>                    
                    </div>
                </div>
            </div>
            </div>
            
            // <div>
            //     <div class="container">
            //         <div class="row">
            //             <div class="col">Column</div>
            //             <div class="col">
            //                 <img src={about} class="dailyChangeImage" alt="About"></img>
            //             </div>
            //         </div>
            //     </div>
            // </div>    
        );
    }
}
 
export default About;