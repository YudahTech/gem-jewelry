import styles from "./CartStyles.module.css";
import cancelBtn from "../../assets/fluent-mdl2_cancel.png";
import { ShopContext } from "../../Context/ShopContext";
import { formatPrice } from "../../data";
import { Link } from "react-router-dom";
import { useContext } from "react";
const CartItem = (props) => {
  const { id, productName, price, productImage, color } = props.product;
  const { cartItems, addToCart, reduceItems } = useContext(ShopContext);
  return (
    <div className={styles.productDetails}>
      <div className={styles.cancelBtn}>
        <img
          src={cancelBtn}
          alt="cancel button"
          onClick={() => props.removeFromCart(id)}
        />
      </div>
      <div className={styles.imageWrapper}>
        <img src={productImage} alt={productName} />
      </div>
      <div className={styles.content}>
        <h3>
          {productName}
          <img
            src={cancelBtn}
            alt="cancel button"
            onClick={() => props.removeFromCart(id)}
          />
        </h3>
        <p className={styles.price}>{`₦${formatPrice(price)}`}</p>
        <p className={styles.color}>{color}</p>
        <div className={styles.addToBag}>
          <button className={styles.decrease} onClick={() => reduceItems(id)}>
            -
          </button>
          <span>{cartItems[id]}</span>
          <button className={styles.increase} onClick={() => addToCart(id)}>
            +
          </button>
        </div>
        <p className={styles.sizeGuide}>
          <Link to="#">Save for later</Link>
        </p>
      </div>
    </div>
  );
};
export default CartItem;
