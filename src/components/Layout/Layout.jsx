// Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate, useLocation } from "react-router-dom";


const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Login Button Handler
  const handleLogin = () => {
    navigate("/auth");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--primary-dark)] text-[var(--text-primary)]">
          <Navbar
            signHref="/auth"
            loginHref="/auth"
            onLogin={handleLogin}
            currentPath={location.pathname}
          />

      {React.Children.map(children, (child) => {
        // لو العنصر مرر prop اسمه fullWidth = true 
        if (child.props?.fullWidth) {
          return <div className="flex-grow w-full">{child}</div>;
        }

        // باقي العناصر هتتحط داخل الـ container العادي
        return (
          <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {child}
          </main>
        );
      })}

      <Footer />
    </div>
  );
};

export default Layout;