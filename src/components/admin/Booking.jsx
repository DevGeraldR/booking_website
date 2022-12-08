import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

const VisitorsList = ({ visitors }) => {
  return (
    <table className="table w-full max-h-[500px]">
      <thead>
        <tr>
          <th className="text-center px-1 py-2 bg-black text-white sticky top-0">
            #
          </th>
          <th className="text-left px-1 py-2 bg-black text-white sticky top-0">
            Details
          </th>
          <th className=" px-1 py-2 bg-black text-white sticky top-0">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {visitors.length <= 0 ? (
          <tr>
            <td className="text-center" colSpan="3">
              No Todos found. Add a few to begin.
            </td>
          </tr>
        ) : (
          ""
        )}
        {visitors.map((visitor, index) => {
          return <ListItem key={index} visitor={visitor} index={index} />;
        })}
      </tbody>
    </table>
  );
};

const ListItem = ({ visitor, index }) => {
  const handleClickRemove = async (tag) => {
    const userRef = doc(db, "visitors", tag);
    const timeRef = doc(
      db,
      "bookDetails",
      visitor.scheduledDate,
      "bookTime",
      visitor.scheduledTime
    );

    await deleteDoc(userRef);

    const docSnap = await getDoc(timeRef);

    if (docSnap.exists()) {
      await updateDoc(timeRef, {
        visitorsNumber:
          docSnap.data().visitorsNumber - visitor.visitorInfo.length,
      });
    }

    alert("Admin sucessfully deleted");
  };

  return (
    <tr
      key={index}
      className="bg-white hover:bg-gray-100 border-b border-b-black cursor-pointer"
    >
      <td className="text-center  px-1 py-2">{index + 1}</td>
      <td className=" px-1 py-2">{visitor.visitorInfo[0].fullName}</td>
      <td className="text-center  px-1 py-2 ">
        <button
          className="text-red-600"
          onClick={() => handleClickRemove(visitor.transactionNumber)}
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
      </td>
    </tr>
  );
};

function Booking() {
  const [visitors, setVisitors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Use to listen to the database and get the new
    const unsub = onSnapshot(collection(db, "visitors"), (snapshot) => {
      const visitor = [];
      snapshot.forEach((doc) => {
        visitor.push(doc.data());
      });
      setVisitors(visitor);
    });
    setIsLoading(false);
    return () => unsub();
  }, []);

  return (
    <div className="flex w-full h-full justify-center bg-gray-100">
      <div className="my-5 container w-full max-w-2xl bg-white p-5 rounded-xl shadow-lg text-gray-700">
        <h1 className="font-bold text-xl italic block mb-0 leading-none pb-5">
          Bookings
        </h1>
        <div className="max-h-[500px] overflow-scroll">
          <VisitorsList visitors={visitors} />
        </div>
      </div>
    </div>
  );
}

export default Booking;
