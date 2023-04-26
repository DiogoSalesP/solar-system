import React from 'react';
import Proptypes from 'prop-types';
import '../style/missions.css';
import yearImage from '../images/Vector-1.png';
import countryImage from '../images/Vector-2.png';
import destinationImage from '../images/Vector-3.png';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div>
        <div className="container-name">
          <p>{name}</p>
        </div>
        <div className="container-data">
          <div className="container-data">
            <img src={ yearImage } alt="foto data" width="20" height="20" />
            <p>{year}</p>
          </div>
          <div className="container-data">
            <img src={ countryImage } alt="foto data" width="20" height="20" />
            <p>{country}</p>
          </div>
          <div className="container-data">
            <img src={ destinationImage } alt="foto data" width="20" height="20" />
            <p>{destination}</p>
          </div>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: Proptypes.string,
  year: Proptypes.number,
  country: Proptypes.string,
  destination: Proptypes.string,
}.isRequired;

export default MissionCard;
