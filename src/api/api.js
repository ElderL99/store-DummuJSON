const API_URL = "https://dummyjson.com";

export const getAllProductos = async () => {
  const response = await fetch(`${API_URL}/products`);
  const data = await response.json();

  return data.products;
};

export const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`);
  const data = await response.json();

  return data;
};

export const Login = async ({ username, password }) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  return data.accessToken;
};
