import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import AboutUs from "../Components/AboutUs/AboutUs";
import ContactUs from "../Components/ContactUs/ContactUs";

function MainLayout() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainLayout;
