"use client";

import Image from "next/image";
import { useProducts } from "@/components/ProductsProvider";

export function ProductDetailsItem({
  id = 0,
  largeImageUrl = "/car-logo.png",
  description = "No description",
  title = "No title",
  price = "0$",
  disclaimer = "No disclaimer",
  characteristics = ["No characteristics"],
}) {
  const { addToCart, removeFromCart } = useProducts();

  return (
    <div className="product-details__item">
      <div className="product-details__image">
        <Image src={largeImageUrl} fill sizes="100%" alt={description} />
      </div>
      <div className="product-details__content">
        <div className="product-details__title">{title}</div>
        <div className="product-details__price">{price}</div>
        <div className="product-details__description">{description}</div>
        <div className="product-details__disclaimer">{disclaimer}</div>
        <ol className="product-details__characteristics">
          {characteristics?.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ol>
      </div>
      <div className="product-details__actions">
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
