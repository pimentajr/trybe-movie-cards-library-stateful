import React, { Component } from 'react';
import PropTypes from 'prop-types';

// implement AddMovie component here
class InputSearch extends Component {
  render() {
    const { srtTxt, srcOnCh } = this.props;
    return (
      <label htmlFor="id" data-testid="text-input-label">
        Inclui o texto:
        <input
          id="id"
          type="text"
          value={ srtTxt }
          onChange={ srcOnCh }
          data-testid="text-input"
        />
      </label>
    );
  }
}

export default InputSearch;

InputSearch.propTypes = {
  srtTxt: PropTypes.string.isRequired,
  srcOnCh: PropTypes.func.isRequired,
};
