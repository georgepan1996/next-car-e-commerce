"use client";
import { useProducts } from "@/components/ProductsProvider";
import CartItem from "@/components/CartItem";

export default function Cart() {
  const { products } = useProducts();

  function hasItems() {
    return products.cartItems.length;
  }
  return (
    <div className="cart">
      {hasItems() ? (
        <div className="cart__list" style={{ color: "black" }}>
          {products.cartItems.map((p) => (
            <CartItem
              key={p.id}
              id={p.id}
              title={p.title}
              price={p.price}
              quantity={p.quantity}
            />
          ))}
        </div>
      ) : (
        <h3 style={{ color: "black" }}>No items in cart</h3>
      )}
    </div>
  );
}
