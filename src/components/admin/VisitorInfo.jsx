import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../Context/Context";

function VisitorInfo() {
  const { visitor } = useGlobal();
  const navigate = useNavigate();
  return (
    <div className="overflow-scroll max-h-screen w-full pb-[60px] bg-gray-100 h-full">
      <div className="flex justify-center">
        <div className="my-5 w-full max-w-2xl bg-white p-5 rounded-xl shadow-lg">
          <h1>Transaction #: {visitor.transactionNumber}</h1>
          <h1>Date: {visitor.scheduledDate}</h1>
          <h1 className="pb-2">Time: {visitor.scheduledTime}</h1>
          {visitor.visitorInfo.map((v, index) => {
            return (
              <div key={index}>
                <div className="w-full h-0.5 bg-green-900 my-2"></div>
                <ul key={v.fullName}>
                  <li>Name: {v.fullName}</li>
                  <li>Age: {v.age}</li>
                  <li>Citezenship: {v.citezenship}</li>
                  <li>Contact Number: {v.contactNumber}</li>
                  <li>Email: {v.email}</li>
                </ul>
              </div>
            );
          })}
          <div className="w-full h-0.5 bg-green-900 my-2"></div>
          <div className="mt-4">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white bg-red-900 hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
              onClick={() => {
                navigate("/admin");
              }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitorInfo;
