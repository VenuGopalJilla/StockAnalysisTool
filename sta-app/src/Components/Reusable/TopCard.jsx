import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopCard extends Component {
    state = {
        companiesList : ["IDBI BANK LTD", "HCL TECHNOLOGIES LTD", "BANK OF INDIA", "ICICI BANK LTD", "CORPORATION BANK", 
            "STERLITE TECHNOLOGIES LTD", "BALAJI TELEFILMS LTD", "AXIS BANK LTD", "SONATA SOFTWARE LTD", "United Spirits Ltd"
        ]
    }

    render() {
        return (
            <div className="card cardStyle">
                    <div className=".card-header cardHeaderStyle">{this.props.name}</div>
                    <ul className="list-group list-group-flush listGroupStyle">
                    {this.state.companiesList.map(item => {
                        return (
                            <Link to={{pathname:'/companydetails/'+item+'', aboutProps:{name:item}}} className="list-group-item" key={item}>
                                <li className="list-group-item">{item}</li>
                            </Link>
                        )
                    })}
                    {/* <li className="list-group-item">IDBI Bank</li>
                    <li className="list-group-item">Bank Of India</li>
                    <li className="list-group-item">ICICI Bank</li>
                    <li className="list-group-item">Corporation Bank</li>
                    <li className="list-group-item">Axis Bank</li>
                    <li className="list-group-item">Sonata Software Ltd.</li>
                    <li className="list-group-item">National Aluminium Co. ltd.</li>
                    <li className="list-group-item">HCL Technologies</li>
                    <li className="list-group-item">Sterlite Technologies</li>
                    <li className="list-group-item">Bharathi Airtel</li> */}
                </ul>
            </div>
        );
    }
}

export default TopCard;