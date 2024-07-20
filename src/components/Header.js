import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import menuImg from "../assets/images/OpenIcon.png";

const menuList = ["Find Workers","Find Jobs","About Us","Resources","Contact"]

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
      <header className="flex justify-between items-center w-screen border border-b-[#BDBDBD] px-4 md:px-36 h-20">      
          <img src={logo} className="max-w-[30%] h-auto object-contain" alt="logo" />
        <div className="h-6 bg-[#212A34] w-[2px] hidden md:block"></div>  
  
        <nav>
            <ul
              className={`navbar-list flex flex-col md:flex-row md:gap-4 min-[1300px]:gap-12 ${openMenu
                ? "fixed inset-0 flex-col items-center justify-center text-center bg-[#e7eaee] transition-transform transform translate-x-0 opacity-100 z-50"
                : "fixed inset-0 flex-col items-center justify-center text-center transition-transform transform translate-x-full opacity-0 md:static md:opacity-100 md:flex md:flex-row md:translate-x-0"
                }`}
            >
            
              {
                menuList.map((menu) => (
                  <li key={menu} className="text-md text-[#212A34] text-bolder cursor-pointer py-1 md:py-0" style={{ fontWeight: 500 }}  onClick={() => setOpenMenu(false)}>
                    {menu}
                  </li>
                ))
              }
              <li className="text-md text-[#212A34] cursor-pointer md:ml-20 py-1 md:py-0" style={{ fontWeight: 600 }}>
                Login
              </li>
              <li>
                <button className="border border-[#212A34] md:px-4 py-2 rounded-lg mt-1 px-2" style={{ fontWeight: 600 }}>
                  Open an account
                </button>
              </li>
            </ul>
            <div className={`${openMenu ? "hidden" : "block"} md:hidden mr-12`} onClick={() => setOpenMenu(true)}>         
              <img src={menuImg} alt="menu" className="max-w-[80%] h-auto"/>
            </div>    
        </nav>      
      </header>
    );
};

export default Header;


