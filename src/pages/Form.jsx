import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, Fragment } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../components/Context/Context";
import { db } from "../components/firebase/firebase";
import { Dialog, Transition } from "@headlessui/react";

function Form() {
  const navigate = useNavigate();
  const { visitors, setVisitors, selectedDate, selectedTime, setSelectedTime } =
    useGlobal();
  const [visitorsNumber, setVisitorsNumber] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (selectedDate && selectedTime) {
      const visitorsNumberRef = doc(
        db,
        "bookDetails",
        selectedDate.toDate().toDateString(),
        "bookTime",
        selectedTime
      );

      const unsub = onSnapshot(visitorsNumberRef, (doc) => {
        if (doc.exists()) {
          setVisitorsNumber(doc.data().visitorsNumber);
        }
        setIsLoading(false);
      });
      return () => unsub();
    } else {
      setIsOpen(true);
    }
  }, [selectedDate, selectedTime]);

  const addInputField = () => {
    setVisitors([
      ...visitors,
      {
        fullName: "",
        address: "",
        email: "",
        age: "",
        companySchoolOrg: "",
        contactNumber: "",
        citezenship: "Filipino",
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
    <>
      <form
        className="flex flex-col min-h-screen p-6 bg-gray-100 flex items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/terms_and_condition");
        }}
      >
        <div className="flex flex-col md:flex-row gap-5 mb-6 w-full justify-center">
          <div className="text-blue-900 bg-white rounded shadow-lg p-1 px-1 md:p-2">
            <h1>
              <span className="text-gray-400">Date:</span>{" "}
              {selectedDate.toDate().toDateString()}
            </h1>
          </div>
          <div className="text-blue-900 bg-white rounded shadow-lg p-1 px-1 md:p-2">
            <h1>
              {" "}
              <span className="text-gray-400">Time:</span> {selectedTime}
            </h1>
          </div>
          <div className="text-blue-900 bg-white rounded shadow-lg p-1 px-1 md:p-2">
            {isLoading ? (
              <span>Checking slot...</span>
            ) : (
              <h1>
                {" "}
                <span className="text-gray-400">Available slot:</span>{" "}
                {10 - visitorsNumber}
              </h1>
            )}
          </div>
        </div>

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
                        <label>Compay/School/Org</label>
                        <input
                          type="text"
                          name="companySchoolOrg"
                          required
                          id="companySchoolOrg"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Company/School/Org"
                          value={value.companySchoolOrg}
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
                              className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={() => {
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
              className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => {
                setSelectedTime("");
                navigate("/book_schedule");
              }}
            >
              Book New Date
            </button>
            {!isLoading && (
              <button
                disabled={visitorsNumber + visitors.length >= 10}
                type="button"
                className={`${
                  visitorsNumber + visitors.length >= 10
                    ? "bg-gray-200 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500 "
                    : "bg-green-100 text-green-900 hover:bg-green-200 focus-visible:ring-green-500 "
                } inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
                onClick={addInputField}
              >
                Add
              </button>
            )}
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Book
            </button>
          </div>
        </div>
      </form>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setIsOpen(false);
            navigate("/book_schedule");
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl border border-red-300 bg-red-50 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Sorry no date found
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Please select/reselect date.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white bg-red-900 hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        setIsOpen(false);
                        navigate("/book_schedule");
                      }}
                    >
                      Okay
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Form;
