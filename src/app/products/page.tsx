import Link from "next/link";

function ProductList() {
  return (
    <>
      <h1>Product List</h1>
      <Link href='/products/1'><div>Product 1</div></Link>
      <Link href='/products/2'><div>Product 2</div></Link>
      <Link href='/products/3'><div>Product 3</div></Link>
    </>
  );
}

export default ProductList;
