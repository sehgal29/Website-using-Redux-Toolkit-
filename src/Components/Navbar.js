import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaHome, FaShoppingBag } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const count = useSelector((state) => state.counter);
  return (
    <nav className="navbar">
      <div className="nav-container">
      <ul className="nav-left">
        <li><NavLink to="/"> <FaHome style={{fontSize: "25px"}}/> Home</NavLink></li>
        <li><NavLink to="/product"> <FaShoppingBag style={{fontSize: "25px"}}/> Product</NavLink></li>
      </ul>
      <ul className="nav-right">
        <li>
          <NavLink to={'/cart-items'}>Cart</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="cart-icon">
            <FaShoppingCart style={{fontSize: "25px"}}/>
            <span className="cart-count">{count.length}</span>
          </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
