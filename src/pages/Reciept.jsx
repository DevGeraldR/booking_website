import React from "react";
import { useGlobal } from "../components/Context/Context";
import { v4 as uuid } from "uuid";
import { db } from "../components/firebase/firebase";
import { setDoc, doc, getDoc, updateDoc } from "firebase/firestore";

function Reciept() {
  const { selectedTime, selectedDate, currentDate, visitors } = useGlobal();
  const randomId = uuid();
  const transitionId = randomId.slice(0, 8);
  let total = 0;

  const handleClickBook = async () => {
    const visitorRef = doc(
      db,
      "bookDetails",
      selectedDate.toDate().toDateString(),
      "bookTime",
      selectedTime,
      "visitors",
      transitionId
    );
    const timeRef = doc(
      db,
      "bookDetails",
      selectedDate.toDate().toDateString(),
      "bookTime",
      selectedTime
    );

    const docSnap = await getDoc(timeRef);

    if (docSnap.exists()) {
      await updateDoc(timeRef, {
        visitorsNumber: docSnap.data().visitorsNumber + 1,
      });
    } else {
      await setDoc(timeRef, { time: selectedTime, visitorsNumber: 1 });
    }

    await setDoc(visitorRef, { visitorInfo: visitors });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-3/5 bg-white shadow-lg">
        <div className="flex justify-between p-4">
          <div>
            <h1 className="text-3xl italic font-extrabold tracking-widest text-green-900">
              MPPMNGPL
            </h1>
            <p className="text-base">TRANSACTION ID #: {transitionId}</p>
            <p className="text-base">{currentDate.toString()}</p>
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
              <span className="pl-2 text-sm font-medium">{selectedTime}</span>
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
                    if (value.age <= 6) {
                      price = 120;
                    } else if (value.age >= 7 && value.age <= 18) {
                      price = 100;
                    } else if (value.age >= 19 && value.age <= 59) {
                      price = 150;
                    } else {
                      price = 120;
                    }
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
                      <td className="px-2 md:px-6 py-4">{value.citezenship}</td>
                      <td className="px-2 md:px-6 py-4">₱{price}</td>
                    </tr>
                  );
                })}

                <tr className="text-white bg-gray-800">
                  <th colSpan="2"></th>
                  <td className="text-sm font-bold">
                    <b>Total</b>
                  </td>
                  <td className="text-sm font-bold">
                    <b>₱{total}</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl">Terms And Condition :</h3>
          <ul className="text-xs list-disc list-inside">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div className="w-full h-0.5 bg-green-900"></div>

        <div className="p-4">
          <div className="flex items-center justify-center">
            Thank you very much for visiting us.
          </div>
          <div className="flex items-end justify-end space-x-3">
            <button className="px-4 py-2 text-sm text-green-600 bg-green-100">
              Print
            </button>
            <button
              className="px-4 py-2 text-sm text-blue-600 bg-blue-100"
              onClick={handleClickBook}
            >
              Book
            </button>
            <button className="px-4 py-2 text-sm text-red-600 bg-red-100">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reciept;
