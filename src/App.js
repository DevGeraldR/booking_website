import React from "react";
import Welcome from "./pages/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookSchedule from "./components/Book/BookSchedule";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/book_schedule" element={<BookSchedule />} />
      </Routes>
    </Router>
  );
}

export default App;
