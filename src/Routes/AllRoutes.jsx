import { Route, Routes } from "react-router-dom"
import LandingPage from "../Component/LandingPage";





function AllRoutes() {

  return <div>{/* Add Home, Login and dashboard  */}
    <Routes>
      <Route path="/" element={<LandingPage />} />   
  

    </Routes>
  </div>;
}

export default AllRoutes;