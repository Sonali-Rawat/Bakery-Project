import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const Order = () => {
  const location = useLocation();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Function to add or update items in the cart
  const handleAddToCart = useCallback((item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem._id === item._id);

      if (existingItem) {
        // If item exists, increase its quantity
        const updatedCart = prevCart.map(cartItem =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity  }
            : cartItem
        );
        recalculateTotal(updatedCart);
        return updatedCart;
      } else {
        // If item does not exist, add it with quantity 1
        const newCart = [...prevCart, { ...item, quantity: 1 }];
        recalculateTotal(newCart);
        return newCart;
      }
    });
  }, []);

  // Effect to handle adding product from location state
  useEffect(() => {
    if (location.state?.product) {
      handleAddToCart(location.state.product);
    }
  }, [location.state, handleAddToCart]);

  // Function to remove an item from the cart
  const handleRemoveFromCart = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(item => item._id !== itemId);
      recalculateTotal(updatedCart);
      return updatedCart;
    });
  };

  // Function to increase the quantity of an item
  const increaseQuantity = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map(item => {
        if (item._id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      recalculateTotal(updatedCart);
      return updatedCart;
    });
  };

  // Function to decrease the quantity of an item
  const decreaseQuantity = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map(item => {
        if (item._id === itemId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      recalculateTotal(updatedCart);
      return updatedCart;
    });
  };

  // Function to recalculate the total price
  const recalculateTotal = (updatedCart) => {
    const newTotal = updatedCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotal(newTotal);
  };

  // Function to calculate GST
  const calculateGST = () => {
    return (total * 0.18).toFixed(2); // Assuming GST is 18%
  };

  // Final total including GST
  const finalTotalWithGST = (total + parseFloat(calculateGST())).toFixed(2);

  // Function to render the cart items in a table format
  const renderCartItems = () => {
    if (cart.length === 0) {
      return <tr><td colSpan="4" className="text-center">Your cart is empty.</td></tr>;
    }

    return cart.map((item) => (
      <tr key={item._id}>
        <td className="border px-4 py-2">{item.name}</td>
        <td className="border px-4 py-2">{item.quantity}</td>
        <td className="border px-4 py-2">${(item.price * item.quantity).toFixed(2)}</td>
        <td className="border px-4 py-2">
          <button onClick={() => decreaseQuantity(item._id)} className="bg-gray-200 rounded px-2">-</button>
          <button onClick={() => increaseQuantity(item._id)} className="bg-gray-200 rounded px-2 ml-2">+</button>
          <button onClick={() => handleRemoveFromCart(item._id)} className="text-red-500 ml-2">Remove</button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="flex p-8">
      <div className="w-1/2 pr-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Your Cart</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Item</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Total Price</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderCartItems()}
          </tbody>
        </table>
      </div>
      <div className="w-1/2 pl-4">
        <h3 className="text-xl font-semibold mb-4">Summary</h3>
        <div className="text-right mt-4">
          <h3>Total: ${total.toFixed(2)}</h3>
          <h4>GST (18%): ${calculateGST()}</h4>
          <h3 className="font-bold">Final Total: ${finalTotalWithGST}</h3>
          <button className="bg-green-500 mt-2 px-4 py-2 text-white rounded">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
