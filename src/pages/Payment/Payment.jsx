import styles from "./PaymentStyles.module.css";
// import ring from "../../assets/Frame 19.png";
import leftArrow from "../../assets/Vector (1).png";
import two from "../../assets/Frame 79 (1).png";
import one from "../../assets/Frame 67.png";
import smallOne from "../../assets/small one.png";
import smallTwo from "../../assets/small two.png";
// import shirt from "../../assets/Frame 33 (1).png";
// import bucketHat from "../../assets/Frame 57 (1).png";
// import jacket from "../../assets/Frame 58 (1).png";
// import tennisBracelet from "../../assets/Frame 59 (1).png";
import rightArrow from "../../assets/ph_arrow-right-thin (1).png";
import visa from "../../assets/visa_inc_logo.svg.png";
import smallVisa from "../../assets/visa_inc_logo.svg (1).png";
import masterCard from "../../assets/Group.png";
import smallMasterCard from "../../assets/mastercard_symbol.svg.png";
// import paypal from "../../assets/paypal (2).png";
// import smallPaypal from "../../assets/small paypal.png";
import ProductCard from "../../components/ProductCard";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { useContext, useEffect, useState } from "react";
import {
  PRODUCTSHOME,
  PRODUCTSJEWELLERY,
  PRODUCTSBAGS,
  PRODUCTSCLOTHES,
} from "../../data";
import { formatPrice } from "../../data";

const Payment = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    securityCode: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
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

  const validate = () => {
    let errors = {};
    if (!formValues.nameOnCard) {
      errors.nameOnCard = "Name on Card is required";
    }
    if (!formValues.cardNumber) {
      errors.cardNumber = "Card Number is required";
    } else if (!/^\d{16}$/.test(formValues.cardNumber)) {
      errors.cardNumber = "Card Number must be 16 digits";
    }
    if (!formValues.expiryDate) {
      errors.expiryDate = "Expiry Date is required";
    } else if (!/^\d{2}\/\d{2}$/.test(formValues.expiryDate)) {
      errors.expiryDate = "Expiry Date must be in MM/YY format";
    }
    if (!formValues.securityCode) {
      errors.securityCode = "Security Code is required";
    } else if (!/^\d{3,4}$/.test(formValues.securityCode)) {
      errors.securityCode = "Security Code must be 3 or 4 digits";
    }

    if (!selectedPaymentMethod) {
      errors.paymentMethod = "Please select a payment method";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      navigate("/confirmation");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  return (
    <section className={styles.payment}>
      <Link to="/shipping">
        <h4>
          <img src={leftArrow} alt="left arrow" /> Back to Shipping
        </h4>
      </Link>

      <div className={styles.icons}>
        {/* <img src={one} alt="" /> */}
        <picture className={styles.logo}>
          <source media="(max-width: 1024px)" srcSet={smallOne} />
          <source media="(min-width: 1025px)" srcSet={one} />
          <img src={one} alt="Responsive Image" />
        </picture>
        {/* <img src={two} alt="" /> */}
        <picture className={styles.logo}>
          <source media="(max-width: 1024px)" srcSet={smallTwo} />
          <source media="(min-width: 1025px)" srcSet={two} />
          <img src={two} alt="Responsive Image" />
        </picture>
      </div>
      <hr />
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h4>Payment </h4>
          <h5>Don’t worry! transactions are encrypted and secure</h5>
          <div className={styles.radio}>
            <input
              type="radio"
              name="paymentMethod"
              value="Credit/Debit Card"
              checked={selectedPaymentMethod === "Credit/Debit Card"}
              onChange={handlePaymentMethodChange}
            />
            <span>Credit/Debit Card</span>
            <div className={styles.imageWrap}>
              {/* <img src={visa} alt="" /> */}
              <picture className={styles.logo}>
                <source media="(max-width: 1024px)" srcSet={smallVisa} />
                <source media="(min-width: 1025px)" srcSet={visa} />
                <img src={visa} alt="Responsive Image" />
              </picture>
              {/* <img src={masterCard} alt="" /> */}
              <picture className={styles.logo}>
                <source media="(max-width: 1024px)" srcSet={smallMasterCard} />
                <source media="(min-width: 1025px)" srcSet={masterCard} />
                <img src={masterCard} alt="Responsive Image" />
              </picture>
            </div>
          </div>
          {formErrors.paymentMethod && (
            <span className={styles.error}>{formErrors.paymentMethod}</span>
          )}
          <input
            type="text"
            placeholder="Name on Card"
            name="nameOnCard"
            value={formValues.nameOnCard}
            onChange={handleChange}
          />
          {formErrors.nameOnCard && (
            <span className={styles.error}>{formErrors.nameOnCard}</span>
          )}
          <input
            type="text"
            placeholder="Card Number"
            name="cardNumber"
            value={formValues.cardNumber}
            onChange={handleChange}
          />
          {formErrors.cardNumber && (
            <span className={styles.error}>{formErrors.cardNumber}</span>
          )}
          <div className={styles.contact}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                placeholder="Expiry Date (MM / YY)"
                name="expiryDate"
                value={formValues.expiryDate}
                onChange={handleChange}
              />
              {formErrors.expiryDate && (
                <span className={styles.error}>{formErrors.expiryDate}</span>
              )}
            </div>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                placeholder="Security Code"
                name="securityCode"
                value={formValues.securityCode}
                onChange={handleChange}
              />
              {formErrors.securityCode && (
                <span className={styles.error}>{formErrors.securityCode}</span>
              )}
            </div>
          </div>
          <div className={styles.radio}>
            <input type="radio" />
            <span>My shipping and billing address are the same</span>
          </div>
          {/* <Link to="/confirmation"> */}
          <button>pay securely</button>
          {/* </Link> */}
        </form>
        <div className={styles.orderSummary}>
          <div className={styles.order}>
            {/* <div className={styles.image}> */}

            {/* <div className={styles.imageWrapper}> */}
            {/* <img src={ring} alt="ring" /> */}
            {/* </div> */}
            {/* </div> */}
            <div className={styles.totalSummary}>
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
        </div>
      </div>
    </section>
  );
};
export default Payment;
