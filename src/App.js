import Homepage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProductFeed from "./components/ProductFeed/ProductFeed";
import ProductDescription from "./components/ProductDescription/ProductDescription";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/product-feed" element={<ProductFeed />} />
          <Route path="/product-description" element={<ProductDescription />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
