import styles from "./NewStyles.module.css";
import leftArrow from "../../assets/leftarrow.png";
import smallLeftArrow from "../../assets/small left arrow.png";
import filterIcon from "../../assets/filter icon.png";

import { PRODUCTSJEWELLERY } from "../../data";
import { formatPrice } from "../../data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import one from "../../assets/Frame 19 (2).png";
// import two from "../../assets/Frame 10950.png";
// import three from "../../assets/Frame 10951.png";
// import four from "../../assets/Frame 10954.png";
// import five from "../../assets/Frame 10955.png";
// import six from "../../assets/Frame 10956.png";
// import seven from "../../assets/Frame 10960.png";
// import eight from "../../assets/Frame 10961.png";
// import nine from "../../assets/Frame 10962.png";
// import ten from "../../assets/Frame 10966.png";
// import eleven from "../../assets/Frame 10967.png";
// import twelve from "../../assets/Frame 10968.png";
// import thirteen from "../../assets/Frame 10969.png";
// import fourteen from "../../assets/Frame 10970.png";
// import fifteen from "../../assets/Frame 10971.png";
// import ProductCard from "../../components/ProductCard";

const New = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activePage, setActivePage] = useState(1); // Add this state to track the active page
  const handlePageClick = (page) => {
    setActivePage(page); // Update the active page when clicked
  };
  const pages = [1, 2, 3, 4, 5, 6];
  return (
    <section id="new" className={styles.new}>
      <Link to="/">
        <div className={styles.backBtn}>
          <picture>
            <source media="(max-width: 1024px)" srcSet={smallLeftArrow} />
            <source media="(min-width: 1025px)" srcSet={leftArrow} />
            <img src={smallLeftArrow} alt="Responsive Image" />
          </picture>
          {/* <img src={leftArrow} alt="left arrow" /> */}
          <span>Back to Home</span>
        </div>
      </Link>
      <h1>NEW IN: ENGAGEMENT COLLECTION</h1>
      <h3>
        Filter <img src={filterIcon} alt="filter" />
      </h3>
      <hr />
      <div className={styles.container}>
        <div className={styles.filter}>
          <h3>Filter</h3>
          <hr />
          <h4>Price Range</h4>
          <span>
            Low to High <input type="checkbox" name="" id="" />
          </span>

          <span>
            High to Low <input type="checkbox" name="" id="" />
          </span>

          <h4>Gem type</h4>
          <span>
            Moissanite <input type="checkbox" name="" id="" />
          </span>

          <span>
            Ruby <input type="checkbox" name="" id="" />
          </span>

          <span>
            Emerald <input type="checkbox" name="" id="" />
          </span>

          <span>
            Diamond <input type="checkbox" name="" id="" />
          </span>

          <span>
            Coloured diamonds <input type="checkbox" name="" id="" />
          </span>
          <h4>Ring style</h4>
          <span>
            single band <input type="checkbox" name="" id="" />
          </span>

          <span>
            Double band <input type="checkbox" name="" id="" />
          </span>
        </div>

        <div className={styles.shop}>
          {PRODUCTSJEWELLERY.map((product) => {
            return (
              <div key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img src={product.productImage} alt="ring" />
                </Link>
                <div className={styles.desc}>
                  <span>{product.productName}</span>
                  <span>{`₦${formatPrice(product.price)}`}</span>
                  <span>{product.color}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.pages}>
        {/* <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>5</span>
        <span>...</span>
        <span>8</span>
        <span>9</span>
        <span></span> */}

        {pages.map((page) => (
          <span
            key={page}
            className={activePage === page ? styles.activePage : ""}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </span>
        ))}
        <span>...</span>
      </div>
      <div className={styles.highlight}></div>
      <hr />
    </section>
  );
};
export default New;
