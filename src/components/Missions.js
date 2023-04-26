import React from 'react';
import '../style/missions.css';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div>
        <Title headline="Missões" />
        <div className="container">
          {missions.map((mission, index) => (
            <div className="sub-container" key={ index }>
              <MissionCard
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
