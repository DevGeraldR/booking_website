import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import VisitorsList from "./VisitorsList";

function Booking() {
  const [visitors, setVisitors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    //Use to listen to the database and get the new
    const unsub = onSnapshot(collection(db, "visitors"), (snapshot) => {
      const visitor = [];
      snapshot.forEach((doc) => {
        visitor.push(doc.data());
      });
      setVisitors(visitor);
      setSearchList(visitor);
      setIsLoading(false);
    });
    return () => unsub();
  }, []);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = visitors.filter(function (item) {
        const itemData = item.transactionNumber ? item.transactionNumber : "";
        const textData = text;
        return itemData.indexOf(textData) > -1;
      });
      setSearchList(newData);
      setSearch(text);
    } else {
      setSearchList(visitors);
      setSearch(text);
    }
  };

  return (
    <div className="flex h-full justify-center bg-gray-100 p-2">
      <div className="my-5 w-full bg-white p-5 rounded-xl shadow-lg text-gray-700">
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <h1 className="font-bold text-xl italic block mb-0 leading-none pb-5">
            Bookings
          </h1>
          <div className="relative flex flex-wrap items-stretch mb-4">
            <input
              value={search}
              onChange={(e) => searchFilterFunction(e.target.value)}
              type="search"
              className="form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search Transaction ID"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
          </div>
        </div>
        {isLoading ? (
          <h1 className="text-center pt-5">Loading...</h1>
        ) : (
          <div className="max-h-[500px] overflow-scroll">
            <VisitorsList visitors={searchList} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Booking;
