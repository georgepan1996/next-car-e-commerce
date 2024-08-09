import { useEffect, useRef, useState } from "react";

export default function ButtonAction({ icon = "plus" }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.classList.add(`bi-${icon}`);
    buttonRef.current.title =
      icon === "plus" ? "Add to cart" : "Remove from cart";
  });

  return (
    <button
      ref={buttonRef}
      type="button"
      title="Cart action"
      className="button-action"
    ></button>
  );
}
