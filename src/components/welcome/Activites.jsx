import React from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

function Activites() {
  return (
    <div className="max-w-[1140px] m-auto w-full px-4 py-16" id="activities">
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
