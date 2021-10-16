import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      testid,
      type,
      name,
      label,
      className,
      min,
      max,
      value,
      onChange,
    } = this.props;

    return (
      <div>
        <label htmlFor="label">
          { label }
        </label>
        <input
          data-testid={ testid }
          type={ type }
          name={ name }
          className={ className }
          min={ min }
          max={ max }
          value={ value }
          onChange={ onChange }
        />
      </div>
    );
  }
}

Input.propTypes = {
  testid: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Input;
