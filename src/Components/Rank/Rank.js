import React from "react";

const Rank = ({ entries, name }) => {
  return (
    <div className="tc">
      <div className="white f3">{`${name}, your current rank is:`}</div>
      <div className="white f3">{entries}</div>
    </div>
  );
};

export default Rank;
