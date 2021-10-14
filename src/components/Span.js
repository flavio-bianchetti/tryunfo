import React from 'react';
import PropTypes from 'prop-types';

class Span extends React.Component {
  render() {
    const {
      testid,
      className,
      name,
      value,
    } = this.props;

    return (
      <span
        data-testid={ testid }
        className={ className }
        name={ name }
      >
        { value }
      </span>
    );
  }
}

Span.propTypes = {
  testid: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default Span;
