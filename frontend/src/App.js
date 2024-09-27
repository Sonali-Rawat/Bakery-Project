import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Order from './components/Order';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';
import Login from './components/Login'; // Import Login component
import Register from './components/Register'; // Import Register component
import Footer from './components/Footer';
import Payment from './components/Payment';
import ThankYou from './components/ThankYou';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/payment" element={<Payment />} /> {/* Payment page route */}
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} /> {/* Add Login route */}
        <Route path="/register" element={<Register />} /> {/* Add Register route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
