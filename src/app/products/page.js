"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useProducts } from "@/components/ProductsProvider";

import ProductCard from "@/components/ProductCard";

export default function ProductList() {
  const [accessories, setAccessories] = useState();
  const [loading, setLoading] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const { setProducts } = useProducts();

  useEffect(() => {
    const getAccessories = async () => {
      await axios
        .get("http://localhost:3000/accessories")
        .then((data) => {
          setAccessories(
            data.data.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                description={item.description}
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
              />
            ))
          );
          setProducts((p) => {
            return {
              ...p,
              accessories: data.data,
            };
          });
        })
        .catch((error) => {
          setErrorMessage("Something went wrong! Please, try again");
        });
    };
    getAccessories();
  }, [setProducts]);

  return (
    <section className="product-list">
      <h1 className="product-list__title">Our car accessories</h1>
      <h2 className="product-list__summary">
        Inspirational designs, illustrations, and graphic elements from the
        world’s best designers. Want more inspiration? Browse our search
        results..
      </h2>
      <div className="product-list__items">{accessories}</div>
    </section>
  );
}
