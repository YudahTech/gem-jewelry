import styles from "./ShippingStyles.module.css";
import ring from "../../assets/Frame 19.png";
import leftArrow from "../../assets/Vector (1).png";
import two from "../../assets/Frame 68.png";
import smallTwo from "../../assets/smallSecondIcon.png";
import one from "../../assets/Frame 67.png";
import smallOne from "../../assets/smallFirstIcon.png";
// import shirt from "../../assets/Frame 33 (1).png";
// import bucketHat from "../../assets/Frame 57 (1).png";
// import jacket from "../../assets/Frame 58 (1).png";
// import tennisBracelet from "../../assets/Frame 59 (1).png";
import rightArrow from "../../assets/ph_arrow-right-thin (1).png";
import ProductCard from "../../components/ProductCard";
import {
  PRODUCTSHOME,
  PRODUCTSJEWELLERY,
  PRODUCTSBAGS,
  PRODUCTSCLOTHES,
} from "../../data";
import { formatPrice } from "../../data";

import { ShopContext } from "../../Context/ShopContext";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Shipping = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const navigate = useNavigate();

  const allProducts = [
    ...PRODUCTSHOME,
    ...PRODUCTSJEWELLERY,
    ...PRODUCTSBAGS,
    ...PRODUCTSCLOTHES,
  ];
  const totalAmount = getTotalCartAmount();
  const delivery = 5000;

  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    cityState: "",
    zipCode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^[0-9]{10}$/.test(phoneNumber);
  };

  const validateZipCode = (zipCode) => {
    return /^[0-9]{5,6}$/.test(zipCode);
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formFields.firstName) formErrors.firstName = "First name is required.";
    if (!formFields.lastName) formErrors.lastName = "Last name is required.";
    if (!formFields.email || !validateEmail(formFields.email))
      formErrors.email = "Valid email is required.";
    if (!formFields.phoneNumber || !validatePhoneNumber(formFields.phoneNumber))
      formErrors.phoneNumber = "Valid phone number is required.";
    if (!formFields.address) formErrors.address = "Address is required.";
    if (!formFields.cityState) formErrors.cityState = "City/State is required.";
    if (!formFields.zipCode && !validateZipCode(formFields.zipCode))
      formErrors.zipCode = "Valid zip code is required.";

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      navigate("/payment");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={styles.shipping}>
      <Link to="/new">
        <h4>
          <img src={leftArrow} alt="left arrow" /> Continue Shopping
        </h4>
      </Link>

      <div className={styles.icons}>
        {/* <img src={one} alt="" /> */}
        <picture className={styles.logo}>
          <source media="(max-width: 786px)" srcSet={smallOne} />
          <source media="(min-width: 787px)" srcSet={one} />
          <img src={one} alt="Responsive Image" />
        </picture>
        {/* <img src={two} alt="" /> */}
        <picture className={styles.logo}>
          <source media="(max-width: 786px)" srcSet={smallTwo} />
          <source media="(min-width: 787px)" srcSet={two} />
          <img src={two} alt="Responsive Image" />
        </picture>
      </div>
      <hr />

      <div className={styles.container}>
        <div className={styles.form}>
          <h4>Shipping Details</h4>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formFields.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <span className={styles.error}>{errors.firstName}</span>
          )}
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formFields.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <span className={styles.error}>{errors.lastName}</span>
          )}

          <div className={styles.contact}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formFields.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </div>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formFields.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && (
                <span className={styles.error}>{errors.phoneNumber}</span>
              )}
            </div>
          </div>
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={formFields.address}
            onChange={handleChange}
          />
          {errors.address && (
            <span className={styles.error}>{errors.address}</span>
          )}
          <input
            type="text"
            placeholder="City/state"
            name="cityState"
            value={formFields.cityState}
            onChange={handleChange}
          />
          {errors.cityState && (
            <span className={styles.error}>{errors.cityState}</span>
          )}
          <input
            type="text"
            placeholder="ZIP Code (optional)"
            name="zipCode"
            value={formFields.zipCode}
            onChange={handleChange}
          />
          {errors.zipCode && (
            <span className={styles.error}>{errors.zipCode}</span>
          )}

          <p>Shipping Estimate: 3-5 working days</p>
          <Link to="/payment">
            <button onClick={handleSubmit}>proceed to payment</button>
          </Link>
        </div>
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
                <span>₦{`₦${formatPrice(totalAmount)}`}</span>
              </div>
              <hr />
              <div className={styles.amount}>
                <span>Delivery</span>
                <span>₦{`₦${formatPrice(delivery)}`}</span>
              </div>
              <div className={styles.amount}>
                <span>Estimated Total</span>
                <span>₦{`₦${formatPrice(totalAmount + delivery)}`}</span>
              </div>
            </div>
          </div>
          <div className={styles.discountBtn}>
            Discount Code <img src={rightArrow} alt="right arrow" />
          </div>
        </div>
      </div>
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
export default Shipping;
