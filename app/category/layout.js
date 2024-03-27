import data from "@/data/products.json";
import Categories from "./components/Categories";

import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";

export const metadata = {
  title: "ShopCenter || category",
  description: "A simple project for practicing next js as a beginner",
};

export default function CategoryLayout({ children }) {
  const productsByCategory = data.products.reduce((acc, product) => {
    if (acc[product.category]) {
      acc[product.category].push(product);
    } else {
      acc[product.category] = [product];
    }
    return acc;
  }, {});

  const productsGroupedByCategory = Object.keys(productsByCategory).map(
    (category) => ({
      category,
      products: productsByCategory[category],
    })
  );

  return (
    <>
      <header className='h-[500px] flex flex-col-reverse  w-full '></header>
      <main>
        <section className='w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start '>
          <Categories productCategory={productsGroupedByCategory} />

          {children}
        </section>
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
}
