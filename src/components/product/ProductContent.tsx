import { fetchBazaarDorData } from "@/lib/api";
import { IProduct } from "@/types/bazaardor-data";
import DataLoadError from "../shared/DataLoadError";
import { notFound } from "next/navigation";
import Link from "next/link";

interface IProductContentProps {
  params: Promise<{ slug: string }>;
}

async function ProductContent({ params }: IProductContentProps) {
  const { slug } = await params;

  const allProducts: IProduct[] = await fetchBazaarDorData("/products");
  if (!allProducts) return <DataLoadError dataType="পণ্য" />;

  const product = allProducts.find((item) => item.slug === slug);
  if (!product) notFound();
  console.log("product", product);

  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  const marketData = product.markets;
  const marketPrices = {
    min: Math.min(...marketData.map((m) => m.min)),
    max: Math.max(...marketData.map((m) => m.max)),
    avg:
      marketData.reduce((sum, m) => sum + (m.min + m.max) / 2, 0) /
      marketData.length,
  };

  return (
    <>
      <div className="breadcrumbs text-sm my-4">
        <ul>
          <li>
            <Link href="/">হোম</Link>
          </li>
          <li>
            <Link href={`/category/${product.category}`}>
              {product.categoryNameBn}
            </Link>
          </li>
          <li>{product.nameBn}</li>
        </ul>
      </div>

      <div className="card bg-base-100 border border-zinc-200 rounded-2xl">
        <div className="card-body flex-row items-center justify-between p-5">
          <div className="flex items-center gap-4">
            <div className="size-20 rounded-2xl bg-base-200 flex items-center justify-center text-5xl">
              {product.image}
            </div>

            <div>
              <h1 className="text-2xl font-bold">{product.nameBn}</h1>

              <p className="text-base-content/60 mt-1">
                প্রতি {product.unit} · {product.categoryNameBn}
              </p>

              <p className="mt-3 text-sm text-base-content/70">
                গতকালের তুলনায় আজ দাম&nbsp;
                <span className="font-bold">
                  {isUp ? "বেড়েছে" : isDown ? "কমেছে" : "অপরিবর্তিত"}
                </span>
                {(isUp || isDown) &&
                  ` · ${Math.abs(product.today - product.yesterday)} টাকা`}
              </p>
            </div>
          </div>

          <div className="bg-base-200 rounded-3xl px-6 py-3 text-center shrink-0">
            <p className="text-xs text-base-content/60">আজকের দাম</p>

            <div className="text-2xl font-bold">{product.today}</div>

            <p className="text-base-content/60 text-xs">
              টাকা / {product.unit}{" "}
            </p>

            <p
              className={`font-semibold mt-2 ${isUp ? "text-error" : isDown ? "text-success" : "text-neutral"}`}
            >
              {isUp ? "▲" : isDown ? "▼" : "-"} {product.change.pct}%
            </p>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 border border-zinc-200 rounded-2xl my-6">
        <div className="card-body space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">দামের সারসংক্ষেপ</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card bg-base-100 border border-base-300">
                <div className="card-body p-5">
                  <p className="text-sm text-base-content/60">সর্বনিম্ন দাম</p>

                  <p className="text-success text-4xl font-bold">
                    {marketPrices.min} <span className="text-lg">টাকা</span>
                  </p>

                  <p className="text-sm text-base-content/70">
                    সবচেয়ে কম দামের বাজার
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 border border-base-300">
                <div className="card-body p-5">
                  <p className="text-sm text-base-content/60">সর্বোচ্চ দাম</p>

                  <p className="text-error text-4xl font-bold">
                    {marketPrices.min} <span className="text-lg">টাকা</span>
                  </p>

                  <p className="text-sm text-base-content/70">
                    সবচেয়ে বেশি দামের বাজার
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 border border-base-300">
                <div className="card-body p-5">
                  <p className="text-sm text-green-700">গড় দাম</p>

                  <p className="text-success text-4xl font-bold">
                    {marketPrices.avg.toFixed(0)}{" "}
                    <span className="text-lg">টাকা</span>
                  </p>

                  <p className="text-sm text-base-content/70">
                    প্রতি কেজির গড় হিসেবে
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">বাজারভিত্তিক আজকের দাম</h2>

            <div className="overflow-x-auto">
              <table className="table border border-zinc-200 rounded-2xl">
                <thead>
                  <tr className="font-bold">
                    <th>বাজার</th>
                    <th>বিভাগ</th>
                    <th className="text-right">সর্বনিম্ন</th>
                    <th className="text-right">সর্বাধিক</th>
                    <th className="text-right">গড়</th>
                  </tr>
                </thead>

                <tbody>
                  {marketData.map((price, i) => (
                    <tr
                      key={price.market}
                      className={
                        i % 2 === 0 ? "border-y border-black bg-zinc-50" : ""
                      }
                    >
                      <td className="border-0 border-t border-black">
                        {price.market}
                      </td>
                      <td className="border-0 border-t border-black">
                        {price.division}
                      </td>

                      <td className="text-right border-0 border-t border-black">
                        {price.min} টাকা
                      </td>

                      <td className="text-right border-0 border-t border-black">
                        {price.max} টাকা
                      </td>

                      <td className="text-right border-0 border-t border-black font-semibold">
                        {((price.min + price.max) / 2).toFixed(2)} টাকা
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ProductContent;
