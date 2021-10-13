import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { testid, type, name, className } = this.props;
    return (
      <div>
        <label htmlFor="label">
          { name }
        </label>
        <input
          data-testid={ testid }
          type={ type }
          name={ name }
          className={ className }
        />
      </div>
    );
  }
}

Input.propTypes = {
  testid: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
}.isRequired;

export default Input;
