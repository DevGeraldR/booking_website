import React from "react";

function Reciept() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-3/5 bg-white shadow-lg">
        <div className="flex justify-between p-4">
          <div>
            <h1 className="text-3xl italic font-extrabold tracking-widest text-green-900">
              MPPMNGPL
            </h1>
            <p className="text-base">TRANSACTION ID #4</p>
            <p className="text-base">12/10/2022 10:30 pm</p>
          </div>
        </div>
        <div className="w-full h-0.5 bg-green-900"></div>
        <div className="flex justify-between p-4">
          <div>
            <h6 className="font-bold">
              Book Date :
              <span className="text-sm font-medium"> 12/12/2022</span>
            </h6>
            <h6 className="font-bold">
              Book Time : <span className="text-sm font-medium"> 12:30</span>
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
                <tr className="whitespace-nowrap">
                  <td className="px-2 md:px-6 py-4 text-sm text-gray-500">1</td>
                  <td className="px-2 md:px-6 py-4">
                    <div className="text-sm text-gray-900">Customer 1</div>
                  </td>
                  <td className="px-2 md:px-6 py-4">Filipino</td>
                  <td className="px-2 md:px-6 py-4">₱150.00</td>
                </tr>

                <tr className="text-white bg-gray-800">
                  <th colSpan="2"></th>
                  <td className="text-sm font-bold">
                    <b>Total</b>
                  </td>
                  <td className="text-sm font-bold">
                    <b>$999.0</b>
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
            <button className="px-4 py-2 text-sm text-blue-600 bg-blue-100">
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
