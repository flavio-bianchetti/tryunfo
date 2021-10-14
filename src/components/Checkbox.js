import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const {
      testid,
      type,
      name,
      className,
      value,
      onChange,
      text,
    } = this.props;

    return (
      <div>
        <label htmlFor={ name }>
          <input
            data-testid={ testid }
            type={ type }
            name={ name }
            id={ name }
            className={ className }
            checked={ value }
            onChange={ onChange }
          />
          { text }
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  testid: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  text: PropTypes.string,
}.isRequired;

export default Checkbox;
