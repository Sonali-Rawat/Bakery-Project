import React, { useState } from 'react';

const Menu = () => {
  const [products] = useState([
    {
      _id: '1',
      name: 'Chocolate Cake',
      description: 'A rich and moist chocolate cake with creamy frosting.',
      price: 20.99,
      image: 'https://example.com/chocolate-cake.jpg',
      rating: 5,
    },
    {
      _id: '2',
      name: 'Croissant',
      description: 'Buttery and flaky French croissant.',
      price: 2.99,
      image: 'https://example.com/croissant.jpg',
      rating: 4,
    },
    {
      _id: '3',
      name: 'Blueberry Muffin',
      description: 'Soft and sweet muffin bursting with blueberries.',
      price: 3.49,
      image: 'https://example.com/blueberry-muffin.jpg',
      rating: 4,
    },
    {
      _id: '4',
      name: 'Strawberry Tart',
      description: 'A sweet pastry crust filled with fresh strawberries and cream.',
      price: 5.99,
      image: 'https://example.com/strawberry-tart.jpg',
      rating: 5,
    },
    {
      _id: '5',
      name: 'Cinnamon Roll',
      description: 'A soft roll swirled with cinnamon and drizzled with icing.',
      price: 3.99,
      image: 'https://example.com/cinnamon-roll.jpg',
      rating: 4,
    },
  ]);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product._id} className="border p-4 rounded shadow-lg transition-transform duration-300 transform hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((star, index) => (
                <span key={index} className={`text-yellow-500 ${index < product.rating ? 'fas fa-star' : 'far fa-star'}`}></span>
              ))}
            </div>
            <button className="bg-yellow-500 mt-4 px-4 py-2 text-white rounded hover:bg-yellow-600 transition duration-300">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
