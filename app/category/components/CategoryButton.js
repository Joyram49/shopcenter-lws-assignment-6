"use client";

import { usePathname, useRouter } from "next/navigation";

export default function CategoryButton({ product }) {
  const pathname = usePathname();
  const active = pathname.split("/").includes(product.category);
  const router = useRouter();
  const handleClick = () => {
    router.push(`/category/${product.category}`, { scroll: false });
  };
  return (
    <button
      className={`hover:border-b border-black block h-6 box-border mt-4 ${
        active ? "text-cyan-600" : ""
      }`}
      onClick={handleClick}
    >
      {product.category}
    </button>
  );
}
