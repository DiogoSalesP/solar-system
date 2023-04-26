import React from 'react';
import Proptypes from 'prop-types';
import '../style/title.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="title">{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: Proptypes.string,
}.isRequired;

export default Title;
