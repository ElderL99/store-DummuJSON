import { useEffect, useState } from "react";
import { getAllProductos, getProductById } from "../api/api.js";

export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProductos()
      .then((data) => setProducts(data))
      .catch((error) => console.error("[useProducts]" + error));
  }, []);

  return { products };
}

export function useProduct(id) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error("[get product error ]" + error));
  }, [id]);

  return { product };
}
