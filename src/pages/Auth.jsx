import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Auth({ initialMode = "login", onLogin }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(initialMode === "login");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLogin(initialMode === "login");
    setError("");
  }, [initialMode]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (isLogin) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
        navigate("/Profile");
        onLogin(storedUser);
      } else {
        setError("❌ Invalid credentials");
      }
    } else {
      localStorage.setItem("user", JSON.stringify(formData));
      navigate("/Profile");
      onLogin(formData);
    }
  };

  const InputField = ({ name, type, placeholder, index }) => (
    <motion.input
      type={type}
      name={name}
      placeholder={placeholder}
      value={formData[name]}
      onChange={handleChange}
      className="p-3 rounded-lg border border-gray-600 bg-[var(--primary-dark)] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold)] transition hover:scale-[1.02]"
      required
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
    />
  );

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-[var(--card-bg)]/90 p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition"
        >
          <X size={20} />
        </button>

        <h1 className="text-3xl font-bold text-[var(--accent-gold)] mb-6 text-center">
          {isLogin ? "Login" : "Register"}
        </h1>

        {error && (
          <motion.div
            className="mb-4 text-red-500 text-center font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && <InputField name="name" type="text" placeholder="Username" index={0} />}
          <InputField name="email" type="email" placeholder="Email" index={isLogin ? 0 : 1} />
          <InputField name="password" type="password" placeholder="Password" index={isLogin ? 1 : 2} />

          <motion.button
            type="submit"
            className="bg-[var(--accent-gold)] text-black font-bold py-2 rounded-lg hover:opacity-90 transition mt-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLogin ? "Login" : "Register"}
          </motion.button>
        </form>

        <p
          className="text-sm text-[var(--text-secondary)] mt-4 text-center cursor-pointer hover:underline"
          onClick={() => {
            setIsLogin(!isLogin);
            setError("");
          }}
        >
          {isLogin ? "Don’t have an account? Register" : "Already have an account? Login"}
        </p>
      </motion.div>
    </motion.div>
  );
}
