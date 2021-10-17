import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import DataInput from '../data/DataInput';

class Search extends React.Component {
  render() {
    const {
      cardSearch,
      onInputChange,
    } = this.props;
    return (
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
    );
  }
}

Search.propTypes = {
  cardSearch: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default Search;
