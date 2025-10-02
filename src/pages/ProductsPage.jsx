import ProductCard from "../components/ProductCard.jsx";
import { useProducts } from "../hooks/hooks.js";
import { motion } from "framer-motion";

export default function ProductsPage() {
  const { products } = useProducts();

  return (
    <main className="p-4 flex flex-col gap-8">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-white"
      >
        Products
      </motion.h1>

      <motion.section
        className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6"
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
        {products.map((prod, index) => (
          <motion.div
            key={`product-${index}`}
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
      </motion.section>
    </main>
  );
}
