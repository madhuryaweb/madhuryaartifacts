import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-4">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
          Page Not Found
        </p>
        <h1 className="font-heading text-8xl md:text-9xl text-charcoal/10 leading-none mb-4">
          404
        </h1>
        <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-4">
          This Page Has
          <span className="italic text-gold"> Moved On</span>
        </h2>
        <p className="font-body text-charcoal-light mb-10 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back to something beautiful.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/products" className="btn-outline">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
