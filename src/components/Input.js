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
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Input;
