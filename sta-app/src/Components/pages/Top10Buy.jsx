import React, { Component } from 'react';
import TopCard from '../Reusable/TopCard';
import Dashboard from '../Reusable/Dashboard';

class Top10Buy extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        content: "I wanna replace that guy!"
    };

    handleClick = () => {
        this.props.replace(this.state.content);
    };

    render() {
        return (
            <div>
            {/* <Dashboard></Dashboard> */}
            <TopCard name={"Top 10 stocks to buy"}></TopCard>
            </div>
        );
    }
}

export default Top10Buy;