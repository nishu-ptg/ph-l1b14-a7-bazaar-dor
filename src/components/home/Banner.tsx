"use client";

import Image from "next/image";
import BengaliDate from "../shared/BengaliDate";
import { Suspense } from "react";
import Loading from "../shared/Loading";

function Banner() {
  return (
    <div className="hero bg-white rounded-4xl border border-zinc-200 my-6 px-4 py-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <Image src="/banner.png" alt="Banner" height={263} width={315} />
        </div>
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <div className="badge badge-soft badge-error mb-4">
            <Suspense fallback={<Loading />}>
              <BengaliDate />
            </Suspense>
          </div>
          <h1 className="text-3xl font-bold">আজকের বাজারের দাম এক নজরে</h1>
          <p className="py-6">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম। বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <button
            className="btn bg-green-700 text-white rounded-xl"
            onClick={() =>
              document.getElementById("all-products")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            সব পণ্য দেখুন
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
