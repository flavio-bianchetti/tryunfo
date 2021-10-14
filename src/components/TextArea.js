import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const {
      testid,
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
        <textarea
          data-testid={ testid }
          name={ name }
          className={ className }
          value={ value }
          onChange={ onChange }
        />
      </div>
    );
  }
}

TextArea.propTypes = {
  testid: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default TextArea;
