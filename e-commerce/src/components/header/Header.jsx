

// Pattern N°2:
import "./Header.css";
import { useState } from "react";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import BackgroundInset from "../backInset/BackgroundInset";


import iconMenu from "../../../../asset-template/images/icon-menu.svg";
const iconClosePath =
  "m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z";

import sneakersLogo from "../../../../asset-template/images/logo.svg";

import iconCart from "../../../../asset-template/images/icon-cart.svg";
const iconCartPath =
  "M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z";

import imageAvatar from "../../../../asset-template/images/image-avatar.png";



const root = document.getElementById("root");


export default function Header() {
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle mobile nav bar behavior
  const [navColPosition, setNavColPosition] = useState("left-[-250px]");
  function showNavMobileColumn() {
    root.classList.remove("overflow-auto");
    root.classList.add("overflow-hidden");

    setIsCartOpen(false);
    setIsModalOpen(!isModalOpen);
    setNavColPosition("left-[0px]");
  }

  function closeNavMobileColumn() {
    root.classList.remove("overflow-hidden");
    root.classList.add("overflow-auto");

    setIsModalOpen(false);
    setNavColPosition("left-[-250px]");
  }

  window.onresize = () => {
    closeNavMobileColumn();
  };


  // DESKTOP NAV BAR
  const navBarLinks = [
    { id: "collections", name: "Collections" },
    { id: "men", name: "Men" },
    { id: "women", name: "Women" },
    { id: "about", name: "About" },
    { id: "contact", name: "Contact" },
  ]

  // Handle nav bar (desktop) with links click event
  const [b_sel,setBsel] = useState("border-b-[#ff7d1a]")
  const [b_usel,setUsel] = useState("border-b-[#ffffff]")
  const [ulineColors, setUlineColors] = useState([
    b_sel,b_usel,b_usel,b_usel,b_usel,
  ]);

  function underline(idx) {
    setUlineColors(
      ulineColors.map((color, ind) => ind === idx ? b_sel : b_usel)
    );
    setIsCartOpen(false);
  }



  // COMPONENT DEFINITION
  return (
    <header
      id="header"
      className="bg-white w-full h-[70px] p-5 sticky top-0 flex items-center"
    >
      {/* <div
        id="background-inset"
        className={`bg-black opacity-75 h-screen absolute inset-0 z-30 ${handleBackInset}`}
        onClick={closeNavMobileColumn}
      ></div> */}

      { isModalOpen && 
        (<BackgroundInset 
            zIndex={"z-30"}
            closeNavMob={closeNavMobileColumn}
        />) 
      }  

      <nav
        id="nav-mobileColumn"
        className={`bg-white text-black overflow-auto 
        absolute top-0 z-30 transition-[left] duration-300 ${navColPosition} 
        w-[90%] max-w-[250px] h-screen`}
      >
        <div
          id="nav-closeIcon-div"
          className="w-full h-[75px] p-5 flex items-center"
        >
          <button
            className="bg-slate-300 size-7 rounded-full 
            flex justify-center items-center hover:cursor-pointer"
            onClick={closeNavMobileColumn}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15">
              <path d={iconClosePath} fill="#69707D" fillRule="evenodd" />
            </svg>
          </button>
        </div>

        <div
          id="nav-links2"
          className="w-full h-[calc(100%-75px)] pb-5 overflow-auto"
        >
          <ul
            id="nav-links-ul2"
            className="font-bold text-[#1d2025] px-5 "
          >
            {/* <li className="nav-itemsCol">
              <a href="#">Collections</a>
            </li>
            <li className="nav-itemsCol">
              <a href="#">Men</a>
            </li>
            <li className="nav-itemsCol">
              <a href="#">Women</a>
            </li>
            <li className="nav-itemsCol">
              <a href="#">About</a>
            </li>
            <li className="nav-itemsCol">
              <a href="#">Contact</a>
            </li> */}

            {navBarLinks.map((link,idx) => {
              return(
                <li key={link.name+"navCol"}
                  className="nav-itemsCol"
                >
                  <a href="#">{link.name}</a>
                </li>
              );
            })}
            
          </ul>
        </div>
      </nav>

      <button
        id="icon-menu"
        onClick={showNavMobileColumn}
        className="w-5 h-5 relative left-0 
        transition-[left] duration-300 delay-0"
      >
        <img src={iconMenu} alt="#" />
      </button>

      <div id="desktop-header" className="w-full">
        <div id="sneakers-div" className="h-full flex items-center">
          <img
            id="sneakers-logo"
            src={sneakersLogo}
            alt="e-commerce-Logo"
            className="h-5 relative left-5 z-0 
            transition-[left] duration-300"
          />
        </div>

        <nav
          id="nav-mobileBar"
          className="h-full absolute left-[-500px] top-5 transition-[left] duration-300"
        >
          <ul
            id="nav-links-ul1"
            className="h-full px-5 font-bold text-[#1d2025] 
            flex items-center gap-[6%]"
          >
            {/* <li className={`nav-itemsBar border-b-4 border-b-${ulineColors[0]}`}><a onClick={() => underline(0)} href="#">Collections</a></li>

            <li className={`nav-itemsBar border-b-4 border-b-${ulineColors[1]}`}> <a onClick={() => underline(1)} href="#">Men</a></li>

            <li className={`nav-itemsBar border-b-4 border-b-${ulineColors[2]}`}> <a onClick={() => underline(2)} href="#">Women</a></li>

            <li className={`nav-itemsBar border-b-4 border-b-${ulineColors[3]}`}><a onClick={() => underline(3)} href="#">About</a></li>

            <li className={`nav-itemsBar border-b-4 border-b-${ulineColors[4]}`}> <a onClick={() => underline(4)} href="#">Contact</a></li> */}

            
            {navBarLinks.map((link,idx) => {
              
              return(
                <li 
                  key={link.id}
                  className={`nav-itemsBar border-b-4 ${ulineColors[idx]}`}
                > 
                  <a onClick={() => underline(idx)} href="#"
                  > 
                    {link.name}
                  </a>
                </li>
              );
            
            })}

            {/* <li className={`nav-itemsBar border-b-4 ${ulineColors[4]}`}> <a onClick={() => underline(4)} href="#">{link}</a></li> */}

          </ul>
        </nav>

        {/* Botón del carrito */}
        <button
          id="icon-cart-div"
          className="w-[24px] h-7 absolute top-5 right-16 flex items-center 
          transition-[right] duration-300"
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          <svg id="icon-cart" xmlns="http://www.w3.org/2000/svg" width="22" height="20" className="">
            <path d={iconCartPath} fill="#69707D" fillRule="nonzero" />
          </svg>
        </button>


        {/* Ventana flotante del carrito */}
        <ShoppingCart 
          isOpen={isCartOpen} 
          setIsOpen={setIsCartOpen}
          closeNavMob={closeNavMobileColumn}
        />


        <button
          id="image-avatar"
          className="h-7 w-7 absolute top-5 right-5"
        >
          <img src={imageAvatar} alt="user-avatar" />
        </button>

        
      </div>
    </header>
  );
}


