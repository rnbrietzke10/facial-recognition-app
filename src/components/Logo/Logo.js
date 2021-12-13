import React from 'react';
import Tilt from 'react-parallax-tilt';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="track-on-window"
        perspective={500}
        style={{ height: '150px', width: '150px', background: 'blue' }}
        trackOnWindow={true}
      >
        <div className="inner-element">
          <div>Smart Brain</div>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
