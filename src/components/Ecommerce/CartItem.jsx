



// import { toast } from "react-hot-toast";

// const CartItem = ({item}) => {
  

//   return (
//     <div className="p-4 border-b-2 last:border-none border-slate-700">

//       <div className="flex justify-between py-3.5 px-2.5 gap-14 flex-col md:flex-row">

//         <div className="md:w-[30%] w-full flex justify-center items-center">
//           <img src={item.image} alt="" className="w-[40%] md:w-[50%] lg:w-full"/>
//         </div>
//         <div className="md:w-[70%] w-full flex flex-col gap-5">
//           <h1 className="text-xl font-[600] text-slate-700">{item.title}</h1>
//           <div className="flex items-center">
//                 <button
//                   onClick={() =>handleDecreaseQuantity(item._id)}
//                   className="bg-gray-200 text-gray-700 text-[1.5vw] px-[1vw] md:text-[1.25vw] py-[0.5vw] rounded-l-md hover:bg-gray-300"
//                 >
//                   -
//                 </button>
//                 <span className="bg-gray-100 px-[1vw] text-[1.5vw] md:text-[1.25vw] py-[0.5vw]">{item.quantity}</span>
//                 <button
//                   onClick={() =>handleIncreaseQuantity(item._id)}
//                   className="bg-gray-200 text-gray-700 text-[1.5vw] md:text-[1.25vw] px-[1vw] py-[0.5vw] rounded-r-md hover:bg-gray-300"
//                 >
//                   +
//                 </button>
//               </div>
//           <h1 className="text-slate-700">{
//             item.description.split(" ").slice(0,15).join(" ") + "..."}
//           </h1>
//           <div className="flex justify-between">
//             <p className="font-bold text-[#16a34a] text-lg">${item.price}</p>
//             <div
//             onClick={removeFromCart}
//             className="w-10 h-10 rounded-full bg-red-200 flex justify-center items-center
//              hover:bg-red-400 group transition-all">
//               <MdDeleteSweep fontSize={25} className="group-hover:text-white text-red-800 transition-all"/>
//             </div>
//           </div>

//         </div>


//       </div>

//     </div>
//   );
// };

// export default CartItem;
