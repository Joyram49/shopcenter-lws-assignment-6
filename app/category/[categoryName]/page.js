import ProductItem from "@/app/components/ProductItem";
import data from "@/data/products.json";

export default function CategoryNamePage({ params: { categoryName } }) {
  const products = data.products;
  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className='sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10  '>
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
