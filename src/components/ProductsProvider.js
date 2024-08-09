"use client";
import { createContext, useContext, useState } from "react";

const productsDefault = {
  cartItems: [],
  accessories: [],
};

const ProductsContext = createContext(productsDefault);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(productsDefault);

  function getCartProductIndex(cItems, id) {
    return cItems.findIndex((item) => item.id === id);
  }

  function addToCart(product) {
    const cardItemsCopy = products.cartItems.slice();
    const cartProductIndex = getCartProductIndex(cardItemsCopy, product.id);

    if (cartProductIndex === -1) {
      cardItemsCopy.push({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
      });
    }
    if (cartProductIndex > -1) {
      cardItemsCopy[cartProductIndex].quantity++;
    }

    setProducts((p) => {
      return {
        ...p,
        cartItems: [...cardItemsCopy],
      };
    });
  }

  function removeFromCart(product) {
    const cardItemsCopy = products.cartItems.slice();
    const cartProductIndex = getCartProductIndex(cardItemsCopy, product.id);
    if (cartProductIndex === -1) {
      return;
    }
    if (cartProductIndex > -1) {
      cardItemsCopy[cartProductIndex].quantity--;
    }

    if (cardItemsCopy[cartProductIndex].quantity <= 0) {
      cardItemsCopy.splice(cartProductIndex, 1);
    }
    setProducts((p) => {
      return {
        ...p,
        cartItems: [...cardItemsCopy],
      };
    });
  }
  return (
    <ProductsContext.Provider
      value={{ products, setProducts, addToCart, removeFromCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
