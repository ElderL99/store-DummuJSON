import { Link, useParams } from "react-router-dom";
import { useProduct } from "../hooks/hooks";
import { motion } from "framer-motion";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { product } = useProduct(id);

  return (
    <main className="p-6 max-w-5xl mx-auto relative">
      {/* Botón de cierre */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute top-4 right-4"
      >
        <Link
          to={`/products#product-${id}`}
          className="bg-[#2a2a2a] hover:bg-[#333] text-white rounded-full p-2 shadow-md transition-colors duration-300"
        >
          ❌
        </Link>
      </motion.div>

      {/* Contenedor principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#1f1f1f] rounded-xl shadow-md p-6"
      >
        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center items-center"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-lg shadow"
          />
        </motion.div>

        {/* Info del producto */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-4 justify-center"
        >
          <h1 className="text-3xl font-bold text-white">{product.title}</h1>
          <p className="text-cyan-400 text-2xl font-semibold">
            ${product.price}
          </p>
          <p className="text-gray-300 leading-relaxed">{product.description}</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg shadow w-fit"
          >
            Agregar al carrito
          </motion.button>
        </motion.div>
      </motion.div>
    </main>
  );
}
