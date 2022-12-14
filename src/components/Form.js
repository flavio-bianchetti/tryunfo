import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import Checkbox from './Checkbox';
import Button from './Button';
import Span from './Span';
import DataInput from '../data/DataInput';
import DataTextArea from '../data/DataTextArea';
import DataNumber from '../data/DataNumber';
import DataSelect from '../data/DataSelect';
import DataCheckbox from '../data/DataCheckbox';
import DataButton from '../data/DataButton';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const cardAttr = [cardAttr1, cardAttr2, cardAttr3];

    return (
      <form>
        <h2>Adicionar nova carta</h2>
        <Input
          testid={ DataInput[0].testid }
          type={ DataInput[0].type }
          name={ DataInput[0].name }
          label={ DataInput[0].label }
          className={ DataInput[0].className }
          value={ cardName }
          onChange={ onInputChange }
        />
        <TextArea
          testid={ DataTextArea[0].testid }
          name={ DataTextArea[0].name }
          label={ DataTextArea[0].label }
          className={ DataTextArea[0].className }
          value={ cardDescription }
          onChange={ onInputChange }
        />
        {
          DataNumber.map((number, index) => (
            <Input
              key={ number.name }
              testid={ number.testid }
              type={ number.type }
              name={ number.name }
              label={ number.label }
              className={ number.className }
              min={ number.min }
              max={ number.max }
              value={ cardAttr[index] }
              onChange={ onInputChange }
            />
          ))
        }
        <Input
          testid={ DataInput[1].testid }
          type={ DataInput[1].type }
          name={ DataInput[1].name }
          label={ DataInput[1].label }
          className={ DataInput[1].className }
          value={ cardImage }
          onChange={ onInputChange }
        />
        <Select
          testid={ DataSelect[0].testid }
          name={ DataSelect[0].name }
          label={ DataSelect[0].label }
          className={ DataSelect[0].className }
          options={ DataSelect[0].options }
          value={ cardRare }
          onChange={ onInputChange }
        />
        {
          hasTrunfo
          && <Span value="Voc?? j?? tem um Super Trunfo em seu baralho" />
        }

        {
          !hasTrunfo
            && <Checkbox
              testid={ DataCheckbox[0].testid }
              name={ DataCheckbox[0].name }
              type={ DataCheckbox[0].type }
              className={ DataCheckbox[0].className }
              text={ DataCheckbox[0].text }
              value={ cardTrunfo }
              onClick={ onInputChange }
            />
        }
        <Button
          testid={ DataButton[0].testid }
          type={ DataButton[0].type }
          name={ DataButton[0].name }
          className={ DataButton[0].className }
          text={ DataButton[0].text }
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
