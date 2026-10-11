import { fetchBazaarDorData } from "@/lib/api";
import { ICategory } from "@/types/bazaardor-data";
import DataLoadError from "../shared/DataLoadError";
import ProductSection from "../products/ProductSection";

interface ICategoryContentProps {
  params: Promise<{ slug: string }>;
}

async function CategoryContent({ params }: ICategoryContentProps) {
  const { slug } = await params;

  const category: ICategory = await fetchBazaarDorData(`/categories/${slug}`);
  if (!category) return <DataLoadError dataType="ক্যাটাগরি" />;
  console.log("category", category);

  const products = await fetchBazaarDorData(`/products?category=${slug}`);
  console.log("products", products);
  const productsCount = products ? products.length : 0;

  // return <div>{slug}</div>;
  return (
    <>
      <div className="card border border-zinc-200 bg-base-100 rounded-2xl my-6">
        <div className="card-body">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{category.icon}</span>
            <div>
              <h1 className="text-2xl font-bold">{category.nameBn}</h1>
              <p className="text-base-content/60">
                {productsCount}টি পণ্যের আজকের দাম ও পরিবর্তন
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProductSection
        subtitle={`মোট ${productsCount}টি পণ্য দেখানো হচ্ছে`}
        products={products}
      />
    </>
  );
}

export default CategoryContent;
