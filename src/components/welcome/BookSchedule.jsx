import React from "react";
import { Link } from "react-router-dom";
function BookSchedule() {
  return (
    <div className="flex bg-[#87ab69]">
      <div className="flex w-full h-[500px] flex-col justify-between py-20 items-center bg-[#87ab69]">
        <div className="flex flex-col text-center gap-4">
          <span className="text-4xl font-bold">Book a Schedule</span>
          <span className="text-white text-lg">Reserve a date</span>
        </div>
        <Link to="/book_schedule">
          <button className="bg-green-900 p-3">BOOK A SCHEDULE</button>
        </Link>
      </div>
    </div>
  );
}

export default BookSchedule;
