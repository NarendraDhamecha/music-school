import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Welcom Home!</h1>
      <div>
        <Link href="/blog">Blog</Link>
      </div>
      <div>
        <Link href="/products">Products</Link>
      </div>
      <div>
        <Link href="/about">About</Link>
      </div>
      <div>
        <Link href="/profile">Profile</Link>
      </div>
    </>
  );
}

export default Home;
