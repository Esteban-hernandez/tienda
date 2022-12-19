import Product from "../Product/product";

export default function Grid() {
  return (
    <div className="grid gap-2 grid-cols-[repeat(2,1fr)]">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}
