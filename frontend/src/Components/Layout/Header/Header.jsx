import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import "./Header.css"

const options = {
  burgerColor:"black",
  burgerColorHover: "#da00c0",
  logo,
  logoWidth: "15vmax",
  navColor1: "#141414",
  logoHoverSize: "10px",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "white",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#0099ff",
  link1Margin: "1vmax",
  searchIconMargin: "10px",
  cartIconMargin:"10px",
  profileIconMargin:"10px",
  profileIconUrl:"/login",
  searchIconColorHover:"#0099ff",
  cartIconColorHover:"#0099ff",
  profileIconColorHover:"#0099ff",
  profileIconSize:"2vmax"
};

function Header() {
  return (
    <ReactNavbar
      {...options}
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      searchIcon={true}
      SearchIconElement={FaSearch}
      cartIcon={true}
      CartIconElement={FiShoppingCart}
    />
  );
}

export default Header;
