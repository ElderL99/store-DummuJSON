import { Link } from "react-router-dom";
import { useProducts } from "../hooks/hooks";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const { products } = useProducts();
  const featured = products.slice(0, 6);

  return (
    <main className="flex flex-col gap-12 p-6">
      {/* Hero / Banner */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl shadow-lg p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a nuestra tienda</h1>
        <p className="text-lg">Descubre productos increíbles al mejor precio</p>
        <Link
          to="/products"
          className="inline-block mt-6 bg-white text-cyan-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition-colors"
        >
          Ver todos los productos
        </Link>
      </section>

      {/* Productos destacados */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Productos destacados
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {featured.map((prod, index) => (
            <ProductCard
              key={`featured-${index}`}
              id={prod.id}
              title={prod.title}
              price={prod.price}
              thumbnail={prod.thumbnail}
            />
          ))}
        </div>
      </section>

      {/* Categorías (placeholder) */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
        <div className="bg-[#2a2a2a] p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-bold mb-2">Tecnología</h3>
          <p>Encuentra lo último en gadgets y electrónica</p>
        </div>
        <div className="bg-[#2a2a2a] p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-bold mb-2">Moda</h3>
          <p>Ropa y accesorios para todos los estilos</p>
        </div>
        <div className="bg-[#2a2a2a] p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-bold mb-2">Hogar</h3>
          <p>Artículos para tu casa y decoración</p>
        </div>
      </section>
    </main>
  );
}
