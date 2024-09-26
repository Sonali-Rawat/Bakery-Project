import { Link } from 'react-router-dom';
import FeaturedProducts from "./FeaturedProducts";
import CustomerTestimonials from './CustomerTestimonials';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-screen bg-[url('https://img.freepik.com/premium-photo/rustic-bread-bakery-ping-background-top-view-with-copy-space-pink-background_731790-31852.jpg?w=1060')] bg-cover">
        <h1 className="text-5xl font-bold text-[#F53029] font-pacifico shadow-lg transition-shadow duration-300 hover:shadow-2xl">
          Welcome to Our Bakery
        </h1>
        <p className="mt-4 text-lg font-bold text-[#FA912C] shadow-lg transition-shadow duration-300 hover:shadow-2xl">
          Delicious cakes, pastries, and bread fresh daily!
        </p>
        <div className="mt-8 flex space-x-4">
          <Link 
            to="/menu" 
            className="bg-[#ec2c59] px-6 py-3 text-[#ffffff] rounded-lg shadow-lg transition-all duration-300 hover:bg-[#FA912C] hover:shadow-2xl"
          >
            View Menu
          </Link>
          <Link 
            to="/order" 
            className="bg-[#ec2c59] px-6 py-3 text-[#ffffff] rounded-lg shadow-lg transition-all duration-300 hover:bg-[#FA912C] hover:shadow-2xl"
          >
            Order Now
          </Link>
        </div>
      </div>

      <FeaturedProducts />

            {/* About Us Section */}
            <section className="bg-[#f8f4f0] py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
          {/* Left Side - Image */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img 
              src="https://images.pexels.com/photos/5202138/pexels-photo-5202138.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="About Us Image" 
              className="rounded-lg shadow-xl h-[350px] w-full object-cover transition-transform transform hover:scale-105 duration-500 ease-in-out"
            />
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 text-center lg:text-left flex flex-col justify-center h-full">
            <h2 className="text-4xl font-extrabold text-[#ec2c59] mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Sugar Buzz is a family-owned bakery that has been delighting customers for over 10 years. Our passion for creating the best cakes, pastries, and breads is reflected in every bite.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We use only the finest ingredients to ensure freshness and quality. Visit us to experience a warm, welcoming atmosphere and indulge in our wide selection of delicious treats.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Sugar Buzz, we believe in making every celebration sweeter. Whether it’s a birthday, wedding, or any special event, our custom cakes and pastries are designed to make your moments unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <CustomerTestimonials />
    </div>
  );
};

export default Home;
