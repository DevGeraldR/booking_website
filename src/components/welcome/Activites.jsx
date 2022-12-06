import React from "react";
import image1 from "../../assets/Anino_River.jpg";
import image2 from "../../assets/Descending_Mt._Mataas_na_Gulod_towards_the_Dos_Picos_Valley_of_the_Palay-Palay-Mataas-na-Gulod_Protected_Landscape_of_Cavite.jpg";
import image3 from "../../assets/Mount_Pico_de_Loro,_Nasugbu,_Philippines.jpg";

function Activites() {
  return (
    <div className="max-w-[1140px] m-auto w-full px-4 py-16">
      <div className="p-10 flex flex-col gap-4 text-center">
        <h2 className="text-center text-gray-700 text-3xl font-bold">
          Activity
        </h2>
        <h1>No smoking</h1>
        <h1>No alcohol or any drug-related substance.</h1>
        <h1>No environmental violation will be tolerated</h1>
        <h1>Required waiver and assumption of risk</h1>
      </div>
      <div className="grid sm:grid-cols-6 gap-4">
        <div className="sm:col-span-2 col-span-2 row-span-2">
          <img className="w-full h-full object-cover" src={image1} alt="/" />
        </div>
        <div className="sm:col-span-2 col-span-2 row-span-2">
          <img className="w-full h-full object-cover" src={image2} alt="/" />
        </div>
        <div className="sm:col-span-2 col-span-2 row-span-2">
          <img className="w-full h-full object-cover" src={image3} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default Activites;
