import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../components/Context/Context";

function Form() {
  const navigate = useNavigate();
  const { visitors, setVisitors } = useGlobal();

  const addInputField = () => {
    setVisitors([
      ...visitors,
      {
        fullName: "",
        address: "",
        email: "",
        age: "",
        contactNumber: "",
        citezenship: "",
      },
    ]);
  };
  const removeInputFields = (index) => {
    const rows = [...visitors];
    rows.splice(index, 1);
    setVisitors(rows);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const list = [...visitors];
    list[index][name] = value;
    setVisitors(list);
  };

  return (
    <form
      className="flex flex-col min-h-screen p-6 bg-gray-100 flex items-center justify-center"
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/receipt");
      }}
    >
      {visitors.map((value, index) => {
        return (
          <div className="container max-w-screen-lg mx-auto" key={index}>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Visitors Details</p>
                  <p>Please input all the visitors detail.</p>
                </div>
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        required
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Full Name"
                        value={value.fullName}
                        onChange={(e) => {
                          handleChange(index, e);
                        }}
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
                        value={value.address}
                        onChange={(e) => {
                          handleChange(index, e);
                        }}
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
                        value={value.age}
                        onChange={(e) => {
                          handleChange(index, e);
                        }}
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
                        placeholder="visitor@gmail.com"
                        value={value.email}
                        onChange={(e) => {
                          handleChange(index, e);
                        }}
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
                        value={value.contactNumber}
                        onChange={(e) => {
                          handleChange(index, e);
                        }}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label>Citezenship</label>
                      <select
                        name="citezenship"
                        required
                        value={value.citezenship}
                        placeholder="Citezenship"
                        onChange={(e) => {
                          handleChange(index, e);
                        }}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      >
                        <option value="Filipino">Filipino</option>
                        <option value="Foreigner">Foreigner</option>
                      </select>
                    </div>
                    {visitors.length !== 1 && (
                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end gap-4">
                          <button
                            type="button"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={(e) => {
                              removeInputFields(index);
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="md:col-span-5 text-right">
        <div className="inline-flex items-end gap-4">
          <button
            type="button"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={addInputField}
          >
            Add
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Book
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
