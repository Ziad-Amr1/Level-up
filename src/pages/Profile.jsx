// src/pages/Profile.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/Layout/Layout";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/auth"); // لو مفيش يوديه على صفحة التسجيل/تسجيل الدخول
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/auth");
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <h2 className="text-2xl font-bold">Please login to view your profile</h2>
      </div>
    );
  }

  return (
    <Layout>
    <section className="min-h-screen bg-[var(--primary-dark)] flex justify-center p-6 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl"
      >
        {/* Card */}
        <div className="bg-[var(--card-bg)]/80 backdrop-blur-md shadow-lg border border-[var(--accent-gold)] rounded-2xl overflow-hidden">
          <div className="p-8">
            {/* Avatar + Name */}
            <div className="flex items-center gap-6">
              <img
                src={user.avatar || "/images/default-avatar.png"}
                alt={user.name}
                className="w-24 h-24 rounded-full border-4 border-[var(--accent-gold)] object-cover"
              />
              <div>
                <h1 className="text-3xl font-bold text-[var(--accent-gold)]">
                  {user.name}
                </h1>
                <p className="text-[var(--text-secondary)]">{user.email}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-[var(--primary-dark)]/60 text-center">
                <p className="text-2xl font-bold text-[var(--accent-gold)]">
                  {user.ownedGames || 0}
                </p>
                <p className="text-sm text-[var(--text-secondary)]">Owned Games</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--primary-dark)]/60 text-center">
                <p className="text-2xl font-bold text-[var(--accent-gold)]">
                  {user.favoriteGames || 0}
                </p>
                <p className="text-sm text-[var(--text-secondary)]">Favorites</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--primary-dark)]/60 text-center">
                <p className="text-2xl font-bold text-[var(--accent-gold)]">
                  {user.hoursPlayed || 0}
                </p>
                <p className="text-sm text-[var(--text-secondary)]">Hours Played</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--primary-dark)]/60 text-center">
                <p className="text-2xl font-bold text-[var(--accent-gold)]">
                  {user.achievements || 0}
                </p>
                <p className="text-sm text-[var(--text-secondary)]">Achievements</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-10 gap-4">
              <button className="w-full md:w-auto px-6 py-2 border border-[var(--accent-gold)] text-[var(--accent-gold)] rounded-lg hover:bg-[var(--accent-gold)] hover:text-black transition">
                Edit Profile
              </button>
              <button
                onClick={handleLogout}
                className="w-full md:w-auto px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
    </Layout>
  );
}
