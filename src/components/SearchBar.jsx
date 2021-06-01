// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange 
    } = this.props;

    return(
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">Inclui o texto 
            <input data-testid="text-input" type="text" value={searchText} onChange={onSearchTextChange}>            
            </input>
          </label>
          <label data-testid="checkbox-input-label">Mostrar somente favoritos
            <input data-testid="checkbox-input" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange}/>
          </label>
          <label data-testid="select-input-label">
            Filtrar por gênero
            <select data-testid="select-input" value={selectedGenre} name="" onChange={onSelectedGenreChange}>
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>  
          </label>
        </form>
      </div>
    )
  }
}

// SearchBar.PropTypes = {
//   searchText: PropTypes.string,
//   onSearchTextChange: PropTypes.func,
//   bookmarkedOnly: PropTypes.bool,
//   onBookmarkedChange: PropTypes.func,
//   selectedGenre: PropTypes.string,
//   onSelectedGenreChange: PropTypes.func,
// }

export default SearchBar;