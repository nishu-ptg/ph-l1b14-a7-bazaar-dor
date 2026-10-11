import { fetchBazaarDorData } from "@/lib/api";
import { IProduct } from "@/types/bazaardor-data";
import DataLoadError from "../shared/DataLoadError";
import ProductSection from "../products/ProductSection";

async function Products() {
  const allProducts: IProduct[] = await fetchBazaarDorData("/products");
  if (!allProducts) return <DataLoadError dataType="পণ্য" />;

  const increasedProducts = allProducts
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const decreasedProducts = allProducts
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <div>
      <ProductSection
        title={
          <>
            <span className="text-error">▲</span> আজ দাম বেড়েছে
          </>
        }
        products={increasedProducts}
      />

      <ProductSection
        title={
          <>
            <span className="text-error">▼</span> আজ দাম কমেছে
          </>
        }
        products={decreasedProducts}
      />

      <ProductSection
        title={
          <>
            <span className="text-error">▲</span> আজ দাম বেড়েছে
          </>
        }
        products={increasedProducts}
      />

      <div id="all-products">
        <ProductSection
          title="সব পণ্য"
          subtitle={`মোট ${allProducts.length}টি পণ্য দেখানো হচ্ছে`}
          products={allProducts}
        />
      </div>
    </div>
  );
}

export default Products;
