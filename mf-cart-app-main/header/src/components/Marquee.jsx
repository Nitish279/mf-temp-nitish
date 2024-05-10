import React from "react";

const Marquee = () => {
  return (
    <div className="marquee-wrapper">
      <marquee behavior="scroll" direction="left">
        Market closed - opens at 08:00 on the next business day
      </marquee>
    </div>
  );
};

export default Marquee;
