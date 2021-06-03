import React from 'react';
import PropTypes from 'prop-types';

class MovieTitles extends React.Component {
  // render
  render() {
    // declaring initial info
    const {
      subtitle,
      title,
      imagePath,
      handleChange,
    } = this.props;

    return (
      // forms with Movie's data
      <fieldset>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="title-input"
            value={ title }
            data-testid="title-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle-input"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            id="image-input"
            value={ imagePath }
            data-testid="image-input"
            onChange={ handleChange }
          />
        </label>
      </fieldset>
    );
  }
}

// propTypes
MovieTitles.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

// exports
export default MovieTitles;
