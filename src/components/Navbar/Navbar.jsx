import { useState } from "react";
import styles from "./NavbarStyles.module.css";
import logo from "../../assets/mainlogo.png";
import like from "../../assets/like-filled.png";
import profile from "../../assets/iconamoon_profile-light.png";
import search from "../../assets/material-symbols-light_search.png";
import cartIcon from "../../assets/carticon.png";
import emptyCartIcon from "../../assets/Empty cart icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";
import smallLogo from "../../assets/GemJewelrybyAD.png";
// import menu from "../../assets/mdi-light_menu.png";
import smallSearchIcon from "../../assets/light_search (1).png";

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);
  const isCartEmpty = Object.values(cartItems).every((count) => count === 0);
  console.log("Cart Items in Cart Component:", cartItems);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav>
      <div className={styles.discount}>
        <span>25% off new drops</span>
      </div>
      <div className={styles.navbar}>
        {/* <img src={logo} alt="logo" className={styles.logo} /> */}
        <picture className={styles.logo}>
          <source media="(max-width: 786px)" srcSet={smallLogo} />
          <source media="(min-width: 787px)" srcSet={logo} />
          <img src={logo} alt="Responsive Image" />
        </picture>
        <div className={styles.navIcons}>
          {/* <img src={search} alt="search icon" className={styles.searchIcon} /> */}
          <picture className={styles.searchIcon}>
            <source media="(max-width: 786px)" srcSet={smallSearchIcon} />
            <source media="(min-width: 787px)" srcSet={search} />
            <img src={smallSearchIcon} alt="Responsive Image" />
          </picture>
          <input type="text" placeholder="Search" />
          <img src={like} alt="heart icon" className={styles.navIcon} />
          <img src={profile} alt="profile icon" className={styles.navIcon} />
          {isCartEmpty ? (
            <Link to="/cart">
              <img
                src={emptyCartIcon}
                alt="cart icon"
                className={`${styles.navIcon} ${styles.cartIcon}`}
                id="cart"
              />
            </Link>
          ) : (
            <Link to="/cart">
              <img
                src={cartIcon}
                alt="cart icon"
                className={`${styles.navIcon} ${styles.cartIcon}`}
                id="
              cart"
              />
            </Link>
          )}
          <div className={styles.hamburgerMenu} onClick={toggleDropdown}>
            &#9776;
          </div>
        </div>
      </div>

      <div
        className={`${styles.navLinks} ${isDropdownOpen ? styles.open : ""}`}
      >
        <Link to="/">Home</Link>
        <Link to="/new">New in</Link>
        <Link to="#">Acessories</Link>
        <Link to="#">Jewellery</Link>
        <Link to="#">Clothing</Link>
        <Link to="#">Gift sets</Link>
      </div>

      <div
        className={`${styles.dropDown} ${isDropdownOpen ? styles.open : ""}`}
      >
        <Link to="/">Home</Link>
        <Link to="/new">New in</Link>
        <Link to="#">Acessories</Link>
        <Link to="#">Jewellery</Link>
        <Link to="#">Clothing</Link>
        <Link to="#">Gift sets</Link>
        <button className={styles.cancelButton} onClick={closeDropdown}>
          Cancel
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
