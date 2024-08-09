import ButtonLink from "./ButtonLink";

export default function Welcome() {
  return (
    <section className="welcome">
      <h1 className="welcome__title">
        Welcome to our <strong>Car shop!</strong>
      </h1>
      <ButtonLink text="SEE PRODUCTS" href="/products" />
    </section>
  );
}
