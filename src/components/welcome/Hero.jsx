import React from "react";
import hero from "../../assets/Mount_Pico_de_Loro,_Nasugbu,_Philippines.jpg";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${hero})`,
        height: "100vh",
        marginTop: "-70px",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default Hero;
