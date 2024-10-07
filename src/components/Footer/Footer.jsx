import styles from "./FooterStyles.module.css";
import footerLogo from "../../assets/footerlogo.png";
import smallFooterLogo from "../../assets/small footer logo.png";
import tiktok from "../../assets/tiktok.png";
import insta from "../../assets/insta.png";
import pinterest from "../../assets/pinterest.png";
import facebook from "../../assets/facebook.png";
import rightArrow from "../../assets/ph_arrow-right-thin (1).png";
import smallRightArrow from "../../assets/small right arrow.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className={styles.container}>
      <div className={styles.logo}>
        {/* <img src={footerLogo} alt="logo" /> */}
        <picture className={styles.logo}>
          <source media="(max-width: 786px)" srcSet={smallFooterLogo} />
          <source media="(min-width: 787px)" srcSet={footerLogo} />
          <img src={footerLogo} alt="Responsive Image" />
        </picture>
      </div>
      <hr />
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <Link to="#">About Us</Link>
          <Link to="#">Terms and Conditions</Link>
          <Link to="#">Shipping</Link>
          <Link to="#">Return Policy</Link>
          <Link to="#">Become an Ambassador</Link>
        </div>
        <div className={styles.rightContent}>
          <Link to="#">Subscribe for exclusive offers</Link>
          <h3>JOIN THE CLUB</h3>
          <input type="text" placeholder="Enter your email address" />
          {/* <div className={styles.rightArrow}> */}
          {/* <img src={rightArrow} alt="right arrow" /> */}
          <picture className={styles.rightArrow}>
            <source media="(max-width: 786px)" srcSet={smallRightArrow} />
            <source media="(min-width: 787px)" srcSet={rightArrow} />
            <img src={smallRightArrow} alt="Responsive Image" />
          </picture>
          {/* </div> */}
          <div className={styles.socialIcons}>
            <img src={tiktok} alt="tiktok logo" />
            <img src={insta} alt="instagram logo" />
            <img src={pinterest} alt="pinterest logo" />
            <img src={facebook} alt="facebook logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
