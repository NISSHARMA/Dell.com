import logo from './logo.svg';
import './App.css';
import Navbar1 from './Component/Navbar1';
import Navbar2 from './Component/Navbar2';
import Navbar3 from './Component/Navbar3';
import LandingPage from './Pages/LandingPage';
import Footer1 from './Component/Footer1';
import Signin from './Pages/Signin';
import LaptopPage from './Pages/Laptop';
import AllRoutes from './Routes/AllRoutes';


function App() {
  return (
    <div className="App">
      {/*<Navbar1 />
      <Navbar2 />
      <Navbar3 />
      <LandingPage />
      <Footer1 />
      <Signin/>
  <LaptopPage/>*/}
      <AllRoutes />
    </div>
  );
}

export default App;
