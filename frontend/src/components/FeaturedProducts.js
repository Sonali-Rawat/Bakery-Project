import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
        },
      },
    ],
  };

  return (
    <section className="bg-[#f8f4f0] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#ec2c59] mb-8">
          Featured Products
        </h2>
        <Slider {...settings}>
          {[
            {
              imgSrc: "https://images.pexels.com/photos/691147/pexels-photo-691147.jpeg?auto=compress&cs=tinysrgb&w=400",
              title: "Chocolate Cake",
              description: "Rich and decadent chocolate cake with a silky ganache.",
            },
            {
              imgSrc: "https://images.pexels.com/photos/13020799/pexels-photo-13020799.jpeg?auto=compress&cs=tinysrgb&w=400",
              title: "Strawberry Pastry",
              description: "Fluffy pastry filled with fresh strawberries and cream.",
            },
            {
              imgSrc: "https://images.pexels.com/photos/15965547/pexels-photo-15965547/free-photo-of-bakery-window-display.jpeg?auto=compress&cs=tinysrgb&w=400",
              title: "French Baguette",
              description: "Freshly baked, crispy, and golden French baguette.",
            },
            {
              imgSrc: "https://images.pexels.com/photos/19501303/pexels-photo-19501303/free-photo-of-cookies-on-plate.jpeg?auto=compress&cs=tinysrgb&w=400",
              title: "Fresh Cookies",
              description: "Baked to perfection with chocolate chips and love.",
            },
            {
              imgSrc: "https://images.pexels.com/photos/6105238/pexels-photo-6105238.jpeg?auto=compress&cs=tinysrgb&w=400",
              title: "Croissant",
              description: "Flaky, buttery croissants made fresh every morning.",
            },
          ].map((product, index) => (
            <div key={index} className="bg-pink-100 p-6 rounded-lg shadow-lg">
              <img
                src={product.imgSrc}
                alt={product.title}
                className="rounded-md mb-4 h-80 w-full object-cover" // Set a fixed height and width
              />
              <h3 className="text-xl font-bold text-[#ec2c59]">{product.title}</h3>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <Link
                to="/menu"
                className="mt-4 inline-block bg-[#ec2c59] px-4 py-2 text-white rounded-lg"
              >
                Order Now
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedProducts;
