import { Suspense } from "react";
import CategoryContent from "@/components/category/CategoryContent";
import Loading from "@/components/shared/Loading";

interface ICategoryProps {
  params: Promise<{ slug: string }>;
}

export default function Category({ params }: ICategoryProps) {
  return (
    <Suspense fallback={<Loading text="ক্যাটাগরি ও পণ্য লোড হচ্ছে..." />}>
      <CategoryContent params={params} />
    </Suspense>
  );
}
