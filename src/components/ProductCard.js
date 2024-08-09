"use client";

import Image from "next/image";
import ButtonLink from "./ButtonLink";
import { useProducts } from "@/components/ProductsProvider";

export default function ProductCard({
  id = 0,
  title = "No title",
  description = "No description",
  imageUrl = "/car-logo.png",
  price = "0$",
}) {
  const { addToCart, removeFromCart } = useProducts();

  return (
    <div className="product-card">
      <div className="product-card__image">
        <Image height={200} width={250} src={imageUrl} alt={description} />
      </div>
      <div className="product-card__content">
        <div className="product-card__text">
          <div className="product-card__title">{title}</div>
          <div className="product-card__price">{price}</div>
          <div className="product-card__description">{description}</div>
        </div>
        <div className="product-card__actions">
          <ButtonLink text="DETAILS" href={`/products/${id}`} />
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
    </div>
  );
}
