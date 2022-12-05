import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChooseDate from "./pages/ChooseDate";
import Form from "./pages/Form";
import Reciept from "./pages/Reciept";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book_schedule" element={<ChooseDate />} />
        <Route path="/input_information" element={<Form />} />
        <Route path="/receipt" element={<Reciept />} />
      </Routes>
    </Router>
  );
}

export default App;
