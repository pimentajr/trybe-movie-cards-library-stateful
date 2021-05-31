import React, { Component } from 'react';

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form" action="">
          <label data-testid="title-input-label" htmlFor="title-add">
            Título
            <input
              data-testid="title-input"
              id="title-add"
              type="text"
              name="title"
              value={ this.state.title }
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle-add">
            Subtítulo
            <input
              data-testid="subtitle-input"
              id="subtitle-add"
              type="text"
              name="subtitle"
              value={ this.state.subtitle }
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="image-input-label" htmlFor="image-add">
            Imagem
            <input
              data-testid="image-input"
              id="image-add"
              type="text"
              name="imagePath"
              value={ this.state.imagePath }
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline-add">
            Sinopse
            <textarea
              data-testid="storyline-input"
              id="storyline-add"
              type="text"
              name="storyline"
              value={ this.state.storyline }
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating-add">
            Avaliação
            <input
              data-testid="rating-input"
              id="rating-add"
              type="number"
              name="rating"
              value={ this.state.rating }
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="genre-input-label" htmlFor="combobox">
            Gênero
            <select
              data-testid="genre-input"
              name=""
              value={ this.setState.genre }
              onChange={ this.handleChange }
              id="combobox"
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
