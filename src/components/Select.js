import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      testid,
      name,
      label,
      className,
      options,
      value,
      onChange,
    } = this.props;

    return (
      <div>
        <label htmlFor="label">
          { label }
        </label>
        <select
          data-testid={ testid }
          name={ name }
          className={ className }
          value={ value }
          onChange={ onChange }
        >
          {
            options.map((option) => (
              <option
                key={ option }
                value={ option }
              >
                { option }
              </option>
            ))
          }
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  testid: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.objectOf(PropTypes.string),
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Select;
