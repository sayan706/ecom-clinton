import React from "react";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuth } from "../hooks/useAuth";
import { screenWidth } from "../utils/screen";
import logo from "../assets/svg/logo.svg";
import order from "../assets/svg/order.svg";
import smallLogo from "../assets/favicons/favicon-96x96.png";

const Header = () => {
  const logout = useLogout();
  const { auth } = useAuth();

  return (
    <header className="flex flex-col bg-[#f0f5ff]">
      <Navbar />
      <div className="top p-4 flex justify-between items-center gap-10">
        <div className="logo-section">
          <img
            src={screenWidth >= 370 ? logo : smallLogo}
            alt="Logo"
            className={screenWidth >= 370 ? "w-auto" : "w-10"}
            width={screenWidth >= 370 ? 122 : 96}
            height={screenWidth >= 370 ? 23 : 96}
          />
        </div>
        <div className="hidden lg:block search-section flex-grow">
          <SearchBar />
        </div>
        {auth?.user && (
          <div className="profile-section">
            <div className="flex items-center space-x-4">
              <a className="cursor-pointer text-center text-gray-700 hover:text-primary transition relative">
                <div className="text-base sm:text-xl lg:text-2xl">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="text-xs leading-3">Wishlist</div>
                <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                  8
                </div>
              </a>
              <a className="cursor-pointer text-center text-gray-700 hover:text-primary transition relative">
                <div className="text-base sm:text-xl lg:text-2xl">
                  <i className="fa-solid fa-bag-shopping"></i>
                </div>
                <div className="text-xs leading-3">Cart</div>
                <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                  2
                </div>
              </a>
              <a className="cursor-pointer group relative text-center transition text-gray-700 hover:text-primary">
                <div className="text-base sm:text-xl lg:text-2xl">
                  <i className="fa-regular fa-user"></i>
                </div>
                <div className="text-xs leading-3">Account</div>
                <section className="account-menu z-[1] cursor-pointer w-[200px] invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute -left-[150px] duration-200 rounded-md shadow-md border border-slate-300 text-black bg-white">
                  <ul className="w-full flex flex-col text-nowrap">
                    <Link to="/login">
                      <li className="p-4 pr-2 w-full text-sm font-medium flex items-center border-b gap-4 hover:bg-gray-100 text-slate-600">
                        <span>
                          <img src={order} />
                        </span>
                        <span>My Orders</span>
                      </li>
                    </Link>
                    <Link to="/login">
                      <li className="p-4 pr-2 w-full text-sm font-medium flex items-center border-b gap-4 hover:bg-gray-100 text-slate-600">
                        <span>
                          <i className="fa-solid fa-user text-lg text-blue-600"></i>
                        </span>
                        <span>My Profile</span>
                      </li>
                    </Link>
                    <Link to="/login">
                      <li className="p-4 pr-2 w-full text-sm font-medium flex items-center border-b gap-4 hover:bg-gray-100 text-slate-600">
                        <span>
                          <i class="fa-solid fa-location-dot text-lg text-blue-600"></i>
                        </span>
                        <span>My Addresses</span>
                      </li>
                    </Link>
                  </ul>
                </section>
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="bottom block lg:hidden pt-0 p-4">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
