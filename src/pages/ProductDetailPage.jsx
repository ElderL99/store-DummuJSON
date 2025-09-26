import { useEffect, useState } from "react";
import { getProductById } from "../api/api";
import { Link, useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error(`[get product error]: ${error}`);
      });
  }, []);

  return (
    <main className="p-6 max-w-5xl mx-auto ">
      <Link
        className="absolute top-4 right-4 bg-[#2a2a2a] hover:bg-[#333] text-white rounded-full p-2 shadow-md transition-colors duration-300"
        to={`/products#product-${id}`}
      >
        ❌
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#1f1f1f] rounded-xl shadow-md p-6">
        {/* Imagen */}
        <div className="flex justify-center items-center">
          <img src={product.thumbnail} alt={product.title} className="" />
        </div>

        {/* Info del producto */}
        <div className="flex flex-col gap-4 justify-center">
          <h1 className="text-3xl font-bold text-white">{product.title}</h1>
          <p className="text-cyan-400 text-2xl font-semibold">
            ${product.price}
          </p>
          <p className="text-gray-300 leading-relaxed">{product.description}</p>

          <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg shadow transition-colors duration-300 w-fit">
            Agregar al carrito
          </button>
        </div>
      </div>
    </main>
  );
}
