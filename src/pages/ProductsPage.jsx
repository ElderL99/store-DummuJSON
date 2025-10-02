import ProductCard from "../components/ProductCard.jsx";
import { useProducts } from "../hooks/hooks.js";

export default function ProductsPage() {
  const { products } = useProducts();

  return (
    <main className="p-4 flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-center text-white">Products</h1>

      <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
        {products.map((prod, index) => (
          <ProductCard
            key={`product-${index}`}
            id={prod.id}
            title={prod.title}
            price={prod.price}
            thumbnail={prod.thumbnail}
          />
        ))}
      </section>
    </main>
  );
}
