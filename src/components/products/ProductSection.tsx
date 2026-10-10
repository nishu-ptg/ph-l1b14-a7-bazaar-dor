import { ReactNode } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "@/types/bazaardor-data";

interface IProductSectionProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  products: Product[];
}

function ProductSection({ title, subtitle, products }: IProductSectionProps) {
  return (
    <section className="space-y-4 my-10">
      <div>
        {title && <h2 className="text-xl font-bold">{title}</h2>}
        {subtitle && <p className="mt-2 text-black/70">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
