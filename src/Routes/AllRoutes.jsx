import { Route, Routes } from "react-router-dom"
import LandingPage from "../Pages/LandingPage";
import LaptopPage from "../Pages/Laptop";
import Signin from "../Pages/Signin";





function AllRoutes() {

  return <div>{/* Add Home, Login and dashboard  */}
    <Routes>
      <Route path="/" element={<LandingPage />} /> 
      <Route path="/laptop" element={<LaptopPage />} /> 
      <Route path="/signin" element={<Signin />} /> 
    </Routes>
  </div>;
}

export default AllRoutes;