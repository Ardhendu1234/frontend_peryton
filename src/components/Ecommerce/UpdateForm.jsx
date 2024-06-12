import React, { useState } from 'react';

const UpdateProductForm = ({ initialProduct }) => {
  const [name, setName] = useState(initialProduct.name);
  const [description, setDescription] = useState(initialProduct.description);
  const [price, setPrice] = useState(initialProduct.price);
  const [productType, setProductType] = useState(initialProduct.productType);
  const [stock, setStock] = useState(initialProduct.stock);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log({
      name,
      description,
      price,
      productType,
      stock,
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Update Product</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="productType">
            Product Type
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="productType"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            required
          >
            <option value="">Select Product Type</option>
            <option value="FPV Goggles">FPV Goggles</option>
            <option value="Frames">Frames</option>
            <option value="Light Controllers">Light Controllers</option>
            <option value="Receivers">Receivers</option>
            <option value="Transmitters">Transmitters</option>
            <option value="VTX">VTX</option>
            <option value="Cameras">Cameras</option>
            <option value="Antennas">Antennas</option>
            <option value="Propellers">Propellers</option>
            <option value="Motors">Motors</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="stock">
            Stock
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="stock"
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(Number(e.target.value))}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProductForm;