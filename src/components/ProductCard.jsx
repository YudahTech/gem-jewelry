// ProductCard.js
// import React from "react";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../data";
// import styles from "./ProductCardStyles.module.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div>
      <div key={product.id} onClick={handleCardClick}>
        <img src={product.productImage} alt={product.productName} />
        <div>
          <span>{product.productName}</span>
          <span>{`₦${formatPrice(product.price)}`}</span>
          <span>{product.color}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
