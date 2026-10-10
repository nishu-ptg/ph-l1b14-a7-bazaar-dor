import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
import Loading from "@/components/shared/Loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Suspense fallback={<Loading />}>
        <Products />
      </Suspense>
    </div>
  );
}
