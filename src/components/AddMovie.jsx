import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import StoryLine from './StoryLine';
// import Rating from './Rating';
// import Genre from './Genre';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
    this.handleChangeImagePath = this.handleChangeImagePath.bind(this);
    this.handleChangeStoryLine = this.handleChangeStoryLine.bind(this);
  }

  handleChangeTitle({ target }) {
    this.setState({ title: target.value });
  }

  handleChangeSubtitle({ target }) {
    this.setState({ subtitle: target.value });
  }

  handleChangeImagePath({ target }) {
    this.setState({ imagePath: target.value });
  }

  handleChangeStoryLine({ target }) {
    this.setState({ storyline: target.value });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } handleChangeTitle={ this.handleChangeTitle } />
        <Subtitle
          subtitle={ subtitle }
          handleChangeSubtitle={ this.handleChangeSubtitle }
        />
        <ImagePath
          imagePath={ imagePath }
          handleChangeImagePath={ this.handleChangeImagePath }
        />
        <StoryLine
          storyLine={ storyline }
          handleChangeStoryLine={ this.handleChangeStoryLine }
        />
      </form>
    );
  }
}

export default AddMovie;
// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
