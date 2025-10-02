# 🛍️ React Store App

A modern e-commerce frontend built with **React**, **React Router**, **Tailwind CSS**, and **Framer Motion**. Includes authentication, product listing, product detail view, and smooth animations.

---

## 🚀 Installation

```bash
npm install
```

Required dependencies:

- `react-router-dom`
- `framer-motion`
- `clsx`
- `react-hook-form`

---

## ▶️ Run the Project

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🧭 Routing Structure

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:id", element: <ProductDetailPage /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);
```

---

## ✨ Features

- ✅ Login with validation (`react-hook-form`)
- ✅ Product listing with animated cards (`Framer Motion`)
- ✅ Product detail view with transitions
- ✅ Homepage with banner, featured products, and categories
- ✅ Responsive design using Tailwind CSS

---

## 🔌 Custom Hooks & API Integration

### `useProducts`

```js
export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProductos()
      .then((data) => setProducts(data))
      .catch((error) => console.error("[useProducts]" + error));
  }, []);

  return { products };
}
```

### `useProduct`

```js
export function useProduct(id) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error("[get product error]" + error));
  }, [id]);

  return { product };
}
```

### `useLogin`

```js
export function useLogin({ Login, setError }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const submitLogin = async (data) => {
    try {
      setIsSubmitted(true);

      const token = await Login({
        username: data.username,
        password: data.password,
      });

      if (token) {
        localStorage.setItem("token", token);
        navigate("/");
        setIsSubmitted(false);
        return;
      }

      setError("root.data", {
        type: "manual",
        message: "Invalid credentials",
      });
      setIsSubmitted(false);
    } catch (error) {
      console.error(`Login error: ${error}`);
      setIsSubmitted(false);
    }
  };

  return { isSubmitted, submitLogin };
}
```

---

## 🌐 API: [DummyJSON](https://dummyjson.com)

### `getAllProductos`

```js
export const getAllProductos = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
};
```

### `getProductById`

```js
export const getProductById = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
};
```

### `Login`

```js
export const Login = async ({ username, password }) => {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  return data.accessToken;
};
```

---

## 📁 Project Structure

```
src/
├── components/
│   └── ProductCard.jsx
├── hooks/
│   └── useAuth.js
│   └── hooks.js
├── pages/
│   └── HomePage.jsx
│   └── ProductsPage.jsx
│   └── ProductDetailPage.jsx
│   └── LoginPage.jsx
├── layouts/
│   └── MainLayout.jsx
│   └── AuthLayout.jsx
├── api/
│   └── api.js
└── App.jsx
```

---

## 🧠 Author

**Adan** – Modular backend/frontend architect focused on clarity, scalability, and developer experience.

GitHub: [ElderL99](https://github.com/ElderL99)

---

## 📜 License

MIT
