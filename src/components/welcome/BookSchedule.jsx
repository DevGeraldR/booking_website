import React from "react";
import { Link } from "react-router-dom";
function BookSchedule() {
  return (
    <div className="flex bg-[#d4deae]">
      <div className="flex w-full h-[500px] flex-col justify-between py-20 items-center">
        <div className="flex flex-col text-center gap-4">
          <span className="text-4xl font-bold">Book a Schedule</span>
          <span className="text-white text-lg">Reserve a date</span>
        </div>
        <Link to="/book_schedule">
          <button className="bg-green-700 p-3 text-white rounded-lg">
            BOOK A SCHEDULE
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BookSchedule;
