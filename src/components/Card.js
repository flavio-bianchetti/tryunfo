import React from 'react';
import PropTypes from 'prop-types';
import Span from './Span';
import Image from './Image';
import DataSpan from '../data/DataSpan';
import DataImage from '../data/DataImage';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    // const isCardTrunfo = () => (cardTrunfo ? 'Super Trunfo' : '');

    const spanValues = [
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      // isCardTrunfo(),
    ];

    return (
      <div>
        <Image
          testid={ DataImage[0].testid }
          className={ DataImage[0].className }
          name={ DataImage[0].name }
          src={ cardImage }
          alt={ cardName }
        />
        {
          DataSpan
            .filter((span) => span.name !== 'trunfoCard')
            .map((span, index) => (
              <Span
                key={ span.name }
                testid={ span.testid }
                className={ span.className }
                name={ span.name }
                value={ spanValues[index] }
              />
            ))
        }
        <Span
          checked={ () => ({ cardTrunfo: true }) }
        />
        {
          cardTrunfo ? <Span
            testid={ DataSpan[6].testid }
            className={ DataSpan[6].className }
            name={ DataSpan[6].name }
            value="Super Trunfo"
          />
            : <span />
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bol,
  isCardTrunfo: PropTypes.func,
}.isRequired;

export default Card;
