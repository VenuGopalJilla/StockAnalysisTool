import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container" style={{marginLeft:220}}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>Oops!</h1>
                            <h2>Error 404! Page not found</h2>
                            <div className="error-details">
                                <p>Sorry, an error occured. The requested page was not found!</p>
                            </div>
                            <div className="error-actions">
                                <Link to="/" className="btn btn-outline-primary btn-lg">
                                <i className="fas fa-home"></i>&nbsp;Back to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default PageNotFound;