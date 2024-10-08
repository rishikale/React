import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import AboutUs from "../Components/AboutUs/AboutUs";
import ContactUs from "../Components/ContactUs/ContactUs";
import Books from "../Components/Books/Books";
import Promises from "../Components/Promises";

function MainLayout() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/books" element={<Books />} />
          <Route path="/promises" element={<Promises />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainLayout;
