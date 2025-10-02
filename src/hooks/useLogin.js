import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        return; // Muy importante para cortar el flujo
      }

      setError("root.data", {
        type: "manual",
        message: "Datos Invalidos",
      });
      setIsSubmitted(false);
    } catch (error) {
      console.error(`Login error : ${error}`);
      setIsSubmitted(false);
    }
  };

  return { isSubmitted, submitLogin };
}
