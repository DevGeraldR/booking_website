import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import dayjs from "dayjs";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

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
      citezenship: "Filipino",
    },
  ]);
  const [visitor, setVisitor] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const logIn = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  const logOut = async () => {
    try {
      return await signOut(auth);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsAuthenticating(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    logIn,
    logOut,
    isAuthenticating,
    currentUser,
    visitors,
    setVisitors,
    currentDate,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    visitor,
    setVisitor,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
