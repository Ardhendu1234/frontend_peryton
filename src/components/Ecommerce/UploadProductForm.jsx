import React, { useState } from 'react';
import axios from 'axios'
import { ECOMM_URL } from '../../constants/apiCalls';

const UploadProductForm = ({onClose,productTypeData}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [productType, setProductType] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [stock, setStock] = useState(0);

  const handleSubmit =async () => {
    try {
      // const res=await axios.post(`${ECOMM_URL}/addProduct`,{
      //   name,
      //   description,
      //   price,
      //   productType,
      //   stock,
      //   imageUrls:imageFile
      // },{
      //   headers: {
      //     'Content-Type': 'application/json', // Set the appropriate Content-Type header
      //   }) 
      console.log( name,
        description,
        price,
        productType,
        stock,
        imageFile
      )

      const res = await axios.post(`${ECOMM_URL}/addProduct`, {
        name,
        description,
        price,
        productType,
        stock,
        imageUrls:imageFile
      }, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },

    });

    } catch (error) {
      console.log("there is error while sending request")
    }
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
    console.log(e.target.files[0])
  };

  return (
    <div className="max-w-md mx-auto bg-white h-fit ">
      <h2 className="text-2xl font-bold mb-4 text-center">Upload Product</h2>
      <form  className="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight "
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
            className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="productType">
            Product Type
          </label>
          <select
            className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="productType"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            required
          >
            <option value="">Select Product Type</option>
            {productTypeData?.map((item,key)=>(
              <option key={key} value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="imageFile">
            Image
          </label>
          <input
            className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="imageFile"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="stock">
            Stock
          </label>
          <input
            className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="stock"
            type="text"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
          onClick={()=>handleSubmit()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Upload Product
          </button>
          <button
          type="button"
          onClick={onClose}
          className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
        >
          Cancel
        </button>
        </div>
      </form>
    </div>
  );
};

export default UploadProductForm;