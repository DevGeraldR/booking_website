import React, { useState } from "react";
import { generateDate, months } from "../components/Book/calendar";
import cn from "../components/Book/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useGlobal } from "../components/Context/Context";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../components/firebase/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ChooseDate() {
  const { selectedTime, setSelectedTime, currentDate } = useGlobal();
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const [today, setToday] = useState(currentDate);
  const { selectedDate, setSelectedDate } = useGlobal();
  const [scheduleTime, setScheduleTime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const timeRef = collection(
      db,
      "bookDetails",
      selectedDate.toDate().toDateString(),
      "bookTime"
    );
    const unsub = onSnapshot(timeRef, (snapshot) => {
      const schedule = [
        { time: "06:00 AM - 12:35 PM", slot: "10" },
        { time: "06:30 AM - 01:05 PM", slot: "10" },
        { time: "07:00 AM - 01:35 PM", slot: "10" },
        { time: "07:30 AM - 02:05 PM", slot: "10" },
        { time: "08:00 AM - 02:35 PM", slot: "10" },
        { time: "08:30 AM - 03:05 PM", slot: "10" },
        { time: "09:00 AM - 03:35 PM", slot: "10" },
        { time: "09:30 AM - 04:05 PM", slot: "10" },
        { time: "10:00 AM - 04:35 PM", slot: "10" },
      ];
      snapshot.forEach((doc) => {
        const { time, visitorsNumber } = doc.data();
        if (visitorsNumber >= 10) {
          const index = schedule.findIndex((index) => index.time === time);
          if (index > -1) {
            schedule.splice(index, 1);
          }
        } else {
          const index = schedule.findIndex((index) => index.time === time);
          schedule[index].slot = 10 - visitorsNumber;
        }
      });
      setScheduleTime(schedule);
      setIsLoading(false);
    });
    return () => unsub();
  }, [selectedDate]);

  return (
    <div className="flex py-5 gap-5 items-center lg:divide-x sm:w-1/2 justify-center flex-col mx-auto h-full md:h-screen">
      <h1 className="text-green-500 text-2xl">Choose Date</h1>
      <div className="flex gap-10 items-center lg:flex-row flex-col">
        <div className="sm:w-96 sm:h-96 max-w-[270px]">
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
              ({ date, today }, index) => {
                return (
                  <div
                    key={index}
                    className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                  >
                    {/*Green color dates available manage here */}
                    <h1
                      className={cn(
                        (date.day() > 2 || date.day() < 1) &&
                          date.diff(currentDate, "day") + 1 >= 7 &&
                          date.diff(currentDate, "day") + 1 <= 90
                          ? // Start here
                            ((date.date() === 21 || date.date() === 22) &&
                              date.month() === 11 &&
                              date.year() === 2022) ||
                            (date.date() >= 12 && date.month() === 0) ||
                            (date.month() >= 1 && date.year() >= 2023) // Until here
                            ? "text-green-500 font-bold"
                            : "text-gray-400"
                          : "text-gray-400",
                        today ? "bg-blue-600 text-white" : "",

                        selectedDate.toDate().toDateString() ===
                          date.toDate().toDateString()
                          ? "bg-black text-white"
                          : "",
                        "h-10 w-10 rounded-full grid place-content-center hover:bg-black transition-all cursor-pointer select-none"
                      )}
                      onClick={() => {
                        setSelectedDate(date);
                        setSelectedTime("");
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
        <div className="h-96 w-96 sm:px-5 max-w-[280px]">
          <h1 className=" font-semibold">
            Available Schedule for {selectedDate.toDate().toDateString()}
          </h1>
          <div className="flex flex-col gap-2 my-3">
            {/* 1 for monday 2 for tuesday */}
            {selectedDate.day() === 1 || selectedDate.day() === 2 ? (
              <div>Sorry no booking beetween monday and tuesday</div>
            ) : selectedDate.diff(currentDate, "day") + 1 >= 7 &&
              selectedDate.diff(currentDate, "day") + 1 <= 90 ? (
              // Add unavailable dates here
              // Start here
              ((selectedDate.date() === 21 || selectedDate.date() === 22) &&
                selectedDate.month() === 11 &&
                selectedDate.year() === 2022) ||
              (selectedDate.date() >= 12 &&
                selectedDate.month() >= 0 &&
                selectedDate.year() >= 2023) ? (
                //Until Here
                !isLoading ? (
                  scheduleTime.map((index) => {
                    return (
                      <div key={index.time} className="flex flex-row gap-5">
                        <div
                          onChange={(e) => {
                            setSelectedTime(e.target.value);
                          }}
                        >
                          <input type="radio" value={index.time} name="time" />
                          <span className="pl-2">{index.time}</span>
                        </div>
                        <p>{index.slot} slot</p>
                      </div>
                    );
                  })
                ) : (
                  <div>Please wait...</div>
                )
              ) : (
                <div>No booking avaible</div>
              )
            ) : (
              <div>
                Sorry booking can be made 1 week from now and up to 3 months
                only
              </div>
            )}
          </div>
          <button
            onClick={() => navigate("/input_information")}
            disabled={!selectedTime}
            className={`${
              !selectedTime
                ? "bg-gray-100 text-gray-900 hover:bg-gray-200 cursor-not-allowed"
                : "bg-blue-100 text-blue-900 hover:bg-blue-200"
            } inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
