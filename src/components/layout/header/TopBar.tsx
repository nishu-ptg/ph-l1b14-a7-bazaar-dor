import Image from "next/image";
import Link from "next/link";
import Container from "../../shared/Container";
import BengaliDate from "@/components/shared/BengaliDate";
import { Suspense } from "react";
import Loading from "@/components/shared/Loading";

function TopBar() {
  return (
    <div className="border-b border-gray-100">
      <Container>
        <div className="navbar min-h-0 px-0 py-3">
          <div className="navbar-start">
            <Link href="/" className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-14 rounded-2xl bg-green-700 p-3">
                  <Image
                    src="/logo.png"
                    alt="বাজার দর"
                    width={44}
                    height={44}
                  />
                </div>
              </div>

              <div>
                <h1 className="text-xl font-bold text-gray-800">বাজার দর</h1>
                <p className="text-xs text-gray-500">
                  <Suspense fallback={<Loading />}>
                    <BengaliDate />
                  </Suspense>
                </p>
              </div>
            </Link>
          </div>

          <div className="navbar-end gap-4">
            <Link href="/" className="btn btn-ghost btn-sm">
              সাইন ইন
            </Link>

            <Link href="/" className="btn bg-green-700 text-white btn-sm">
              সাইন আপ
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopBar;
