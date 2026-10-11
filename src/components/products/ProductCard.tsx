import Link from "next/link";
import { IProduct } from "@/types/bazaardor-data";

interface IProductCardProps {
  product: IProduct;
}

function ProductCard({ product }: IProductCardProps) {
  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  return (
    <Link href="/">
      <div className="card bg-base-100 border border-zinc-200 rounded-2xl">
        <div className="card-body p-4">
          <div className="flex items-start gap-3">
            <div className="avatar">
              <div className="w-12 rounded-2xl flex items-center justify-center bg-zinc-50 p-3 text-2xl">
                {product.image}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-base-content">{product.nameBn}</h3>
              <p className="text-sm text-base-content/70">
                প্রতি {product.unit}
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-sm text-base-content/70">আজকের দাম</p>
              <p className="text-2xl font-bold">{product.today} টাকা</p>
            </div>
            <div
              className={`badge badge-soft badge-lg ${
                isUp
                  ? "badge-error"
                  : isDown
                    ? "badge-success"
                    : "badge-neutral"
              }`}
            >
              {isUp ? "▲" : isDown ? "▼" : "—"} {product.change.pct}%
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
