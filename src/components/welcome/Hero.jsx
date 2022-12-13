import React from "react";
import hero from "../../assets/Mount_Pico_de_Loro,_Nasugbu,_Philippines.jpg";
import logo1 from "../../assets/PAMB LOGO ON BLACK.png";
import logo2 from "../../assets/PENRO_Logo-removebg.png";

const Hero = () => {
  return (
    <div
      id="home"
      style={{
        backgroundImage: `url(${hero})`,
        height: "100vh",
        marginTop: "-70px",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-start items-end h-full pl-5">
        <img
          className="md:w-[95px] md:h-[95px] h-[65px] w-[65px] mb-4"
          src={logo1}
          alt=""
        />
        <img
          className="md:w-[125px] md:h-[125px] h-[93px] w-[93px]"
          src={logo2}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
