"use client";

import Image from "next/image";
import Link from "next/link";
import { useProducts } from "@/components/ProductsProvider";

export default function Header() {
  const { products } = useProducts();
  function getQuantitiesSum() {
    let sum = 0;
    for (const item of products.cartItems) {
      sum += item.quantity;
    }
    return sum;
  }

  return (
    <header className="header">
      <Link
        href="/"
        className="header__brand"
        title="car logo brand"
        aria-label="car logo brand"
      >
        <div className="header__logo">
          <Image src="/car-logo.png" alt="Car logo" width={180} height={70} />
        </div>
        <div className="header__company">Car shop</div>
      </Link>
      <div className="header__links">
        <Link href="/products" rel="icon" className="bi-card-list"></Link>
        <Link href="/cart" rel="icon" className="bi-cart">
          <span>&nbsp;</span>
          <small>({getQuantitiesSum()})</small>
        </Link>
      </div>
    </header>
  );
}
