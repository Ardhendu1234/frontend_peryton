import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from "react-hot-toast";

function ServiceForm({ item, onClose }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();  
      try {  
        await emailjs.send(
          'service_ex3hfon',    
          'template_72wge2o',   
          {
            email: email,
            phone: phone,
            address: address,
            message: message,
          },
         'CUtL5NjK6GNvV43_8'       
        ); 
        toast.success("Email Sent");
        onClose()

    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Error sending email: ' + error.message);
    
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full ">
      <h2 className="text-2xl font-bold mb-4">Contact Form for {item}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Phone Number:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded"
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

export default ServiceForm;


