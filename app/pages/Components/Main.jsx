import React from "react";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    console.log("Main");
  };
  render() {
    return (
      <React.Fragment>
        <img
          src="\images\stocks3.jpg"
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </React.Fragment>
    );
  }
}

export default Main;