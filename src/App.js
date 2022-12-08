import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChooseDate from "./pages/ChooseDate";
import Form from "./pages/Form";
import Reciept from "./pages/Reciept";
import { AuthProvider } from "./components/Context/Context";
import Admin from "./pages/Admin";
import Booking from "./components/admin/Booking";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book_schedule" element={<ChooseDate />} />
          <Route path="/input_information" element={<Form />} />
          <Route path="/receipt" element={<Reciept />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="/admin/bookings" element={<Booking />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
