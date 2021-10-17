import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Button from './Button';
import DataButton from '../data/DataButton';

class CardDeck extends React.Component {
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
      onClick,
    } = this.props;

    return (
      <div>
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <Button
          testid={ DataButton[1].testid }
          type={ DataButton[1].type }
          name={ cardName }
          className={ DataButton[1].className }
          text={ DataButton[1].text }
          onClick={ onClick }
        />
      </div>
    );
  }
}

CardDeck.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bol,
  deleteCardOfDeck: PropTypes.func,
}.isRequired;

export default CardDeck;
