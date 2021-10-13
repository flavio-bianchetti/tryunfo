import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import Checkbox from './Checkbox';
import Button from './Button';
import DataInput from '../data/DataInput';
import DataTextArea from '../data/DataTextArea';
import DataNumber from '../data/DataNumber';
import DataSelect from '../data/DataSelect';
import DataCheckbox from '../data/DataCheckbox';
import DataButton from '../data/DataButton';

class Form extends React.Component {
  render() {
    return (
      <form>
        <h2>Adicionar nova carta</h2>
        <Input
          testid={ DataInput[0].testid }
          type={ DataInput[0].type }
          name={ DataInput[0].name }
          className={ DataInput[0].className }
        />
        <TextArea
          testid={ DataTextArea[0].testid }
          name={ DataTextArea[0].name }
          className={ DataTextArea[0].className }
        />
        {
          DataNumber.map((number) => (
            <Input
              key={ number.name }
              testid={ number.testid }
              type={ number.type }
              name={ number.name }
              className={ number.className }
            />
          ))
        }
        <Input
          testid={ DataInput[1].testid }
          type={ DataInput[1].type }
          name={ DataInput[1].name }
          className={ DataInput[1].className }
        />
        <Select
          testid={ DataSelect[0].testid }
          name={ DataSelect[0].name }
          className={ DataSelect[0].className }
          options={ DataSelect[0].options }
        />
        <Checkbox
          testid={ DataCheckbox[0].testid }
          name={ DataCheckbox[0].name }
          type={ DataCheckbox[0].type }
          className={ DataCheckbox[0].className }
          text={ DataCheckbox[0].text }
        />
        <Button
          testid={ DataButton[0].testid }
          type={ DataButton[0].type }
          name={ DataButton[0].name }
          className={ DataButton[0].className }
          text={ DataButton[0].text }
        />
      </form>
    );
  }
}

export default Form;
