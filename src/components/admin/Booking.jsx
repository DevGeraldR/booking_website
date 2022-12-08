import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import VisitorsList from "./VisitorsList";

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
      setIsLoading(false);
    });
    return () => unsub();
  }, []);

  return (
    <div className="flex w-full h-full justify-center bg-gray-100">
      <div className="my-5 container w-full max-w-2xl bg-white p-5 rounded-xl shadow-lg text-gray-700">
        <h1 className="font-bold text-xl italic block mb-0 leading-none pb-5">
          Bookings
        </h1>
        {isLoading ? (
          <h1 className="text-center pt-5">Loading...</h1>
        ) : (
          <div className="max-h-[500px] overflow-scroll">
            <VisitorsList visitors={visitors} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Booking;
