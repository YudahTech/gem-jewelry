import styles from "./ProductStyles.module.css";
import smallRightArrow from "../../assets/small right arrow.png";
// import first from "../../assets/Frame 56.png";
// import second from "../../assets/Frame 57.png";
// import third from "../../assets/Frame 58.png";
// import fourth from "../../assets/Frame 59.png";
// import shirt from "../../assets/Frame 33 (1).png";
// import bucketHat from "../../assets/Frame 57 (1).png";
// import jacket from "../../assets/Frame 58 (1).png";
// import tennisBracelet from "../../assets/Frame 59 (1).png";
// import ProductCard from "../../components/ProductCard";
import rightArrow from "../../assets/ph_arrow-right-thin (1).png";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  PRODUCTSHOME,
  PRODUCTSBAGS,
  PRODUCTSJEWELLERY,
  PRODUCTSCLOTHES,
} from "../../data";
import { formatPrice } from "../../data";
import { ShopContext } from "../../Context/ShopContext";
import { useContext, useEffect } from "react";

const product = () => {
  // const { id, productName, price, productImage } = props.data\\\;
  const { productId } = useParams();
  const navigate = useNavigate();
  const allProducts = [
    ...PRODUCTSHOME,
    ...PRODUCTSJEWELLERY,
    ...PRODUCTSCLOTHES,
    ...PRODUCTSBAGS,
  ];
  const product = allProducts.find(
    (product) => product.id.toString() === productId
  );
  const { productName, productImage, id } = product;
  // const { productName, productImage, id } = products;
  const { addToCart } = useContext(ShopContext);
  // const cartItemAmount = cartItems[id]
  const relatedProducts = PRODUCTSCLOTHES.slice(0, 4);
  const handleClickRelatedProduct = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  return (
    <section id="product" className={styles.container}>
      <div className={styles.productDetails}>
        <div className={styles.imageWrapper}>
          <img src={productImage} alt="ring" />
        </div>
        <div className={styles.imageWrappers}>
          <img src={productImage} alt="ring" />
          <img src={productImage} alt="ring" />
          <img src={productImage} alt="ring" />
          <img src={productImage} alt="ring" />
        </div>
        <div className={styles.content}>
          <h3>{productName}</h3>
          <p className={styles.price}>₦300,000</p>
          <p className={styles.color}>Rosegold</p>
          <p className={styles.sizeGuide}>
            <Link to="#">Size Guide</Link>
          </p>
          <div className={styles.addToBag}>
            <Link to="/cart">
              <button className={styles.goToBag} onClick={() => addToCart(id)}>
                Add to bag
              </button>
            </Link>
          </div>

          <h4>Description</h4>
          <span className={styles.desc}>
            A beautiful rosegold statement engagement ring, with diamonds all
            around gold rim. Not like your regular diamond ring.
          </span>
        </div>
      </div>

      <div className={styles.statement}>
        <h2>ROSE GOLD STATEMENT RING</h2>
        <hr />

        <span>
          Shipping Details
          <picture className={styles.rightArrow}>
            <source media="(max-width: 1024px)" srcSet={smallRightArrow} />
            <source media="(min-width: 1025px)" srcSet={rightArrow} />
            <img src={smallRightArrow} alt="Responsive Image" />
          </picture>
        </span>

        <hr />
        <span>
          Return Policy
          <picture className={styles.rightArrow}>
            <source media="(max-width: 1024px)" srcSet={smallRightArrow} />
            <source media="(min-width: 1025px)" srcSet={rightArrow} />
            <img src={smallRightArrow} alt="Responsive Image" />
          </picture>
        </span>
        <hr />
        <span>
          Customer Reviews
          <picture className={styles.rightArrow}>
            <source media="(max-width: 1024px)" srcSet={smallRightArrow} />
            <source media="(min-width: 1025px)" srcSet={rightArrow} />
            <img src={smallRightArrow} alt="Responsive Image" />
          </picture>
        </span>
      </div>

      <div className={styles.clothes}>
        <h2>YOU MAY ALSO LIKE </h2>
        <div className={styles.shirt}>
          {relatedProducts.map((relatedProduct) => {
            return (
              <div key={relatedProduct.id}>
                <div
                  onClick={() => handleClickRelatedProduct(relatedProduct.id)}
                >
                  <img
                    src={relatedProduct.productImage}
                    alt={relatedProduct.productName}
                  />
                </div>
                <div>
                  <span>{relatedProduct.productName}</span>
                  <span>{`₦${formatPrice(relatedProduct.price)}`}</span>
                  <span>{relatedProduct.color}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default product;
