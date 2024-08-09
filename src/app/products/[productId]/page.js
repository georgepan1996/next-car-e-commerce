"use client";

import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import { ProductDetailsItem } from "@/components/ProductDetailsItem";
import { useProducts } from "@/components/ProductsProvider";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetails({ params, searchParams }) {
  const { products } = useProducts();
  const [product, setProduct] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [noProductMessage, setNoProductMessage] = useState("");

  const topMessageStyles = {
    color: "black",
  };

  useEffect(() => {
    const getProduct = async () => {
      await axios
        .get("http://localhost:3000/accessories", {
          params: {
            id: params.productId,
          },
        })
        .then((data) => {
          if (data.data.length === 0) {
            setNoProductMessage(
              <h3 style={{ color: "black" }}>No product found</h3>
            );
            setLoading(false);
            return;
          }
          setProduct((p) => data.data[0]);
          setLoading(false);
        })
        .catch((error) => {
          setErrorMessage("Something went wrong! Please, try again");
          setLoading(false);
        });
    };

    getProduct();
  }, [params.productId, products.accessories]);

  return (
    <>
      <div className="product-details">
        <ButtonLink text="Go to products" href="/products" />
        {loading ? (
          <h3 style={topMessageStyles}>loading...</h3>
        ) : noProductMessage ? (
          <h3 style={topMessageStyles}>No product found</h3>
        ) : (
          <ProductDetailsItem
            id={product.id}
            largeImageUrl={product.largeImageUrl}
            description={product.description}
            title={product.title}
            price={product.price}
            disclaimer={product.disclaimer}
            characteristics={product.characteristics}
          />
        )}
      </div>
    </>
  );
}
