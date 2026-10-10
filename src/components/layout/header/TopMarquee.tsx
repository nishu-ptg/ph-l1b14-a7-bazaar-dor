import Marquee from "react-marquee-text";
import { fetchBazaarDorData } from "@/lib/api";
import type { Product } from "@/types/bazaardor-data";
import DataLoadError from "../../shared/DataLoadError";

async function TopMarquee() {
  const products: Product[] = await fetchBazaarDorData("/products");
  if (!products) return <DataLoadError dataType="বাজারদর" />;

  const marqueeProducts = products.filter(
    (product) => product.change.dir !== "flat",
  );

  return (
    <div className="bg-white border-y border-zinc-200 py-3">
      <Marquee duration={30} pauseOnHover={true} direction="right">
        <div className="flex items-center gap-8 px-4">
          {marqueeProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-1 whitespace-nowrap text-sm"
            >
              <span>{product.image}</span>

              <span className="font-medium">{product.nameBn}</span>

              <span>
                {product.today} টাকা/{product.unit}
              </span>

              <span
                className={
                  product.change.dir === "up"
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {product.change.dir === "up" ? "▲" : "▼"} {product.change.pct}%
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default TopMarquee;
