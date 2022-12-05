import React from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-600">
              <p className="font-medium text-lg">Personal Details</p>
              <p>Please fill out all the fields.</p>
            </div>
            <form
              className="lg:col-span-2"
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/receipt");
              }}
            >
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-5">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fulName"
                    id="fullName"
                    required
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="Full Name"
                  />
                </div>

                <div className="md:col-span-5">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    required
                    id="address"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="Address"
                  />
                </div>

                <div className="md:col-span-5">
                  <label>Age</label>
                  <input
                    type="text"
                    name="age"
                    required
                    id="age"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="Age"
                  />
                </div>

                <div className="md:col-span-5">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    id="email"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="customer@gmail.com"
                  />
                </div>

                <div className="md:col-span-5">
                  <label>Contact Number</label>
                  <input
                    type="text"
                    name="contactNumber"
                    required
                    id="contactNumber"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="Contact Number"
                  />
                </div>

                <div className="md:col-span-5">
                  <label>Citezenship</label>
                  <input
                    type="text"
                    name="citezenship"
                    required
                    id="citezenship"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="Citezenship"
                  />
                </div>

                <div className="md:col-span-5 text-right">
                  <div className="inline-flex items-end">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
