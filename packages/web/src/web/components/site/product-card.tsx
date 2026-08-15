import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { asset, cn } from "@/lib/utils";
import { categoryById, type Product } from "@/lib/content";

export function ProductCard({
  product,
  delay = 0,
  className,
}: {
  product: Product;
  delay?: number;
  className?: string;
}) {
  const category = categoryById(product.category);

  return (
    <Link
      to={`/products/${product.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden border border-line bg-surface transition-colors duration-500 hover:border-line-strong",
        className,
      )}
      data-reveal
      data-reveal-delay={delay}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-void">
        <img
          src={asset(product.image)}
          alt={`${product.name} fixture`}
          loading="lazy"
          className="size-full object-cover opacity-90 transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.04] group-hover:opacity-100"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"
          aria-hidden="true"
        />
        {product.status !== "In production" && (
          <span className="absolute top-4 left-4 rounded-full bg-ember px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.14em] uppercase text-void">
            {product.status}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[0.6875rem] tracking-[0.16em] uppercase text-ember">
              {product.model}
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.03em] text-ink">
              {product.name}
            </h3>
          </div>
          <ArrowUpRight className="mt-1 size-4 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember" />
        </div>

        <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted">
          {product.tagline}
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-line pt-5">
          {product.keySpecs.slice(0, 4).map((spec) => (
            <div key={spec.label}>
              <dt className="font-mono text-[0.625rem] tracking-[0.14em] uppercase text-faint">
                {spec.label}
              </dt>
              <dd className="mt-1 font-mono text-[0.8125rem] text-ink">{spec.value}</dd>
            </div>
          ))}
        </dl>

        {category && (
          <p className="mt-5 font-mono text-[0.6875rem] tracking-[0.14em] uppercase text-faint">
            {category.code} — {category.name}
          </p>
        )}
      </div>

      <span
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-ember transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-x-100"
        aria-hidden="true"
      />
    </Link>
  );
}
