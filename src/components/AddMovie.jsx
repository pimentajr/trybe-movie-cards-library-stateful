import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';
import Textarea from './Textarea';
import Select from './Select';
import Button from './Button';
import filterOptions from '../DataSecond';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  }

  handleClick() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    });
  }

  render() {
    const { handleChange: change, handleClick: click } = this;
    const { onClick: sendMovie } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const newMovieOptions = [];
    filterOptions.forEach((option) => {
      const { text, value } = option;
      if (text !== 'Todos') {
        newMovieOptions.push({ text, value, dataTestId: 'genre-option' });
      }
    });
    return (
      <form data-testid="add-movie-form">
        <Info text="Título" name="title" value={ title } change={ change } />
        <Info text="Subtítulo" name="subtitle" value={ subtitle } change={ change } />
        <Info
          text="Imagem"
          test="image-input"
          name="imagePath"
          value={ imagePath }
          change={ change }
        />
        <Textarea
          text="Sinopse"
          name="storyline"
          value={ storyline }
          change={ change }
        />
        <Info
          type="number"
          text="Avaliação"
          name="rating"
          value={ rating }
          change={ change }
        />
        <Select
          text="Gênero"
          name="genre"
          value={ genre }
          change={ change }
          options={ newMovieOptions }
        />
        <Button
          text="Adicionar filme"
          test="send-button"
          onClick={ () => { click(); sendMovie(this.state); } }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: {},
};

export default AddMovie;
