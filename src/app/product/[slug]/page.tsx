import { Suspense } from "react";
import Loading from "@/components/shared/Loading";
import ProductContent from "@/components/product/ProductContent";

interface IProductProps {
  params: Promise<{ slug: string }>;
}

function Product({ params }: IProductProps) {
  return (
    <Suspense fallback={<Loading text="ক্পণ্য লোড হচ্ছে..." />}>
      <ProductContent params={params} />
    </Suspense>
  );
}

export default Product;
