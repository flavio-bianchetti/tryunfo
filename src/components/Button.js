import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const {
      testid,
      type,
      name,
      className,
      text,
      onClick,
      disabled,
    } = this.props;

    return (
      <input
        data-testid={ testid }
        type={ type === 'submit' ? 'submit' : 'button' }
        name={ name }
        className={ className }
        disabled={ disabled }
        onClick={ onClick }
        value={ text }
      />
    );
  }
}

Button.propTypes = {
  testid: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default Button;
