import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="searchText">
          Inclui o texto
          <input
            name="searchText"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
            type="text"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            name="bookmarkedOnly"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
            type="checkbox"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="selectedGenre">
          Filtrar por gênero
          <select
            name="selectedGenre"
            data-testid="select-input"
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
