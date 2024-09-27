// Payment.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { total, cart } = location.state || {}; // Retrieve the total and cart from the state

  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });

  if (!total || !cart) {
    return <div>Error: No order details found.</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePayment = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Here you would integrate with a real payment gateway
    navigate('/thank-you'); // Navigate to the Thank You page after payment
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-2xl font-semibold mb-6">Payment Gateway</h2>
      <div className="bg-gray-200 p-4 rounded shadow-md w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Order Summary</h3>
        <ul>
          {cart.map((item) => (
            <li key={item._id} className="mb-2">
              {item.name} (x{item.quantity}) - ${(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
        <h4 className="text-lg font-semibold mt-4">Total: ${total.toFixed(2)}</h4>
        <h4 className="text-lg font-semibold mt-1">GST (18%): ${(total * 0.18).toFixed(2)}</h4>
        <h3 className="text-xl font-bold mt-4">Final Total: ${(total + total * 0.18).toFixed(2)}</h3>
        
        <h3 className="text-lg font-bold mt-6">Enter Card Details</h3>
        <form className="mt-4" onSubmit={handlePayment}>
          <div className="mb-4">
            <label className="block mb-1">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleInputChange}
              required
              className="border p-2 rounded w-full"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Cardholder Name</label>
            <input
              type="text"
              name="cardHolder"
              value={cardDetails.cardHolder}
              onChange={handleInputChange}
              required
              className="border p-2 rounded w-full"
              placeholder="John Doe"
            />
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label className="block mb-1">Expiry Date (MM/YY)</label>
              <input
                type="text"
                name="expiryDate"
                value={cardDetails.expiryDate}
                onChange={handleInputChange}
                required
                className="border p-2 rounded w-full"
                placeholder="MM/YY"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block mb-1">CVV</label>
              <input
                type="text"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleInputChange}
                required
                className="border p-2 rounded w-full"
                placeholder="123"
                maxLength="3"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-500 w-full px-4 py-2 text-white rounded"
          >
            Proceed to Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
