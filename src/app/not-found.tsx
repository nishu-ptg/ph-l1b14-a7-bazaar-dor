import Link from "next/link";

function NotFound() {
  return (
    <main className="my-10 flex flex-1 items-center justify-center rounded-2xl border border-zinc-200 bg-base-100 px-4 py-12 text-center">
      <div className="max-w-2xl">
        <p className="text-8xl font-bold tracking-tight text-green-700">404</p>

        <h1 className="mt-6 text-3xl font-bold text-base-content md:text-4xl">
          দুঃখিত! পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
        </h1>

        <Link
          href="/"
          className="btn mt-8 border-green-700 bg-green-700 px-6 text-white hover:border-green-800 hover:bg-green-800"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
