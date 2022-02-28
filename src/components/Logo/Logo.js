import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2 track-on-window"
        perspective={500}
        trackOnWindow={true}
      >
        <div className="inner-element pa3">
          <div>
            <img
              style={{ paddingTop: '5px' }}
              src={brain}
              alt="Smart Brain App Logo"
            />
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
