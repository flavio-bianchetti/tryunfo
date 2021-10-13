import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { testid, name, className, options } = this.props;
    return (
      <div>
        <label htmlFor="label">
          { name }
        </label>
        <select
          data-testid={ testid }
          name={ name }
          className={ className }
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
  className: PropTypes.string,
  options: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default Select;
