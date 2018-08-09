import React from "react";
import PropTypes from "prop-types";

import './search.css';

class Search extends React.Component {
  state = {
    searchText: ""
  };

  onSearchChanged = (e) => {
    this.setState({ searchText: e.target.value });

    if (!e.target.value || e.target.value.length >= 2) {
      setTimeout(
        function() {
          this.props.changeSearch(this.state.searchText);
        }.bind(this),
        200
      );
    }
  };

  render() {
    return (
      <div className={this.props.className}>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1"><i className="fas fa-search"></i></span>
          </div>
          <input
            type="text"
            className="form-control"
            value={this.state.searchText}
            onChange={(e) => this.onSearchChanged(e)}
          />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  className: PropTypes.string
};

export default Search;