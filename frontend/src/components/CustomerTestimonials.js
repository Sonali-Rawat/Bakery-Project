import React from "react";
import Slider from "react-slick";

const CustomerTestimonials = () => {
  const testimonials = [
    {
      name: "Emma",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "The best bakery in town! Their cakes are always fresh and delicious!",
      rating: 5,
    },
    {
      name: "Jake",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "Amazing pastries and the friendliest staff. Highly recommend!",
      rating: 4,
    },
    {
      name: "Sarah",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
      text: "Sugar Buzz never disappoints. Their bread is always fresh and tasty.",
      rating: 5,
    },
    {
      name: "Michael",
      image: "https://randomuser.me/api/portraits/men/48.jpg",
      text: "I love the croissants here! Perfectly flaky and buttery.",
      rating: 4,
    },
    {
      name: "Sophia",
      image: "https://randomuser.me/api/portraits/women/47.jpg",
      text: "The cookies are to die for! Always a great treat.",
      rating: 5,
    },
    {
      name: "David",
      image: "https://randomuser.me/api/portraits/men/49.jpg",
      text: "Great ambiance and delicious coffee to pair with pastries.",
      rating: 4,
    },
    {
      name: "Olivia",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      text: "Their seasonal specials are amazing! Can't get enough.",
      rating: 5,
    },
    {
      name: "James",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
      text: "A must-visit bakery! Always leave with a smile.",
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Add a fade effect
  };

  return (
    <section className="bg-[#f8f4f0] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#ec2c59] mb-8">
          Customer Testimonials
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-pink-100 p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-24 h-24 mb-4"
              />
              <p className="italic">{`"${testimonial.text}"`}</p>
              <p className="mt-4 font-bold">- {testimonial.name}</p>
              <div className="mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#ec2c59]">★</span>
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-gray-300">★</span>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
