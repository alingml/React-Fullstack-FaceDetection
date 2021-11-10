import React from "react";

import Tilt from "react-tilt";

import spy from "./spy.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 25 }}
        style={{
          height: 75,
          width: 75,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div className="Tilt-inner">
          <img
            src={spy}
            alt="spy"
            style={{
              width: "25px",
              height: "25px",
              display: "flex",
            }}
            className="mt4"
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
