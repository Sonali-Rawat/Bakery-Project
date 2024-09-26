import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  // Hardcoded product data
  const [products] = useState([
    {
      _id: '1',
      name: 'Chocolate Cake',
      description: 'A delicious chocolate cake with rich chocolate frosting.',
      price: 15.99,
      image: 'https://images.pexels.com/photos/691147/pexels-photo-691147.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image URL
      rating: 4,
    },
    {
      _id: '2',
      name: 'Blueberry Muffin',
      description: 'Soft and fluffy blueberry muffin with a sugar crust.',
      price: 3.99,
      image: 'https://images.pexels.com/photos/18282821/pexels-photo-18282821/free-photo-of-lemon-and-carrot-cupcakes-with-orange-and-blueberry-jam.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image URL
      rating: 5,
    },
    {
      _id: '3',
      name: 'Croissant',
      description: 'A buttery, flaky croissant, perfect for breakfast.',
      price: 2.99,
      image: 'https://images.pexels.com/photos/6105238/pexels-photo-6105238.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image URL
      rating: 3,
    },
    {
      _id: '4',
      name: 'Apple Pie',
      description: 'A classic apple pie with a golden flaky crust.',
      price: 12.99,
      image: 'https://images.pexels.com/photos/6163270/pexels-photo-6163270.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image URL
      rating: 4,
    },
    {
      _id: '5',
      name: 'Cinnamon Roll',
      description: 'A soft cinnamon roll with a gooey center and icing on top.',
      price: 4.49,
      image: 'https://images.pexels.com/photos/5662203/pexels-photo-5662203.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image URL
      rating: 5,
    },
    {
      _id: '6',
      name: 'Lemon Tart',
      description: 'A tangy lemon tart with a buttery crust and creamy filling.',
      price: 5.99,
      image: 'https://images.pexels.com/photos/8104739/pexels-photo-8104739.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image URL
      rating: 4,
    },
    {
      _id: '7',
      name: 'Strawberry Shortcake',
      description: 'Layers of fluffy cake with fresh strawberries and whipped cream.',
      price: 8.99,
      image: 'https://images.pexels.com/photos/3752079/pexels-photo-3752079.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image URL
      rating: 5,
    },
    {
      _id: '8',
      name: 'Macarons',
      description: 'French macarons in assorted flavors and colors.',
      price: 1.99,
      image: 'https://images.pexels.com/photos/3776940/pexels-photo-3776940.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image URL
      rating: 5,
    },
    {
      _id: '9',
      name: 'Vanilla Cupcake',
      description: 'A classic vanilla cupcake with buttercream frosting.',
      price: 2.49,
      image: 'https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image URL
      rating: 4,
    },
    {
      _id: '10',
      name: 'Eclair',
      description: 'A choux pastry filled with custard and topped with chocolate icing.',
      price: 3.99,
      image: 'https://images.pexels.com/photos/5665687/pexels-photo-5665687.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image URL
      rating: 3,
    },
    {
      _id: '11',
      name: 'Pumpkin Pie',
      description: 'A rich and spiced pumpkin pie, perfect for fall.',
      price: 9.99,
      image: 'https://images.pexels.com/photos/5706427/pexels-photo-5706427.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image URL
      rating: 4,
    },
    {
      _id: '12',
      name: 'Cheesecake',
      description: 'A creamy cheesecake with a graham cracker crust.',
      price: 14.99,
      image: 'https://images.pexels.com/photos/3185509/pexels-photo-3185509.png?auto=compress&cs=tinysrgb&w=400', // Replace with actual image URL
      rating: 5,
    },
    {
      _id: '13',
      name: 'Raspberry Danish',
      description: 'A flaky danish pastry filled with raspberry jam.',
      price: 3.49,
      image: 'https://images.pexels.com/photos/17939302/pexels-photo-17939302/free-photo-of-pastry-in-disposable-box.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image URL
      rating: 3,
    },
    {
      _id: '14',
      name: 'Brownie',
      description: 'A rich, fudgy chocolate brownie with walnuts.',
      price: 2.99,
      image: 'https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image URL
      rating: 5,
    },
    {
      _id: '15',
      name: 'Red Velvet Cake',
      description: 'A classic red velvet cake with cream cheese frosting.',
      price: 16.99,
      image: 'https://images.pexels.com/photos/6133305/pexels-photo-6133305.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image URL
      rating: 4,
    },
    {
      _id: '16',
      name: 'Peach Cobbler',
      description: 'A warm peach cobbler with a crumbly topping.',
      price: 7.99,
      image: 'https://images.pexels.com/photos/6465973/pexels-photo-6465973.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image URL
      rating: 4,
    },
    {
      _id: '17',
      name: 'Chocolate Chip Cookie',
      description: 'A classic cookie loaded with chocolate chips.',
      price: 1.99,
      image: 'https://images.pexels.com/photos/5430711/pexels-photo-5430711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual image URL
      rating: 5,
    },
    {
      _id: '18',
      name: 'Baklava',
      description: 'A traditional Greek pastry made with layers of phyllo dough and honey.',
      price: 5.49,
      image: 'https://images.pexels.com/photos/10038723/pexels-photo-10038723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual image URL
      rating: 5,
    },
    {
      _id: '19',
      name: 'Scone',
      description: 'A buttery scone with raisins, served with clotted cream.',
      price: 3.99,
      image: 'https://images.pexels.com/photos/2263008/pexels-photo-2263008.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image URL
      rating: 4,
    },
    {
      _id: '20',
      name: 'Tiramisu',
      description: 'An Italian dessert made with layers of mascarpone and espresso-soaked ladyfingers.',
      price: 10.99,
      image: 'https://images.pexels.com/photos/1190165/pexels-photo-1190165.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image URL
      rating: 5,
    },
    {
      _id: '21',
      name: 'Almond Croissant',
      description: 'A buttery croissant filled with almond paste and topped with sliced almonds.',
      price: 3.99,
      image: 'https://images.pexels.com/photos/5662124/pexels-photo-5662124.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
    },
    {
      _id: '22',
      name: 'Peanut Butter Cookie',
      description: 'A soft, chewy cookie with a rich peanut butter flavor.',
      price: 1.79,
      image: 'https://images.pexels.com/photos/5848204/pexels-photo-5848204.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
    },
    {
      _id: '23',
      name: 'Banana Bread',
      description: 'A moist and delicious banana bread with a hint of cinnamon.',
      price: 6.99,
      image: 'https://images.pexels.com/photos/5837001/pexels-photo-5837001.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
    },
    {
      _id: '24',
      name: 'Black Forest Cake',
      description: 'Layers of chocolate cake with cherries and whipped cream.',
      price: 17.99,
      image: 'https://images.pexels.com/photos/8802102/pexels-photo-8802102.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
    },
    {
      _id: '25',
      name: 'Butter Pecan Tart',
      description: 'A buttery tart filled with a rich pecan filling.',
      price: 5.49,
      image: 'https://images.pexels.com/photos/5840161/pexels-photo-5840161.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
    },
    {
      _id: '26',
      name: 'Carrot Cake',
      description: 'Moist carrot cake with cream cheese frosting and walnuts.',
      price: 14.99,
      image: 'https://images.pexels.com/photos/5594508/pexels-photo-5594508.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
    },
    {
      _id: '27',
      name: 'Chocolate Mousse',
      description: 'A light and creamy chocolate mousse topped with whipped cream.',
      price: 7.99,
      image: 'https://images.pexels.com/photos/691152/pexels-photo-691152.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
    },
    {
      _id: '28',
      name: 'Coconut Macaroons',
      description: 'Sweet and chewy coconut macaroons dipped in chocolate.',
      price: 3.49,
      image: 'https://images.pexels.com/photos/5583531/pexels-photo-5583531.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
    },
    {
      _id: '29',
      name: 'Opera Cake',
      description: 'A layered cake with coffee buttercream, ganache, and almond sponge.',
      price: 18.99,
      image: 'https://images.pexels.com/photos/20818068/pexels-photo-20818068/free-photo-of-the-opera-cake.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
    },
    {
      _id: '30',
      name: 'Pistachio Financier',
      description: 'A small, rich almond and pistachio-flavored cake.',
      price: 4.99,
      image: 'https://images.pexels.com/photos/5602612/pexels-photo-5602612.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
    },
    {
      _id: '31',
      name: 'Raspberry Sorbet',
      description: 'A refreshing and tangy raspberry sorbet.',
      price: 3.99,
      image: 'https://images.pexels.com/photos/10547148/pexels-photo-10547148.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
    },
    {
      _id: '32',
      name: 'Triple Chocolate Brownie',
      description: 'A rich brownie with dark, milk, and white chocolate chunks.',
      price: 3.99,
      image: 'https://images.pexels.com/photos/5846203/pexels-photo-5846203.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
    },
    {
      _id: '33',
      name: 'Tart Tatin',
      description: 'An upside-down caramelized apple tart.',
      price: 11.99,
      image: 'https://images.pexels.com/photos/6607415/pexels-photo-6607415.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
    },
    {
      _id: '34',
      name: 'Pavlova',
      description: 'A light meringue dessert topped with fresh fruit and whipped cream.',
      price: 9.49,
      image: 'https://images.pexels.com/photos/18266911/pexels-photo-18266911/free-photo-of-piece-of-cake-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
    },
    {
      _id: '35',
      name: 'Viennese Whirls',
      description: 'Soft, buttery biscuits filled with buttercream and jam.',
      price: 2.99,
      image: 'https://images.pexels.com/photos/28584696/pexels-photo-28584696/free-photo-of-traditional-azerbaijan-cookies-and-tea-setup.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
    },
    {
      _id: '36',
      name: 'Sacher Torte',
      description: 'A decadent chocolate cake with apricot filling and chocolate glaze.',
      price: 16.99,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
    },
    {
      _id: '37',
      name: 'Marble Cake',
      description: 'A moist cake with swirls of vanilla and chocolate batter.',
      price: 12.99,
      image: 'https://images.pexels.com/photos/10281097/pexels-photo-10281097.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
    },
    {
      _id: '38',
      name: 'Gingerbread Man',
      description: 'A spiced gingerbread cookie in the shape of a man.',
      price: 1.99,
      image: 'https://images.pexels.com/photos/5702981/pexels-photo-5702981.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
    },
    {
      _id: '39',
      name: 'Fruit Tart',
      description: 'A buttery tart filled with custard and topped with fresh fruit.',
      price: 10.99,
      image: 'https://images.pexels.com/photos/28557310/pexels-photo-28557310/free-photo-of-delicious-berry-tart-with-refreshing-drink.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
    },
    {
      _id: '40',
      name: 'Churros',
      description: 'Fried dough pastry dusted with sugar and served with chocolate sauce.',
      price: 5.99,
      image: 'https://images.pexels.com/photos/372886/pexels-photo-372886.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
    },
    {
      _id: '41',
      name: 'Pumpkin Spice Muffin',
      description: 'Moist and fluffy muffin made with spiced pumpkin, perfect for fall.',
      price: 2.99,
      image: 'https://images.pexels.com/photos/5633982/pexels-photo-5633982.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
    },
    {
      _id: '42',
      name: 'Almond Biscotti',
      description: 'Crunchy Italian almond cookies, perfect for dipping in coffee.',
      price: 8.99,
      image: 'https://images.pexels.com/photos/776859/pexels-photo-776859.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 4,
    },
    
  ]);

  const navigate = useNavigate();

  const handleOrderNow = (product) => {
    // Navigate to Order page and pass product data as state
    navigate('/order', { state: { product } });
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow-lg transition-transform duration-300 transform hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            <div className="flex items-center mt-2">
              {/* Star rating system */}
              {[...Array(5)].map((star, index) => (
                <span key={index} className={`text-yellow-500 ${index < product.rating ? 'fas fa-star' : 'far fa-star'}`}></span>
              ))}
            </div>
            <button
              className="bg-yellow-500 mt-4 px-4 py-2 text-white rounded hover:bg-yellow-600 transition duration-300"
              onClick={() => handleOrderNow(product)} // Handle click event
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;