import { getDiscountedPrice } from "@/app/lib/getDiscountedPrice";
import starSVG from "@/assets/svg/star.svg";
import data from "@/data/products.json";
import Image from "next/image";
import CategoryClicked from "../components/CategoryClicked";

export const metadata = {
  title: "ShopCenter || product",
  description: "A simple project for practicing next js as a beginner",
};

export default function ProductItemPage({ params }) {
  const productId = +params.id;
  const products = data.products;
  const selectedProduct = products.find((product) => product.id === productId);

  return (
    <main className='h-screen'>
      <section className='bg-[#fafaf2] h-full py-20'>
        <div className='w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between'>
          <div className='w-full lg:w-7/12 border border-slate-500/20 p-4'>
            <Image
              src={selectedProduct?.thumbnail}
              className='w-[400px] h-[500px] mx-auto object-cover'
              alt='product image view'
              width={400}
              height={500}
            />

            <div className='flex gap-4 mt-4'>
              {selectedProduct?.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  className='w-[100px] h-[100px] mx-auto border object-cover'
                  alt='product sample image'
                  width={100}
                  height={100}
                />
              ))}
            </div>
          </div>
          <div className='w-full lg:w-5/12'>
            <h1 className='italic text-xl lg:text-3xl font-serif font-semibold'>
              {selectedProduct?.title}
            </h1>
            <CategoryClicked product={selectedProduct} />
            <div className='mt-3 flex items-center justify-start gap-1'>
              {Array.from(
                { length: Math.floor(selectedProduct?.rating) },
                (_, index) => (
                  <Image key={index} src={starSVG} width='20px' alt='rating' />
                )
              )}
            </div>
            <hr className='my-5 bg-black' />

            <div>
              <p className='my-3'>
                <span className='text-rose-600 opacity-60 line-through mr-2'>
                  ${selectedProduct?.price}
                </span>
                <span className='font-bold text-2xl'>
                  $
                  {getDiscountedPrice(
                    selectedProduct?.price,
                    selectedProduct?.discountPercentage
                  )}
                </span>
              </p>
            </div>
            <div>
              <p className='leading-7'>{selectedProduct?.description}</p>

              <button className='w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full'>
                Add To Cart - $
                {getDiscountedPrice(
                  selectedProduct?.price,
                  selectedProduct?.discountPercentage
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
