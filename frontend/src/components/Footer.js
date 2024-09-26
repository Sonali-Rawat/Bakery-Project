const Footer = () => {
    return (
      <footer className="bg-[#ec2c59] text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Us Section */}
            <div>
              <h2 className="text-lg font-bold text-[#f3c8c8] mb-4">About Us</h2>
              <p className="text-sm text-[#e5a5a5] ">
                Sugar Buzz is a local bakery delivering fresh and delicious cakes, pastries, and bread daily. 
                We use only the finest ingredients and strive to make your celebrations sweeter.
              </p>
            </div>
  
            {/* Services Section */}
            <div>
              <h2 className="text-lg font-bold text-[#f3c8c8] mb-4">Our Services</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#e5a5a5] hover:text-[#FA912C] transition duration-300">Custom Cakes</a>
                </li>
                <li>
                  <a href="#" className="text-[#e5a5a5] hover:text-[#FA912C] transition duration-300">Catering Services</a>
                </li>
                <li>
                  <a href="#" className="text-[#e5a5a5] hover:text-[#FA912C] transition duration-300">Special Events</a>
                </li>
                <li>
                  <a href="#" className="text-[#e5a5a5] hover:text-[#FA912C] transition duration-300">Delivery Services</a>
                </li>
              </ul>
            </div>
  
            {/* Quick Links Section */}
            <div>
              <h2 className="text-lg font-bold text-[#f3c8c8] mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-[#e5a5a5] hover:text-[#FA912C] transition duration-300">Home</a>
                </li>
                <li>
                  <a href="/menu" className="text-[#e5a5a5] hover:text-[#FA912C] transition duration-300">Menu</a>
                </li>
                <li>
                  <a href="/order" className="text-[#e5a5a5] hover:text-[#FA912C] transition duration-300">Order</a>
                </li>
                <li>
                  <a href="/about" className="text-[#e5a5a5] hover:text-[#FA912C] transition duration-300">About Us</a>
                </li>
                <li>
                  <a href="/contact" className="text-[#e5a5a5] hover:text-[#FA912C] transition duration-300">Contact Us</a>
                </li>
              </ul>
            </div>
  
            {/* Contact Information Section */}
            <div>
              <h2 className="text-lg font-bold text-[#f3c8c8] mb-4">Contact Information</h2>
              <p className="text-sm text-[#e5a5a5]">
                <strong>Address:</strong> 123 Sweet St, Bakeryville, BK 54321
              </p>
              <p className="text-sm text-[#e5a5a5]">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="text-sm text-[#e5a5a5]">
                <strong>Email:</strong> info@sugarbuzzbakery.com
              </p>
            </div>
          </div>
  
          {/* Social Media Section */}
          <div className="flex justify-center space-x-6 mt-8 font-pacifico">
            <a href="#" className="text-[#2d2727] hover:text-[#FA912C] transition duration-300">Facebook</a>
            <a href="#" className="text-[#2d2727] hover:text-[#FA912C] transition duration-300">Instagram</a>
            <a href="#" className="text-[#2d2727] hover:text-[#FA912C] transition duration-300">Twitter</a>
          </div>
  
          {/* Copyright Section */}
          <div className="mt-8 text-center text-[#4b0502]">
            <p>© 2024 Sugar Buzz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  