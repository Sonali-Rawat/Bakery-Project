import React from 'react';

const Blog = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Blog & Events</h2>
      <p className="text-gray-600 mb-6">
        Check out our latest recipes, baking tips, and upcoming events that celebrate our love for baking!
      </p>

      {/* Featured Recipe Section */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Featured Recipe</h3>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="https://images.pexels.com/photos/3171351/pexels-photo-3171351.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Featured Recipe"
            className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
          />
          <div>
            <h4 className="text-xl font-semibold mb-2">Delicious Chocolate Chip Cookies</h4>
            <p className="text-gray-600 mb-4">
              These classic chocolate chip cookies are soft, chewy, and packed with chocolate chips. Perfect for any occasion!
            </p>
            <button className="bg-[#ec2c59] text-white px-4 py-2 rounded-lg">
              View Recipe
            </button>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Recent Blog Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Post 1 */}
          <div className="border p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src="https://images.pexels.com/photos/4161504/pexels-photo-4161504.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Blog Post 1"
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h4 className="text-lg font-semibold mb-2">5 Tips for Perfect Pastry</h4>
            <p className="text-gray-600 mb-2">
              Master the art of pastry with these five essential tips from our head baker!
            </p>
            <a href="#" className="text-[#ec2c59] font-semibold">Read More</a>
          </div>
          {/* Post 2 */}
          <div className="border p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src="https://images.pexels.com/photos/5593638/pexels-photo-5593638.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Blog Post 2"
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h4 className="text-lg font-semibold mb-2">Baking with Kids: Fun Recipes</h4>
            <p className="text-gray-600 mb-2">
              Discover fun and easy baking recipes to enjoy with your little ones!
            </p>
            <a href="#" className="text-[#ec2c59] font-semibold">Read More</a>
          </div>
          {/* Post 3 */}
          <div className="border p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src="https://images.pexels.com/photos/1416659/pexels-photo-1416659.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Blog Post 3"
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h4 className="text-lg font-semibold mb-2">Seasonal Treats: Spring Edition</h4>
            <p className="text-gray-600 mb-2">
              Celebrate spring with these seasonal treats that brighten up any table.
            </p>
            <a href="#" className="text-[#ec2c59] font-semibold">Read More</a>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
<section className="mt-12">
  <h3 className="text-2xl font-semibold mb-6 text-center">Upcoming Events</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Event 1 */}
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <img
        src="https://images.pexels.com/photos/33715/cake-pops-pastries-cake-sweet.jpg?auto=compress&cs=tinysrgb&w=400"
        alt="Chocolate Tasting Event"
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h4 className="text-xl font-semibold mb-2">Chocolate Tasting Event</h4>
        <p className="text-gray-600 mb-2">Join us on April 15 for a delightful chocolate tasting experience, featuring a variety of gourmet chocolates from around the world.</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-gray-500">📅 April 15, 2024</span>
          <button className="bg-[#ec2c59] text-white px-4 py-2 rounded-lg hover:bg-[#d6224f] transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </div>

    {/* Event 2 */}
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <img
        src="https://images.pexels.com/photos/3218467/pexels-photo-3218467.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Baking Workshop"
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h4 className="text-xl font-semibold mb-2">Artisan Bread Baking Workshop</h4>
        <p className="text-gray-600 mb-2">Learn the secrets of baking artisan bread with our expert bakers on May 22. Perfect for beginners and bread enthusiasts alike!</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-gray-500">📅 May 22, 2024</span>
          <button className="bg-[#ec2c59] text-white px-4 py-2 rounded-lg hover:bg-[#d6224f] transition duration-300">
            Reserve Spot
          </button>
        </div>
      </div>
    </div>

    {/* Event 3 */}
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <img
        src="https://images.pexels.com/photos/859904/pexels-photo-859904.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Baking Contest"
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h4 className="text-xl font-semibold mb-2">Seasonal Baking Contest</h4>
        <p className="text-gray-600 mb-2">Show off your baking skills in our annual contest on June 30! Bring your best seasonal treats and compete for exciting prizes.</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-gray-500">📅 June 30, 2024</span>
          <button className="bg-[#ec2c59] text-white px-4 py-2 rounded-lg hover:bg-[#d6224f] transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Blog;
