import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

export default function ProductCard({ id, title, price, thumbnail }) {
  const ref = useRef(null);
  const elementId = `product-${id}`;

  useEffect(() => {
    const hashId = window.location.hash.replace("#", "");
    if (hashId === elementId) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <article
      ref={ref}
      id={elementId}
      className={clsx(
        "flex flex-col border border-white/10 rounded-xl overflow-hidden bg-[#1f1f1f] shadow-md hover:shadow-lg transition-shadow duration-300 ",
        { "shadow-md shadow-cyan-600": window.location.hash === elementId }
      )}
    >
      <img src={thumbnail} alt={title} className="" />

      <div className="flex flex-col justify-center items-center gap-2 p-3 flex-grow">
        <h2 className="text-base font-semibold text-center text-white line-clamp-2">
          {title}
        </h2>
        <p className="text-center text-cyan-400 font-bold">${price}</p>
      </div>

      <Link
        to={`/products/${id}`}
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium w-full py-2 text-center transition-colors duration-300"
      >
        Ver detalle
      </Link>
    </article>
  );
}
