import React, { createContext, useContext } from "react";
import { useState } from "react";
import dayjs from "dayjs";

const AuthContext = createContext();

export function useGlobal() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const currentDate = dayjs();
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [selectedTime, setSelectedTime] = useState("");

  const [visitors, setVisitors] = useState([
    {
      fullName: "",
      address: "",
      email: "",
      age: "",
      contactNumber: "",
      citezenship: "",
    },
  ]);

  const value = {
    visitors,
    setVisitors,
    currentDate,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
