import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../style/planets.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Title headline="Planetas" />
        </div>
        <div className="planets">
          {planets.map((planet, index) => (
            <div key={ index }>
              <PlanetCard
                key={ index }
                planetName={ planet.name }
                planetImage={ planet.image }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
