import React from 'react';
import brainLogo from './brain.png';
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () => {
  return (
    <Tilt
      className="ma4 mt0 track-on-window"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.75}
      glarePosition="all"
      scale={1.02}
      trackOnWindow={true}
    >
      <div className="Tilt inner-element">
        <img src={brainLogo} alt="Smart Brain App Logo" />
      </div>
    </Tilt>
  );
};

export default Logo;
