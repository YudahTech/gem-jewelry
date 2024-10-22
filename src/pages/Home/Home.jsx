import styles from "./HomeStyles.module.css";
import flower from "../../assets/flower.png";
import smallFlower from "../../assets/small.png";
// import ring from "../../assets/Frame 19.png";
// import bangles from "../../assets/Frame 20.png";
// import silverNecklace from "../../assets/Frame 21.png";
// import earrings from "../../assets/Frame 53.png";
import goldNecklace from "../../assets/Frame 29 (1).png";
import rightArrow from "../../assets/ph_arrow-right-thin (1).png";
import smallRightArrow from "../../assets/small right arrow.png";
// import brownClutchBag from "../../assets/Frame 33.png";
// import brownToteBag from "../../assets/Frame 34.png";
// import neonClutchBag from "../../assets/Frame 35.png";
// import greenClutchBag from "../../assets/Frame 36.png";
import fullRating from "../../assets/Frame 42.png";
import threeStarRating from "../../assets/Frame 42 (1).png";
import fourStarRating from "../../assets/Frame 42 (2).png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { PRODUCTSHOME } from "../../data";
import { PRODUCTSBAGS } from "../../data";
import { formatPrice } from "../../data";

const Home = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <section id="home" className="styles.container">
      <div className={styles.imageWrapper}>
        {/* <img src={flower} alt="flower" /> */}
        {/* <picture>
          <source media="(max-width: 786px)" srcSet={smallFlower} />
          <source media="(min-width: 787px)" srcSet={smallFlower} />
          <img src={smallFlower} alt="Responsive Image" />
        </picture> */}
        <div className={styles.imageContent}>
          <h1>NEW IN: ENGAGEMENT COLLECTION</h1>
          <h5>Check out our new engagement collection at 25% off</h5>
          <Link to="/new">
            <button>Shop Now</button>
          </Link>
        </div>
      </div>

      <div className={styles.jewellery}>
        {PRODUCTSHOME.map((product) => {
          return (
            <div key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.productImage} alt="ring" />
              </Link>
              <div>
                <span>{product.productName}</span>
                <span>{`₦${formatPrice(product.price)}`}</span>
                <span>{product.color}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.customize}>
        <div className={styles.goldNecklace}>
          <img src={goldNecklace} alt="gold necklace" />
        </div>
        <div className={styles.content}>
          <h5>Get a free non-tarnish ring with custom purchases</h5>
          <h3>CUSTOMISE YOUR OWN JEWELLERY </h3>
          <button>
            Customize my jewelery
            <picture className={styles.rightArrow}>
              <source media="(max-width: 1025px)" srcSet={smallRightArrow} />
              <source media="(min-width: 786px)" srcSet={rightArrow} />
              <img src={smallRightArrow} alt="Responsive Image" />
            </picture>
          </button>
          {/* <div className={styles.rightArrow}> */}

          {/* </div> */}
        </div>
      </div>

      <div className={styles.bagsContainer}>
        <div className={styles.content}>
          <h1>CHECK OUT OUR BAG COLLECTION</h1>
          <a href="#">See more</a>
        </div>
        <div className={styles.bags}>
          {PRODUCTSBAGS.map((product) => {
            return (
              <div key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img src={product.productImage} alt="ring" />
                </Link>

                <div key={product.id}>
                  <span>{product.productName}</span>
                  <span>{`₦${formatPrice(product.price)}`}</span>
                  <span>{product.color}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.reviewsContainer}>
        <div className={styles.heading}>
          <h4>CUSTOMER REVIEWS</h4>
          <h5>
            We at GemJewelrybyAD take pride in meeting the needs of our
            customers, our pieces are gotten from top notch sources. We love to
            receive reviews from you, please be share your thoughts with us.
          </h5>
        </div>
        <div className={styles.reviews}>
          <div className={styles.topReview}>
            <div className={styles.review}>
              <div className={styles.rating}>
                <img src={fullRating} alt="rating" />
              </div>
              <p>Reviewed by: Ali O.</p>
              <q>
                I bought a pair of gold earrings for my wife, and she loves
                them! The quality of the gold is top-notch, and the design is
                unique. The customer service was very helpful in answering my
                questions before I made the purchase. My only minor complaint is
                that the delivery took a day longer than expected. Overall, very
                satisfied!
              </q>
            </div>
            <div className={styles.review}>
              <div className={styles.rating}>
                <img src={fourStarRating} alt="rating" />
              </div>
              <p>Reviewed by: Sarah K.</p>
              <q>
                I recently purchased a diamond necklace from GemJewelrybyAD, and
                I am beyond thrilled with the quality and craftsmanship. The
                piece is absolutely stunning and exactly as described. The
                packaging was elegant, and the delivery was prompt. I will
                definitely be purchasing more jewellery from this site!
              </q>
            </div>
          </div>
          <div className={styles.bottomReview}>
            <div className={styles.review}>
              <div className={styles.rating}>
                <img src={threeStarRating} alt="rating" />
              </div>
              <p>Reviewed by: Olu O.</p>
              <q>
                The gold ring I ordered is beautiful and fits perfectly. The
                product quality is great, but the shipping was quite slow. It
                took almost two weeks to arrive, which was disappointing.
                However, the customer support team was responsive and kept me
                updated throughout the process.
              </q>
            </div>
            <a href="#">See more</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
