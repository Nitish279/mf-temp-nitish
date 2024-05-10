import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { GrLineChart } from "react-icons/gr";
import logo from "../images/londonstockexchange_logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="revenue-info">
          <div className="revenue-info-icons">
            <GrLineChart className="icon-arrow" color="#001eff" size={32} />
          </div>
          <div className="revenue-info-text">
            <div className="revenue-text">Revenue Driven for Our Clients</div>
            <div className="revenue-number">2,120,240,443</div>
          </div>
        </div>
        <div className="proposal">
          <BiPhoneCall className="proposal-icon" color="#333333" size={24} />
          <span>Get a Proposal: 888-400-5050</span>
        </div>
      </div>

      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">
              <a href="#" className="header__link">
                {/* <svg className="header__icon">
                  <use href="#heart"></use>
                </svg> */}
                <img
                  src={logo}
                  alt="LSEG Logo"
                  className="logo-icon header__icon"
                />
              </a>
            </div>
            <nav className="nav">
              <a href="" className="nav__link">
                Discover
              </a>
              <a href="" className="nav__link">
                News and Prices
              </a>
              <a href="" className="nav__link">
                Raise Finance
              </a>
              <a href="" className="nav__link">
                Equities Trading
              </a>
              <a href="" className="nav__link">
                Personal Investing
              </a>
              <a href="" className="nav__link">
                Resources
              </a>
              <a href="" className="nav__link">
                Log In / Sign Up
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
