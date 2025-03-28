import React, { useEffect, useState } from 'react';
import { toast } from "react-hot-toast";
import emailjs from 'emailjs-com';

function ContactForm({ onClose, cart }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const countPrice = () => {
      let total = 0;
      cart.forEach((element) => {
        total += element.price * element.quantity;
      });
      setPrice(total);
    };
    countPrice();

    // Auto-fill cart data in message
    const cartDetails = cart.map(item => `${item.name} (Quantity: ${item.quantity})`).join('\n');
    const autoFilledMessage = `My order details:\n\n${cartDetails}\n\nTotal Amount: $${price.toFixed(2)}`;
    setMessage(autoFilledMessage);
  }, [cart, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    
    try {
      await emailjs.send(
        'service_ex3hfon',    
        'template_72wge2o',
        {
          email:email,
          phone:phone,
          address:address,
          message:message, 
        },
        'CUtL5NjK6GNvV43_8'        
      );
      toast.success("Email Send");
      onClose();
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email: ' + error.message); 
    }
  };
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full overflow-scroll ">
      <h2 className="text-2xl font-bold mb-2">Contact Form</h2>
      <div className="mb-6 bg-gray-100 p-4 rounded-lg h-[100px] overflow-scroll">
        <h3 className="text-lg font-semibold mb-2">Your Cart:</h3>
        
        {cart.map((cartItem) => (
          <div key={cartItem._id} className="flex justify-between items-center mb-2">
            <span>{cartItem.name}</span>
            <span className="font-medium">Quantity: {cartItem.quantity}</span>
          </div>
        ))}
        <div>Amount : ${price.toFixed(2)}</div>
      </div>
     
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-1 border rounded"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2">Phone Number:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-1 border rounded"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2">Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-1 border rounded"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2">Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded"
            rows="6"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={onClose}
          className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default ContactForm;