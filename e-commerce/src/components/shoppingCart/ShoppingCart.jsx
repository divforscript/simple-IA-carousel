import { useState } from "react";

import BackgroundInset from "../backInset/BackgroundInset";

import "../shoppingCart/ShoppingCart.css"

export default function ShoppingCart({ isOpen, setIsOpen, closeNavMob }) {
  
  const [isCartEmpty,setIsCartEmpty] = useState(true)
  
  if (!isOpen) return null; // Do not render if the cart is closed

  return (

    <div id="cart-box"
        className="bg-white fixed top-20 left-0
        rounded-xl z-20 ml-[3vw]
        w-[94%]
        min-h-[260px] h-auto"
      >
      
        <h2 id="cart-title"
          className="text-[black] text-lg font-bold
          border-b-2 border-b-[#e4e5e9] p-6
          w-full h-16"
        >
          Cart
        </h2>
        
        <div id="cart-items-box"
          className="overflow-auto  
          w-full p-6
          min-h-[176px] max-h-[50vh]"
        >

          { isCartEmpty 
            ? <p className="text-gray-600 font-bold text-lg
              w-full h-32 flex justify-center items-center"
              >
                Your cart is empty.
              </p> 
            : <p 
                className="text-gray-600
                w-full h-32 flex justify-center items-center"
              >
                Aquí van tus productos
              </p> 
          }
          
        </div>
    
      </div>

  );
}




