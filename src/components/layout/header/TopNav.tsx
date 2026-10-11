import Link from "next/link";
import { fetchBazaarDorData } from "@/lib/api";
import { ICategory } from "@/types/bazaardor-data";
import Container from "../../shared/Container";
import DataLoadError from "../../shared/DataLoadError";

async function TopNav() {
  const categories: ICategory[] = await fetchBazaarDorData("/categories");
  if (!categories) return <DataLoadError dataType="ক্যাটাগরি" />;

  return (
    <div className="bg-white">
      <Container>
        <nav>
          <ul className="flex gap-8 overflow-x-auto px-4 py-4 whitespace-nowrap">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/category/${category.slug}`}
                  className="flex items-center gap-2"
                >
                  <span>{category.icon}</span>
                  <span>{category.nameBn}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </div>
  );
}

export default TopNav;
