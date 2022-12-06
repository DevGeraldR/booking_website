import React from "react";

function ContactUs() {
  return (
    <div className="flex h-auto p-10 w-full flex-col gap-10 justify-center">
      <div className="flex justify-center items-center flex-col">
        <div className="text-3xl font-bold">Contact Us</div>
        <div className="w-[80px] h-0.5 bg-green-900 my-5"></div>
        <span className="text-gray-400">
          Any question or concerns? Contact and visit us.
        </span>
      </div>
      <div className="grid lg:grid-cols-3 mx-auto gap-10 mt-6">
        <div className="lg:col-span-1 col-span-3 text-center">
          <h6 className="font-medium">ADDRESS</h6>
          <ul>
            <li className="py-2 text-sm">DENR Park Station</li>
            <li className="py-2 text-sm">
              So. Malauyas, Sapang I, Ternate, Cavite
            </li>
            <li className="py-2 text-sm">Provincial Environment and Natural</li>
            <li className="py-2 text-sm">Resources (PENRO)</li>
            <li className="py-2 text-sm">
              Brgy. Conchu, Trece Martires City, Cavite
            </li>
          </ul>
        </div>
        <div className="lg:col-span-1 col-span-3 text-center">
          <h6 className="font-medium">OFFICE HOURS</h6>
          <ul>
            <li className="py-2 text-sm">Phone:</li>
            <li className="py-2 text-sm">(046) 419-2474</li>
            <li className="py-2 text-sm">(046) 509-0533</li>
            <li className="py-2 text-sm">Email Address:</li>
            <li className="py-2 text-sm">mppmngl.picodeloro@gmail.com</li>
            <li className="py-2 text-sm">penrocavite@yahoo.com</li>
          </ul>
        </div>
        <div className="lg:col-span-1 col-span-3 text-center">
          <h6 className="font-medium">CONTACT INFO</h6>
          <ul>
            <li className="py-2 text-sm">Monday – Sunday</li>
            <li className="py-2 text-sm">(8:00am-5:00pm</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
