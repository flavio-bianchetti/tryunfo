import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { testid, name, className } = this.props;
    return (
      <div>
        <label htmlFor="label">
          { name }
        </label>
        <textarea
          data-testid={ testid }
          name={ name }
          className={ className }
        />
      </div>
    );
  }
}

TextArea.propTypes = {
  testid: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
}.isRequired;

export default TextArea;
