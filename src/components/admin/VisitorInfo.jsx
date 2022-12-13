import { arrayRemove, doc, getDoc, updateDoc } from "firebase/firestore";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../Context/Context";
import { db } from "../firebase/firebase";

function VisitorInfo() {
  const { visitor, setVisitor } = useGlobal();
  const navigate = useNavigate();

  const handleClickRemove = async (fullName) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      const timeRef = doc(
        db,
        "bookDetails",
        visitor.scheduledDate,
        "bookTime",
        visitor.scheduledTime
      );
      const visitorRef = doc(db, "visitors", visitor.transactionNumber);

      const docSnaps = await getDoc(timeRef);

      await updateDoc(timeRef, {
        visitorsNumber: docSnaps.data().visitorsNumber - 1,
      });

      const docSnap = await getDoc(visitorRef);
      const promises = docSnap.data().visitorInfo.map(async (v) => {
        if (v.fullName === fullName) {
          let price;
          if (v.citezenship === "Filipino") {
            price = 200;
          } else {
            price = 300;
          }
          updateDoc(visitorRef, {
            visitorInfo: arrayRemove(v),
            totalPrice: visitor.totalPrice - price,
          });
          let newVisitor = visitor.visitorInfo.filter(
            (v) => v.fullName !== fullName
          );
          setVisitor({
            ...visitor,
            visitorInfo: newVisitor,
            totalPrice: visitor.totalPrice - price,
          });
          return;
        }
      });
      return Promise.all(promises);
    }
  };

  return (
    <div className="overflow-scroll max-h-screen w-full pb-[60px] bg-gray-100 h-full">
      <div className="flex justify-center">
        <div className="my-5 w-full max-w-2xl bg-white p-5 rounded-xl shadow-lg">
          <h1>Transaction #: {visitor.transactionNumber}</h1>
          <h1>Date: {visitor.scheduledDate}</h1>
          <h1>Time: {visitor.scheduledTime}</h1>
          <h1 className="pb-2">Total Price: {visitor.totalPrice}</h1>
          {visitor.visitorInfo.map((v, index) => {
            return (
              <div key={index}>
                <div className="w-full h-0.5 bg-green-900 my-2"></div>
                <div className="flex flex-row justify-between">
                  <ul key={v.fullName}>
                    <li>Name: {v.fullName}</li>
                    <li>Age: {v.age}</li>
                    <li>Company/School/Org: {v.companySchoolOrg}</li>
                    <li>Citezenship: {v.citezenship}</li>
                    <li>Contact Number: {v.contactNumber}</li>
                    <li>Email: {v.email}</li>
                  </ul>
                  {visitor.visitorInfo.length > 1 && (
                    <button
                      onClick={() => {
                        handleClickRemove(v.fullName);
                      }}
                      className="text-orange-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  )}
                </div>
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
