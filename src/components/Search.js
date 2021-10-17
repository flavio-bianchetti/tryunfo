import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import Checkbox from './Checkbox';
import DataInput from '../data/DataInput';
import DataSelect from '../data/DataSelect';
import DataCheckbox from '../data/DataCheckbox';

class Search extends React.Component {
  render() {
    const {
      cardSearch,
      cardFilter,
      cardTrunfoFilter,
      onInputChange,
    } = this.props;
    return (
      <div>
        <div>
          <Input
            testid={ DataInput[2].testid }
            type={ DataInput[2].type }
            name={ DataInput[2].name }
            label={ DataInput[2].label }
            className={ DataInput[2].className }
            value={ cardSearch }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <Select
            testid={ DataSelect[1].testid }
            name={ DataSelect[1].name }
            label={ DataSelect[1].label }
            className={ DataSelect[1].className }
            options={ DataSelect[1].options }
            value={ cardFilter }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <Checkbox
            testid={ DataCheckbox[1].testid }
            name={ DataCheckbox[1].name }
            type={ DataCheckbox[1].type }
            className={ DataCheckbox[1].className }
            text={ DataCheckbox[1].text }
            value={ cardTrunfoFilter }
            onClick={ onInputChange }
          />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  cardSearch: PropTypes.string,
  cardFilter: PropTypes.string,
  cardTrunfoFilter: PropTypes.bool,
  onInputChange: PropTypes.func,
}.isRequired;

export default Search;
