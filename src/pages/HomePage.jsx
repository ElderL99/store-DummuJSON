import { Link } from "react-router-dom";
import { useProducts } from "../hooks/hooks";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

export default function HomePage() {
  const { products } = useProducts();
  const featured = products.slice(0, 6);

  return (
    <main className="flex flex-col gap-12 p-6">
      {/* Hero / Banner */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl shadow-lg p-10 text-center"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold mb-4"
        >
          Bienvenido a nuestra tienda
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg"
        >
          Descubre productos increíbles al mejor precio
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block mt-6"
        >
          <Link
            to="/products"
            className="bg-white text-cyan-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition-colors"
          >
            Ver todos los productos
          </Link>
        </motion.div>
      </motion.section>

      {/* Productos destacados */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Productos destacados
        </h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {featured.map((prod, index) => (
            <motion.div
              key={`featured-${index}`}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard
                id={prod.id}
                title={prod.title}
                price={prod.price}
                thumbnail={prod.thumbnail}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Categorías */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white"
      >
        {[
          {
            title: "Tecnología",
            desc: "Encuentra lo último en gadgets y electrónica",
          },
          { title: "Moda", desc: "Ropa y accesorios para todos los estilos" },
          { title: "Hogar", desc: "Artículos para tu casa y decoración" },
        ].map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-[#2a2a2a] p-6 rounded-xl shadow text-center"
          >
            <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
            <p className="text-gray-300">{cat.desc}</p>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}
