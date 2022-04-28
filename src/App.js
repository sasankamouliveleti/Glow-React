import Homepage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Tracker from "./components/Tracker/Tracker";
import Discussion from "./components/Discussion/Discussion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProductFeed from "./components/ProductFeed/ProductFeed";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import OfferProductFeed from "./components/OfferProductFeed/OfferProductFeed";
import DiscussionDescription from "./components/DiscussionDescription/DisucssionDescription";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile/Profile";
import Notification from "./components/Notifications/Notifications";
import OrderPlaced from "./components/OrderPlaced/OrderPlaced";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Glow-React" element={<Homepage />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product-feed" element={<ProductFeed />} />
          <Route path="/order-placed" element={<OrderPlaced />} />
          <Route path="/product-description" element={<ProductDescription />} />
          <Route path="/offer-product-feed" element={<OfferProductFeed />} />
          <Route path="/discussion-description" element={<DiscussionDescription />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
