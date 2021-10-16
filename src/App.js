import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
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
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.setStateButtonSave = this.setStateButtonSave.bind(this);
    this.checkStatusInputFields = this.checkStatusInputFields.bind(this);
    this.checkMinMaxInputFields = this.checkMinMaxInputFields.bind(this);
    this.checkMaxSumInputFields = this.checkMaxSumInputFields.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.cleanFormAfterSave = this.cleanFormAfterSave.bind(this);
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

  onSaveButtonClick() {
    this.setState((previusState) => ({
      cardsSaved: [...previusState.cardsSaved, this.saveCard()],
    }));

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }

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
      cardAttr1,
      cardAttr2,
      cardAttr3,
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
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
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
    };
  }

  cleanFormAfterSave() {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: false,
    });
  }

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
      hasTrunfo,
      isSaveButtonDisabled,
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
        {/* cards */}
      </div>
    );
  }
}

export default App;
