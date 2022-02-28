import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="black b f3 ">
        <span className="ttc">{name}</span>, your current entry count is...
      </div>
      <div className="black b f1 ">{entries}</div>
    </div>
  );
};

export default Rank;
