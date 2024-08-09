"use client";

import { useProducts } from "@/components/ProductsProvider";

export default function CartItem({
  id = 0,
  title = "No title",
  price = "0$",
  quantity = 0,
}) {
  const { products, addToCart, removeFromCart } = useProducts();

  function getTotalPrice() {
    const priceNum = parseInt(price) * quantity;
    return `${priceNum}$`;
  }

  return (
    <div className="cart-item">
      <div className="cart-item__text">
        {`${title} X ${quantity} ${price}`}{" "}
        <strong>{`${getTotalPrice()}`}</strong>
      </div>
      <div className="cart-item__actions">
        <button
          onClick={() => addToCart({ id, title, price })}
          type="button"
          title="Add to cart"
          className="button-action bi-plus"
        ></button>
        <button
          onClick={() => removeFromCart({ id, title, price })}
          type="button"
          title="Remove from cart"
          className="button-action bi-dash"
        ></button>
      </div>
    </div>
  );
}
