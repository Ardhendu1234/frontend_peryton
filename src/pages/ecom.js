import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Ecomdata } from '../constants/Ecomdata';
import ContactForm from '../components/ContactForm';


function Ecommerce() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleButtonClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseForm = () => {
    setSelectedItem(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">E-commerce Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Ecomdata.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-md">
            <Link to={`/item/${item.id}`}>
              <img src={item.path} alt={item.name} className="w-full h-48 object-cover mb-4" />
              <h2 className="text-xl font-semibold">{item.name}</h2>
            </Link>
            <button
              onClick={() => handleButtonClick(item)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <ContactForm item={selectedItem} onClose={handleCloseForm} />
        </div>
      )}
    </div>
  );
}

export default Ecommerce;
