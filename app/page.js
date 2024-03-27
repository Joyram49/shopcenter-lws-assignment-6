import data from "../data/products.json";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewsLetter from "./components/NewsLetter";
import ProductsContainer from "./components/ProductsContainer";

export default function Home() {
  const products = data.products.slice(0, 12);

  return (
    <div>
      <Header />
      <main>
        <ProductsContainer products={products} />
        <NewsLetter />
        <Footer />
      </main>
    </div>
  );
}
