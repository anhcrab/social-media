import React, { useState } from "react";
import "./L_header.scss";
import Logo from "../../assets/pic/Logo.png";
export default function L_header() {
  return (
    <header className="row z-index">
      <div className="col-12 col-lg-12 col-xl-12"></div>
      <div className="col-0 col-lg-1 col-xl-1"></div>
      <div className="col-10 col-lg-1 col-xl-1 header_menu">
        <div className="row">
          <div className="col-6 col-lg-8 col-xl-6">
            <img className="logo_menu" src={Logo} alt="" href="#" />

            {/* For iphone */}
            <label className="mobile_menu ipad_none desktop_none">
              <input type="checkbox" />
              <span class="menu">
                <span class="hamburger"></span>
              </span>
              <ul className="iphone_cartory">
                <button className="product_btn">
                  <p className="menu-text">Product</p>
                </button>
                <button className="user_cases_btn">
                  <p className="menu-text">Use Cases</p>
                </button>
                <button className="user_cases_btn">
                  <p className="menu-text">ROBIN AI</p>
                </button>
                <button className="try-btn">
                  <p className="menu-text-try">Try DAO Manager</p>
                </button>
              </ul>
            </label>
            {/* For iphone */}

            <button className="product_btn iphone-none">
              <p className="menu-text">Product</p>
            </button>
            <button className="user_cases_btn iphone-none">
              <p className="menu-text">Use Cases</p>
            </button>
            <button className="user_cases_btn iphone-none">
              <p className="menu-text">ROBIN AI</p>
            </button>
          </div>
          <div className="col-0 col-lg-0 col-xl-3"></div>
          <div className="col-2 col-lg-3 col-xl-3">
            <button className="try-btn iphone-none">
              <p className="menu-text-try">Try DAO Manager</p>
            </button>
          </div>
        </div>
      </div>

      <div className="col-0 col-lg-1 col-xl-1"></div>
    </header>
  );
}
