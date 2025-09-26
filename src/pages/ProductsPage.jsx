import { useEffect, useState } from "react";
import { getAllProductos } from "../api/api.js";

import ProductCard from "../components/ProductCard.jsx";

export default function ProductsPage() {
  const [products, setProductos] = useState([]);

  useEffect(() => {
    getAllProductos()
      .then((data) => setProductos(data))
      .catch((error) => {
        console.error(`[get products error] : ${error}`);
      });
  }, []);

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
