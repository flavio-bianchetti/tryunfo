import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const {
      testid,
      className,
      name,
      src,
      alt,
    } = this.props;

    return (
      <img
        data-testid={ testid }
        className={ className }
        name={ name }
        src={ src }
        alt={ alt }
      />
    );
  }
}

Image.propTypes = {
  testid: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
}.isRequired;

export default Image;
