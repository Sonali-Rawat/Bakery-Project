import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Check if the user is logged in by checking the presence of a token in localStorage
  const isAuthenticated = !!localStorage.getItem('token');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from localStorage on logout
    alert('Logged out successfully!');
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <nav className="bg-[#ec2c59] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#f3f1f1] font-pacifico">Sugar Buzz</h1>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="text-[#e2e7e9] hover:text-[#b06232] transition duration-300">Home</Link>
          <Link to="/menu" className="text-[#e2e7e9] hover:text-[#b06232] transition duration-300">Menu</Link>
          <Link to="/order" className="text-[#e2e7e9] hover:text-[#b06232] transition duration-300">Order</Link>
          <Link to="/about" className="text-[#e2e7e9] hover:text-[#b06232] transition duration-300">About Us</Link>
          <Link to="/contact" className="text-[#e2e7e9] hover:text-[#b06232] transition duration-300">Contact Us</Link>
          <Link to="/blog" className="text-[#e2e7e9] hover:text-[#b06232] transition duration-300">Blog</Link>

          {/* Dashboard Icon and Dropdown */}
          <div className="relative inline-block text-left">
            <div onClick={toggleDropdown} className="cursor-pointer flex items-center space-x-1">
              <FaUserCircle className="text-3xl text-[#e2e7e9]" />
            </div>

            {isDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {isAuthenticated ? (
                    <>
                      {/* Logged-in User Options */}
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Edit Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      {/* Guest User Options */}
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Register
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
