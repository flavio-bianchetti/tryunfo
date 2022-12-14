import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardDeck from './components/CardDeck';
import Search from './components/Search';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardsSaved: [],
      cardsNumbers: 0,
      cardSearch: '',
      cardFilter: 'todas',
      cardTrunfoFilter: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.setStateButtonSave = this.setStateButtonSave.bind(this);
    this.checkStatusInputFields = this.checkStatusInputFields.bind(this);
    this.checkMinMaxInputFields = this.checkMinMaxInputFields.bind(this);
    this.checkMaxSumInputFields = this.checkMaxSumInputFields.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.cleanFormAfterSave = this.cleanFormAfterSave.bind(this);
    this.deleteCardOfDeck = this.deleteCardOfDeck.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox'
      ? target.checked
      : `${target.value}`;

    this.setState({
      [name]: value,
    }, this.setStateButtonSave);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    this.setState((previusState) => ({
      cardsSaved: [...previusState.cardsSaved, this.saveCard()],
    }));
    this.setState((previusState) => ({
      cardsNumbers: previusState.cardsNumbers + 1,
    }));
    this.cleanFormAfterSave();
  }

  setStateButtonSave() {
    if (
      this.checkStatusInputFields()
      && this.checkMinMaxInputFields()
      && this.checkMaxSumInputFields()
    ) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  setStateCheckBoxSuperTrunfo() {
    const { cardsSaved } = this.state;
    const isSuperTrunfo = cardsSaved.some((card) => card.cardTrunfo);
    if (isSuperTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    } else {
      this.setState({
        hasTrunfo: false,
      }, this.setStateButtonSave);
    }
  }

  deleteCardOfDeck({ target }) {
    const { name } = target;
    const { cardsSaved } = this.state;
    this.setState({
      cardsSaved: [...cardsSaved.filter((card) => card.cardName !== name)],
    }, this.setStateCheckBoxSuperTrunfo);
  }

  checkStatusInputFields() {
    const {
      cardName,
      cardDescription,
      cardImage,
    } = this.state;
    return (
      cardName.length >= 1
      && cardDescription.length >= 1
      && cardImage.length >= 1
    );
  }

  checkMinMaxInputFields() {
    const max = 90;
    const min = 0;
    const {
      cardAttr1, cardAttr2, cardAttr3,
    } = this.state;
    return (
      Number(cardAttr1) >= min
      && Number(cardAttr1) <= max
      && Number(cardAttr2) >= min
      && Number(cardAttr2) <= max
      && Number(cardAttr3) >= min
      && Number(cardAttr3) <= max
    );
  }

  checkMaxSumInputFields() {
    const maxSum = 210;
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    return (
      Number(cardAttr1)
        + Number(cardAttr2)
        + Number(cardAttr3) <= maxSum
    );
  }

  saveCard() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, cardsNumbers,
    } = this.state;
    return {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardsNumbers,
    };
  }

  cleanFormAfterSave() {
    this.setState(({ cardsSaved }) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: cardsSaved.some((card) => card.cardTrunfo),
      cardSearch: '',
      cardFilter: 'todas',
      cardTrunfoFilter: false,
      isSaveButtonDisabled: false,
    }));
  }

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      cardsSaved, cardsNumbers, cardSearch, cardFilter, cardTrunfoFilter,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          setMaxAttrCard={ this.setMaxAttrCard }
        />
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
        <Search
          cardSearch={ cardSearch }
          cardFilter={ cardFilter }
          cardTrunfoFilter={ cardTrunfoFilter }
          onInputChange={ this.onInputChange }
        />
        {
          cardsSaved.filter((filter) => filter.cardName.includes(cardSearch)
            && (cardFilter === 'todas'
              ? filter.cardRare : filter.cardRare === cardFilter)
            && (cardTrunfoFilter === false
              ? (filter.cardTrunfo || !filter.cardTrunfo) : filter.cardTrunfo === true))
            .map((card, index) => (
              <CardDeck
                key={ index }
                id={ card.cardName }
                cardsNumbers={ cardsNumbers }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
                onClick={ this.deleteCardOfDeck }
              />
            ))
        }
      </div>
    );
  }
}

export default App;
