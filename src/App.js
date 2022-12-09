import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChooseDate from "./pages/ChooseDate";
import Form from "./pages/Form";
import Reciept from "./pages/Reciept";
import { AuthProvider } from "./components/Context/Context";
import Admin from "./pages/Admin";
import Booking from "./components/admin/Booking";
import VisitorInfo from "./components/admin/VisitorInfo";
import Login from "./components/admin/Login";
import { PrivateRoute } from "./components/admin/PrivateRoute";
import TermsAndCondition from "./pages/TermsAndCondition";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book_schedule" element={<ChooseDate />} />
          <Route path="/input_information" element={<Form />} />
          <Route path="/receipt" element={<Reciept />} />
          <Route path="/terms_and_condition" element={<TermsAndCondition />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/admin" element={<Admin />}>
              <Route index element={<Booking />} />
              <Route
                path="/admin/visitor_information"
                element={<VisitorInfo />}
              />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
