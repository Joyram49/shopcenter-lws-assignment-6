"use client";

import { useRouter } from "next/navigation";

export default function CategoryClicked({ product }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/category/${product.category}`, { scroll: false });
  };

  return (
    <span className='text-[#919090] my-3 cursor-pointer' onClick={handleClick}>
      {product?.category}
    </span>
  );
}
