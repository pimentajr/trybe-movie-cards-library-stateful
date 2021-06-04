// implement AddMovie component here
import React, { Component } from 'react';
import Image from './AddMovieComponents/Image';
import SubTitle from './AddMovieComponents/SubTitle';

export default class AddMovie extends Component {
  constructor() {
    super();

    // this.state = {
    //   subtitle: '',
    //   title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    // };

    this.state = {
      subtitle: '',
      imagePath: '',
      storyline: '',
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    console.log('Abaixo temos o this');
    console.log(this);
  }

  render() {
    // const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { subtitle, imagePath, storyline } = this.state;
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          {/* <label data-testid="title-input-label" htmlFor="title-input">
            Título
            <input
              type="text"
              data-testid="title-input"
              name="title"
              defaultValue={ subtitle }
              onChange={ this.changeState }
            />
          </label> */}
          <Image defaultValue={ imagePath } onChange={ this.changeState } />
          <SubTitle defaultValue={ subtitle } onChange={ this.changeState } />
        </form>
      </div>
    );
  }
}
