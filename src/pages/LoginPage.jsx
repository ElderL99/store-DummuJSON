import { useForm } from "react-hook-form";
import { Login } from "../api/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({});
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function onSubmit(data) {
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
        return; // este return es my importante
      }

      setError("root.data", { type: "manual", message: "Datos Invalidos" });
      setIsSubmitted(false);
    } catch (error) {
      console.error(`Login error : ${error}`);
      setIsSubmitted(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1a1a1a] px-4">
      <section className="w-full max-w-md bg-[#2a2a2a] border border-white/10 rounded-2xl shadow-lg p-8 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-white text-center">
          Iniciar Sesión
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* Username */}
          <div className="flex flex-col text-left">
            <label className="text-sm text-gray-300 mb-1">Usuario</label>
            <input
              type="text"
              placeholder="Ingresa tu Usuario"
              {...register("username", {
                required: {
                  value: true,
                  message: "El nombre de Usuario es requirido",
                },
              })}
              className={clsx(
                "bg-[#1a1a1a] border p-3 rounded-lg text-white focus:outline-none focus:ring-2",
                {
                  "bg-red-500/10 border-red-500": errors.username,
                }
              )}
            />
            {errors.username && (
              <span className="text-red-500 text-sm mt-1">
                <span>{errors.username.message}</span>
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col text-left relative">
            <label className="text-sm text-gray-300 mb-1">Contraseña</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Ingresa tu contraseña"
              {...register("password", {
                required: {
                  value: true,
                  message: "La contrasena es requerida",
                },
              })}
              className={clsx(
                "bg-[#1a1a1a] border p-3 rounded-lg text-white focus:outline-none focus:ring-2",
                {
                  "bg-red-500/10 border-red-500": errors.password,
                }
              )}
            />
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-progress"
            disabled={
              isSubmitted
            } /* esto desctiva el botton y con useForm con la funcion isSubmitted podemos desabiliar el botton para no lanar varias peticiones */
          >
            {isSubmitted ? "Loading..." : "Login"}
          </button>

          {errors.root?.data && (
            <span className="text-sm text-red-500 text-center font-bold">
              {errors.root?.data.message}
            </span>
          )}
        </form>
      </section>
    </main>
  );
}
