import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { testid, type, name, className, text } = this.props;
    return (
      <button
        data-testid={ testid }
        type={ type === 'submit' ? 'submit' : 'button' }
        name={ name }
        className={ className }
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  testid: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
}.isRequired;

export default Button;
