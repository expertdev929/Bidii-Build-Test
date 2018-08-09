import React from 'react';
import PropTypes from 'prop-types';

import './checkbox.css';

class CheckBox extends React.Component {
  render() {
    return (
      <label className="checkbox">
        <input
          type="checkbox"
          checked={this.props.checked}
          onClick={(e) => this.props.onClick(e)} 
        />
        <span className="checkmark"></span>
      </label>
    )
  }
}

CheckBox.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CheckBox;