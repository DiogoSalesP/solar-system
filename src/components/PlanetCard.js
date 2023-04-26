import React from 'react';
import Proptypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className={ planetName }>
        <div>
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        </div>
        <div>
          <p>{planetName}</p>
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planeName: Proptypes.string,
  planeImage: Proptypes.string,
}.isRequired;

export default PlanetCard;
