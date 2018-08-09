import React from "react";
import PropTypes from "prop-types";

import './loading.css';

class Loading extends React.Component {
  render() {
    const divStyle = {
      height: this.props.height
    };

    return (
      <div style={divStyle}>
        {this.props.loading ? (
          <center>
            <br />
            <br />
            <h4 className="title">Loading...</h4>
            <div className="load-bar">
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
            </div>
            <br />
            <br />
          </center>
        ) : (
          <div className="notification text-center">
            <br />
            {this.props.message}
          </div>
        )}
      </div>
    );
  }
}

Loading.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string,
  height: PropTypes.string
};

export default Loading;
