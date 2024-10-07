// import ring from "../../assets/Frame 63.png";
import leftArrow from "../../assets/Vector (1).png";
import smallLeftArrow from "../../assets/small left arrow.png";
// import shirt from "../../assets/Frame 33 (1).png";
// import bucketHat from "../../assets/Frame 57 (1).png";
// import jacket from "../../assets/Frame 58 (1).png";
// import tennisBracelet from "../../assets/Frame 59 (1).png";
import styles from "./CartStyles.module.css";
import { Link } from "react-router-dom";
import {
  PRODUCTSHOME,
  PRODUCTSJEWELLERY,
  PRODUCTSCLOTHES,
  PRODUCTSBAGS,
} from "../../data";
import { ShopContext } from "../../Context/ShopContext";
import { useContext, useEffect } from "react";
import CartItem from "./CartItem";
import ProductCard from "../../components/ProductCard"; // Import the new component

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(ShopContext);
  const allProducts = [
    ...PRODUCTSHOME,
    ...PRODUCTSJEWELLERY,
    ...PRODUCTSCLOTHES,
    ...PRODUCTSBAGS,
  ];
  const isCartEmpty = Object.values(cartItems).every((count) => count === 0);
  console.log("Cart Items in Cart Component:", cartItems);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={styles.container}>
      <Link to="/new">
        <h4>
          <picture>
            <source media="(max-width: 786px)" srcSet={smallLeftArrow} />
            <source media="(min-width: 787px)" srcSet={leftArrow} />
            <img src={smallLeftArrow} alt="Responsive Image" />
          </picture>
          Continue Shopping
        </h4>
      </Link>
      <h3>Your Shopping Bag</h3>
      <hr />
      {isCartEmpty ? (
        <p>Your bag is empty</p>
      ) : (
        allProducts.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <div key={product.id}>
                <CartItem product={product} removeFromCart={removeFromCart} />
              </div>
            );
          }
          return;
        })
      )}

      {!isCartEmpty && (
        <Link to="/shipping">
          <button className={styles.checkoutBtn}>Proceed to Checkout</button>
        </Link>
      )}

      <div className={styles.clothes}>
        <h2>YOU MAY ALSO LIKE</h2>
        <div className={styles.shirt}>
          {PRODUCTSCLOTHES.map((product) => (
            <div key={product.id} className={styles.card}>
              <ProductCard key={product.id} product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cart;
