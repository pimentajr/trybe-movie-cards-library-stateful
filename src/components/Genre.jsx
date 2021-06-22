import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { genre, handleChange } = this.props;

    return (
      <label data-testid="genre-input-label" htmlFor="text6">
        Gênero
        <select
          data-testid="genre-input"
          id="text6"
          type="text"
          name="genre"
          value={ genre }
          onChange={ handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  genre: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Genre;
