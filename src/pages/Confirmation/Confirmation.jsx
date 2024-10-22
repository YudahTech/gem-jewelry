import styles from "./ConfirmationStyles.module.css";
import ring from "../../assets/Frame 19.png";
import leftArrow from "../../assets/Vector (1).png";
import thumbsUp from "../../assets/thumbsup.png";
// import two from "../../assets/Frame 79 (1).png";
// import one from "../../assets/Frame 67.png";
// import shirt from "../../assets/Frame 33 (1).png";
// import bucketHat from "../../assets/Frame 57 (1).png";
// import jacket from "../../assets/Frame 58 (1).png";
// import tennisBracelet from "../../assets/Frame 59 (1).png";
// import rightArrow from "../../assets/ph_arrow-right-thin (1).png";
import visa from "../../assets/visa_inc_logo.svg.png";
import masterCard from "../../assets/Group.png";
// import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { useContext, useEffect } from "react";
import {
  PRODUCTSHOME,
  PRODUCTSJEWELLERY,
  PRODUCTSBAGS,
  PRODUCTSCLOTHES,
} from "../../data";
import { formatPrice } from "../../data";

const Payment = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const allProducts = [
    ...PRODUCTSHOME,
    ...PRODUCTSJEWELLERY,
    ...PRODUCTSBAGS,
    ...PRODUCTSCLOTHES,
  ];
  const totalAmount = getTotalCartAmount();
  const delivery = 5000;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={styles.payment}>
      <h2>Payment Confirmation</h2>
      <hr />
      <div className={styles.container}>
        <div className={styles.successMessage}>
          <div className={styles.thumbsUp}>
            <img src={thumbsUp} alt="" />
          </div>
          <div className={styles.content}>
            <h4>You did it!🎉</h4>
            <span>
              Your order has been confirmed and a confirmation and tracking
              information has been sent to your email and phone number.
            </span>
          </div>
        </div>
        {/* <div className={styles.orderSummary}>
          <div className={styles.order}> */}
        {/* <div className={styles.image}> */}
        {/* <h5>Order Summary</h5> */}
        {/* <div className={styles.imageWrapper}> */}
        {/* <img src={ring} alt="ring" /> */}
        {/* </div> */}
        {/* </div> */}
        {/* <div className={styles.totalSummary}>
              <h2>Order Summary</h2>
              <div className={styles.summary}>
                {allProducts.map((product) => {
                  if (cartItems[product.id] !== 0) {
                    return (
                      <>
                        <div className={styles.imageWrapper}>
                          <img src={product.productImage} alt="" />
                        </div>
                        <div className={styles.des}>
                          <h4>{product.productName}</h4>
                          <p>{product.color}</p>
                          <h5>Qty: {cartItems[product.id]}</h5>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
              <div className={styles.amount}>
                <span>Subtotal</span>
                <span>{`₦${formatPrice(totalAmount)}`}</span>
              </div>
              <hr />
              <div className={styles.amount}>
                <span>Delivery</span>
                <span>{`₦${formatPrice(delivery)}`}</span>
              </div>
              <div className={styles.amount}>
                <span>Estimated Total</span>
                <span>{`₦${formatPrice(totalAmount + delivery)}`}</span>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
      <Link to="/">
        <div className={styles.backToHome}>
          <button>Back to Home</button>
        </div>
      </Link>
    </section>
  );
};
export default Payment;
