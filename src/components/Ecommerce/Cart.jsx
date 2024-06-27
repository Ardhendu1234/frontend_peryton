import React from 'react'

const Cart = ({cart,setCart}) => {

    const handleIncreaseQuantity = (itemId) => {
       const updateCart= cart.map(item => 
          item._id === itemId 
            ? {...item, quantity: (item.quantity || 1) + 1}
            : item
        )
        setCart(updateCart)
      };
      
      const handleDecreaseQuantity = (itemId) => {
       const updateCart=cart.map(item => 
          item._id === itemId && item.quantity > 0
            ? {...item, quantity: item.quantity - 1}
            : item
        ).filter(item => item.quantity > 0);
        setCart(updateCart)
      };
  return (
    <div className="flex p-[1vw] flex-wrap justify-center md:justify-start items-center md:items-start gap-[2vw] bg-zinc-100 w-[20vw] sm:w-[20vw] pl-[1.5vw]">
        <div>
        {cart.map((item) => (
  <div key={item._id} className="flex items-center border border-gray-200 rounded-lg p-4 m-2 shadow-sm">
    <img src={item.imageUrls} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
    <div className="flex flex-col flex-grow">
      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
      <div className="flex items-center">
        <button 
          onClick={() => handleDecreaseQuantity(item._id)}
          className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l-md hover:bg-gray-300"
        >
          -
        </button>
        <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
        <button 
          onClick={() => handleIncreaseQuantity(item._id)}
          className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r-md hover:bg-gray-300"
        >
          +
        </button>
      </div>
    </div>
  </div>
))}
        </div>
    </div>
  )
}

export default Cart