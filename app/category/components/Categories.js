import CategoryButton from "./CategoryButton";

export default function Categories({ productCategory, params }) {
  return (
    <div className='w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4'>
      {productCategory.map((product) => (
        <CategoryButton key={product.category} product={product} />
      ))}
    </div>
  );
}
