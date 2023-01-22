import { Route, Routes } from "react-router-dom"
import LandingPage from "../Pages/LandingPage";
import LaptopPage from "../Pages/Laptop";
import Signin from "../Pages/Signin";
import SingleProductPage from "../Pages/SingleProductPage";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import Admin from "../Pages/Admin";
import Addproduct from  "../Pages/AddProducts"
import Allproducts from "../Pages/Allproducts"






function AllRoutes() {

  return <div>{/* Add Home, Login and dashboard  */}
    <Routes>
      <Route path="/" element={<LandingPage />} /> 
      <Route path="/laptop" element={<LaptopPage />} /> 
      <Route path="/signin" element={<Signin />} />
      <Route path="/laptop/:id" element={<SingleProductPage />}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/cart/checkout" element={<Checkout/>}/>

      <Route path="/admin" element={<Admin/>}/>
      <Route path="/admin/addproduct" element={<Addproduct/>}/>
      <Route path="/admin/allproduct" element={<Allproducts/>}/>
     
    </Routes>
  </div>;
}

export default AllRoutes;