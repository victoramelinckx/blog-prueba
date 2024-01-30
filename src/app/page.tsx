import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen">
      <div className="container py-24">
        <h1 className="text-3xl font-bold text-white">New Project!</h1>
        <Link href="/blog" className="text-white my-16">
          Go to Blog
        </Link>
      </div>
    </section>
  );
}
