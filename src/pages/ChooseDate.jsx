import React, { useState } from "react";
import { generateDate, months } from "../components/Book/calendar";
import cn from "../components/Book/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useGlobal } from "../components/Context/Context";

export default function ChooseDate() {
  const { setSelectedTime, currentDate } = useGlobal();
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const [today, setToday] = useState(currentDate);
  const { selectedDate, setSelectedDate } = useGlobal();
  return (
    <div className="flex gap-10 sm:divide-x justify-center sm:w-1/2 mx-auto  h-screen items-center sm:flex-row flex-col">
      <div className="w-96 h-96 ">
        <div className="flex justify-between items-center">
          <h1 className="select-none font-semibold">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex gap-10 items-center ">
            <GrFormPrevious
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className=" cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            <GrFormNext
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-7 ">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
              >
                {day}
              </h1>
            );
          })}
        </div>

        <div className=" grid grid-cols-7 ">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <div
                  key={index}
                  className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                >
                  <h1
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-red-600 text-white" : "",
                      selectedDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? "bg-black text-white"
                        : "",
                      "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                    )}
                    onClick={() => {
                      setSelectedDate(date);
                    }}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div
        className="h-96 w-96 sm:px-5"
        onChange={(e) => {
          setSelectedTime(e.target.value);
        }}
      >
        <h1 className=" font-semibold">
          Available Schedule for {selectedDate.toDate().toDateString()}
        </h1>
        <div className="flex flex-col gap-2 my-3">
          <div>
            <input type="radio" value="05:00 AM - 11:30 AM" name="time" /> 05:00
            AM - 11:30 AM
          </div>
          <div>
            <input type="radio" value="05:30 AM - 11:05" name="time" /> 05:30 AM
            - 11:05 AM
          </div>
          <div>
            <input type="radio" value="06:00 AM - 12:35 AM" name="time" /> 06:00
            AM - 12:35 AM
          </div>
          <div>
            <input type="radio" value="07:00 AM - 01:35 AM" name="time" /> 07:00
            AM - 01:35 AM
          </div>
          <div>
            <input type="radio" value="07:00 AM - 01:05 AM" name="time" /> 07:00
            AM - 01:05 AM
          </div>
          <div>
            <input type="radio" value="08:00 AM - 02:35 AM" name="time" /> 08:00
            AM - 02:35 AM
          </div>
          <div>
            <input type="radio" value="08:30 AM - 02:05 AM" name="time" /> 08:30
            AM - 02:05 AM
          </div>
          <div>
            <input type="radio" value="09:00 AM - 03:35 AM" name="time" /> 09:00
            AM - 03:35 AM
          </div>
          <div>
            <input type="radio" value="09:30 AM - 03:05 AM" name="time" /> 09:30
            AM - 03:05 AM
          </div>
          <div>
            <input type="radio" value="10:00 AM - 04:35 AM" name="time" /> 10:00
            AM - 04:35 AM
          </div>
        </div>
        <Link to="/input_information">
          <button className="bg-black text-white p-2">Book Now</button>
        </Link>
      </div>
    </div>
  );
}
