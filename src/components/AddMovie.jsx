import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // prettier-ignore
  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            onChange={ this.onChangeHandler }
            value={ title }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            onChange={ this.onChangeHandler }
            value={ subtitle }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            onChange={ this.onChangeHandler }
            value={ imagePath }
            data-testid="image-input"
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
