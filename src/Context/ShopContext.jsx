import { createContext, useState, useEffect } from "react";
import {
  PRODUCTSHOME,
  PRODUCTSJEWELLERY,
  PRODUCTSBAGS,
  PRODUCTSCLOTHES,
} from "../data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  const allProducts = [
    ...PRODUCTSHOME,
    ...PRODUCTSJEWELLERY,
    ...PRODUCTSBAGS,
    ...PRODUCTSCLOTHES,
  ];
  for (let i = 1; i < allProducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  // Function to get cart from localStorage or default if not available
  const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      return JSON.parse(savedCart);
    } else {
      return getDefaultCart();
    }
  };

  const [cartItems, setCartItems] = useState(loadCartFromLocalStorage());

  const allProducts = [
    ...PRODUCTSHOME,
    ...PRODUCTSJEWELLERY,
    ...PRODUCTSBAGS,
    ...PRODUCTSCLOTHES,
  ];

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProducts.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(`Adding item ${itemId} to cart`);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: 0, // Clear the quantity
    }));
  };

  const reduceItems = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0),
    }));
  };

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    reduceItems,
    getTotalCartAmount,
  };

  useEffect(() => {
    console.log("Cart Items Updated:", cartItems);
  }, [cartItems]);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
