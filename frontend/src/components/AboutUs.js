import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-semibold text-center mb-8">About Our Bakery</h2>
      
      <div className="mb-8">
        <img
          src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Bakery Interior"
          className="w-full h-96 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-600 text-lg text-center">
          Our bakery has been serving delicious treats for over 20 years, bringing joy and sweetness to our community.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
  <h3 className="text-2xl font-semibold mb-4 text-center text-[#ec2c59]">Our Mission</h3>
  <div className="flex flex-col lg:flex-row items-center">
    <img
      src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Fresh Ingredients"
      className="w-full lg:w-1/2 h-auto rounded-md mb-6 lg:mb-0 lg:mr-6 shadow-md"
    />
    <p className="text-gray-600 mb-6 lg:w-1/2">
      At our bakery, we believe in using only the freshest ingredients to create delightful pastries and bread. Our mission is to provide quality products while creating a warm and welcoming atmosphere for our customers. 
      <br />
      We are committed to sustainability, sourcing our ingredients from local farmers and suppliers whenever possible, ensuring that our products are not only delicious but also environmentally responsible. 
      <br />
      Our skilled bakers pour their passion into every creation, ensuring that each item is made with love and care. We believe that every bite should be an experience, transporting you to a place of comfort and joy.
      <br />
      Beyond just baking, we strive to build a community hub where people can gather, share stories, and celebrate life’s moments—big and small. Whether it’s a morning coffee, an afternoon treat, or a celebration cake, we aim to be a part of your special moments.
      <br />
      Join us on this journey as we continue to innovate and expand our menu, introducing seasonal specialties and classic favorites that reflect our commitment to quality and creativity.
    </p>
  </div>
</div>


<div className="bg-white p-8 rounded-lg shadow-lg mb-8">
  <h3 className="text-2xl font-semibold mb-4 text-center text-[#ec2c59]">Our Story</h3>
  <div className="flex flex-col lg:flex-row items-center">
    <img
      src="https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Our Team"
      className="w-full lg:w-1/2 h-auto rounded-md mb-6 lg:mb-0 lg:mr-6 shadow-md"
    />
    <p className="text-gray-600 mb-6 lg:w-1/2">
      Founded in 2003, we started as a small family-run bakery. Over the years, our passion for baking has grown, and we have expanded our menu to include a variety of treats, from artisan breads to decadent cakes. 
      <br />
      Our journey began with a simple love for baking, using recipes passed down through generations. With each batch of cookies and loaves of bread, we not only crafted delightful treats but also built a community of loyal customers who share our passion for quality and taste. 
      <br />
      As our reputation grew, so did our team. We are proud to have a diverse group of talented bakers and pastry chefs, each bringing their unique flair to our creations. Together, we continuously experiment with new flavors and innovative recipes, ensuring our menu stays fresh and exciting.
      <br />
      Today, our bakery is more than just a place to grab a treat; it’s a gathering spot for friends and family. We host workshops, tastings, and events that foster connections within our community, celebrating the joy of baking together.
      <br />
      Thank you for being a part of our journey. We invite you to stop by, share a story, and enjoy our delicious offerings!
    </p>
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
  <div className="flex flex-col items-center">
    <img
      src="https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt="Baking Process"
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h4 className="font-semibold text-xl text-[#ec2c59]">Baking Process</h4>
    <p className="text-gray-600 text-center mb-4">
      Our skilled bakers follow traditional recipes to create each product with love and care.
    </p>
    <p className="text-gray-500 text-center">
      From kneading dough to perfectly timing the bake, every step is done with precision to ensure the best quality.
    </p>
  </div>
  
  <div className="flex flex-col items-center">
    <img
      src="https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&w=400"
      alt="Fresh Pastries"
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h4 className="font-semibold text-xl text-[#ec2c59]">Fresh Pastries</h4>
    <p className="text-gray-600 text-center mb-4">
      Every morning, we prepare a selection of fresh pastries that will make your day brighter.
    </p>
    <p className="text-gray-500 text-center">
      From buttery croissants to fruit-filled danishes, our pastries are baked to perfection, ensuring a delightful start to your day.
    </p>
  </div>
  
  <div className="flex flex-col items-center">
    <img
      src="https://images.pexels.com/photos/5590963/pexels-photo-5590963.jpeg?auto=compress&cs=tinysrgb&w=400"
      alt="Artisan Bread"
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h4 className="font-semibold text-xl text-[#ec2c59]">Artisan Bread</h4>
    <p className="text-gray-600 text-center mb-4">
      Our artisan breads are crafted with the finest ingredients and baked to golden perfection.
    </p>
    <p className="text-gray-500 text-center">
      Each loaf is hand-shaped and slowly fermented, resulting in a crusty exterior and a soft, flavorful interior.
    </p>
  </div>

  <div className="flex flex-col items-center">
    <img
      src="https://images.pexels.com/photos/5112529/pexels-photo-5112529.jpeg?auto=compress&cs=tinysrgb&w=400"
      alt="Decadent Cakes"
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h4 className="font-semibold text-xl text-[#ec2c59]">Decadent Cakes</h4>
    <p className="text-gray-600 text-center mb-4">
      Our cakes are crafted for every occasion, from birthdays to weddings, each cake is a masterpiece.
    </p>
    <p className="text-gray-500 text-center">
      With layers of rich flavors and exquisite designs, our cakes are sure to make your celebrations memorable.
    </p>
  </div>
</div>


      <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
      <p className="text-gray-600 mb-6">
        Our team is composed of passionate bakers and friendly staff dedicated to providing you with the best experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center">
          <img
            src="https://images.pexels.com/photos/3771885/pexels-photo-3771885.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Team Member"
            className="w-32 h-32 rounded-full mb-2"
          />
          <h4 className="font-semibold">Sonali</h4>
          <p className="text-gray-600">Head Baker</p>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col items-center">
          <img
            src="https://images.pexels.com/photos/3771886/pexels-photo-3771886.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Team Member"
            className="w-32 h-32 rounded-full mb-2"
          />
          <h4 className="font-semibold">Sonali Rawat</h4>
          <p className="text-gray-600">Pastry Chef</p>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col items-center">
          <img
            src="https://images.pexels.com/photos/3771887/pexels-photo-3771887.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Team Member"
            className="w-32 h-32 rounded-full mb-2"
          />
          <h4 className="font-semibold">Emma Wilson</h4>
          <p className="text-gray-600">Customer Service</p>
        </div>
      </div>

      <h3 className="text-2xl text-[#ec2c59] font-semibold mb-4">Join Us!</h3>
      <p className="text-gray-600 mb-6">
  We invite you to visit our bakery, taste our treats, and be a part of our sweet journey. Our doors are open to everyone, and we believe that each visit should feel special. Whether you’re celebrating a birthday, wedding, or just treating yourself, we have something delicious for every occasion. 
  <br />
  Follow us on social media for updates on our latest creations, seasonal specials, and exclusive promotions! Join our community of dessert lovers and share your experiences with us. Don’t forget to tag us in your photos; we love seeing our treats make your day a little sweeter!
  <br />
  We can’t wait to welcome you and share our passion for baking with you!
</p>


      <div className="text-center">
      <button className="bg-[#ec2c59] text-white px-6 py-2 rounded-lg">
      <Link to="/contact" className="text-[#e2e7e9] transition duration-300">Follow Us</Link>
         
</button>
      </div>
    </div>
  );
};

export default AboutUs;
