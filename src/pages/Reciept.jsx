import React, { Fragment, useMemo, useRef, useState } from "react";
import { useGlobal } from "../components/Context/Context";
import { v4 as uuid } from "uuid";
import { db } from "../components/firebase/firebase";
import { setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { useEffect } from "react";
import logo from "../assets/PAMB LOGO ON BLACK.png";
import ReactToPrint from "react-to-print";

function Reciept() {
  const randomId = useMemo(() => uuid(), []);
  const { selectedTime, selectedDate, visitors, setVisitors } = useGlobal();
  const transactionId = randomId.slice(0, 8);
  let total = 0;
  const navigate = useNavigate();
  const [isSuccessfulOpen, setIsSuccessfulOpen] = useState(false);
  const [isDangerOpen, setIsDangerOpen] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPrinted, setIsPrinted] = useState(false);
  const currentDate = new Date();
  let componentRef = useRef(null);

  useEffect(() => {
    if (!selectedTime || !selectedDate) {
      setIsDangerOpen(true);
    }
  }, [setIsDangerOpen, selectedTime, selectedDate]);

  const handleClickBook = async () => {
    setIsLoading(true);
    const visitorRef = doc(db, "visitors", transactionId);
    const timeRef = doc(
      db,
      "bookDetails",
      selectedDate.toDate().toDateString(),
      "bookTime",
      selectedTime
    );

    const docSnap = await getDoc(timeRef);

    if (docSnap.exists()) {
      if (docSnap.data().visitorsNumber + visitors.length > 10) {
        setIsWarningOpen(true);
        return;
      }
      await updateDoc(timeRef, {
        visitorsNumber: docSnap.data().visitorsNumber + visitors.length,
      });
    } else {
      await setDoc(timeRef, {
        time: selectedTime,
        visitorsNumber: visitors.length,
      });
    }

    await setDoc(visitorRef, {
      transactionNumber: transactionId,
      scheduledDate: selectedDate.toDate().toDateString(),
      scheduledTime: selectedTime,
      visitorInfo: visitors,
    });
    setIsLoading(false);
    setVisitors([
      {
        fullName: "",
        address: "",
        email: "",
        age: "",
        contactNumber: "",
        citezenship: "Filipino",
      },
    ]);
    setIsSuccessfulOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 w-full">
          <p className="font-bold">Save printed copy</p>
          <p>
            Make sure to save printed copy of the receipt as this will be the
            proof of your booking.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <div
            className="w-full flex justify-center items-center"
            ref={componentRef}
          >
            <div className="lg:w-3/5 bg-white shadow-lg">
              <div className="flex justify-between pt-4 md:px-4 px-2">
                <div className="w-full flex justify-between flex-row gap-2">
                  <div>
                    <h1 className="text-3xl italic font-extrabold  text-green-900">
                      MPPMNGPL
                    </h1>
                    <p className="text-base">
                      TRANSACTION ID #: {transactionId}
                    </p>
                    <p className="text-base">
                      {currentDate.toLocaleString().toString()}
                    </p>
                  </div>
                  <div>
                    <img
                      className="md:w-[90px] md:h-[90px] h-[60px] w-[60px] mb-1"
                      src={logo}
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-0.5 bg-green-900"></div>
              <div className="flex justify-between p-4">
                <div>
                  <h6 className="font-bold">
                    Book Date :
                    <span className="pl-2 text-sm font-medium">
                      {selectedDate.toDate().toDateString()}
                    </span>
                  </h6>
                  <h6 className="font-bold">
                    Book Time :
                    <span className="pl-2 text-sm font-medium">
                      {selectedTime}
                    </span>
                  </h6>
                </div>
              </div>
              <div className="flex justify-center p-4">
                <div className="border-b border-gray-200 shadow overflow-x-auto">
                  <table>
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-1 md:px-4 py-2 text-xs text-gray-500 ">
                          #
                        </th>
                        <th className="px-1 md:px-4 py-2 text-xs text-gray-500 ">
                          Name
                        </th>
                        <th className="px-1 md:px-4 py-2 text-xs text-gray-500 ">
                          Type
                        </th>
                        <th className="px-1 md:px-4 py-2 text-xs text-gray-500 ">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {visitors.map((value, index) => {
                        let price;
                        if (value.citezenship === "Filipino") {
                          price = 200;
                        } else {
                          price = 300;
                        }
                        total += price;
                        return (
                          <tr className="whitespace-nowrap" key={index}>
                            <td className="px-2 md:px-6 py-4 text-sm text-gray-500">
                              {index + 1}
                            </td>
                            <td className="px-2 md:px-6 py-4">
                              <div className="text-sm text-gray-900">
                                {value.fullName}
                              </div>
                            </td>
                            <td className="px-2 md:px-6 py-4">
                              {value.citezenship}
                            </td>
                            <td className="px-2 md:px-6 py-4">₱{price}</td>
                          </tr>
                        );
                      })}

                      <tr className="text-white bg-gray-800 text-center">
                        <th colSpan="2"></th>
                        <td className="text-sm font-bold">
                          <b>Total :</b>
                        </td>
                        <td className="text-sm font-bold">
                          <b>₱{total}</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="w-full h-0.5 mt-10 mb-20 bg-green-900"></div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-end justify-end space-x-3">
              <ReactToPrint
                trigger={() => {
                  return (
                    <button className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2">
                      Print
                    </button>
                  );
                }}
                content={() => componentRef.current}
                onAfterPrint={() => {
                  setIsPrinted(true);
                }}
                documentTitle="MPPMNGPL Booking Receipt"
              />
              {isLoading ? (
                <button
                  disabled
                  className="hover:bg-blue-200 cursor-not-allowed inline-flex justify-center rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900"
                >
                  <svg
                    className="w-5 h-5 mr-3 -ml-1 text-blue-900 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Booking...
                </button>
              ) : (
                <button
                  className={`${
                    !isPrinted
                      ? "bg-gray-200 text-gray-900 hover:bg-gray-200 cursor-not-allowed"
                      : "bg-blue-100 text-blue-900 hover:bg-blue-200"
                  } inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                  onClick={handleClickBook}
                  disabled={!isPrinted}
                >
                  Book
                </button>
              )}
              <button
                className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={() => navigate("/input_information")}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>

      <Transition appear show={isSuccessfulOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setIsSuccessfulOpen(false);
            navigate("/");
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Book successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your book is already set.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        setIsSuccessfulOpen(false);
                        navigate("/");
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
      <Transition appear show={isDangerOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setIsDangerOpen(false);
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
                        setIsDangerOpen(false);
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
      <Transition appear show={isWarningOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setIsWarningOpen(false);
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
                    Maximum slot exceeded
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      The maximum slot per time is exceeded. Maybe it happens
                      because someone book just a moment.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white bg-red-900 hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        setIsWarningOpen(false);
                        navigate("/book_schedule");
                      }}
                    >
                      Book new date
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

export default Reciept;
