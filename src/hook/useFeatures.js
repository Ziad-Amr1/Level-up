// src/hooks/useFeatures.js
import { useEffect } from "react";

// LoadingScreen {removed to src/hook/loading.js}

export function useLoadingScreen(duration = 2000) {
  useEffect(() => {
    // إنشاء overlay
    const loadingScreen = document.createElement("div");
    loadingScreen.className = `
      fixed inset-0 flex flex-col items-center justify-center
      bg-[var(--primary-dark)] bg-opacity-95 z-50
      transition-opacity duration-500
    `;

    // Spinner + نص
    loadingScreen.innerHTML = `
      <div class="flex flex-col items-center space-y-4">
        <div class="animate-spin rounded-full h-14 w-14 border-4 border-[var(--accent-gold)] border-t-transparent shadow-lg"></div>
        <span class="text-[var(--accent-gold)] font-semibold text-lg">Loading...</span>
      </div>
    `;

    document.body.appendChild(loadingScreen);

    // إزالة بعد مدة
    const timeout1 = setTimeout(() => {
      loadingScreen.style.opacity = "0";
      const timeout2 = setTimeout(() => {
        loadingScreen.remove();
        clearTimeout(timeout2);
      }, 500);
    }, duration);

    return () => {
      clearTimeout(timeout1);
      loadingScreen.remove();
    };
  }, [duration]);
}

// Counter animation
export function useAnimateCounter(id, target, duration = 2000) {
  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        start = target;
      }
      el.textContent = Math.floor(start).toLocaleString();
    }, 16);
    return () => clearInterval(timer);
  }, [id, target, duration]);
}

// Scroll animation
export function useScrollAnimation(selector) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-5", "transition-all", "duration-700");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selector]);
}

// Wishlist
export function initWishlist() {
  document.querySelectorAll(".btn-wishlist").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      btn.classList.toggle("active");
      btn.innerHTML = btn.classList.contains("active")
        ? `<i class="fas fa-heart text-red-500"></i>`
        : `<i class="fas fa-heart"></i>`;
    });
  });
}

// Newsletter + toast
export function initNewsletter() {
  const form = document.querySelector(".newsletter-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector("input").value;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast("Subscribed successfully!");
      form.reset();
    } else {
      showToast("Please enter a valid email!", "error");
    }
  });

  function showToast(msg, type = "success") {
    const toast = document.createElement("div");
    toast.className = `fixed bottom-4 right-4 px-4 py-2 rounded-lg ${
      type === "success" ? "bg-green-600" : "bg-red-600"
    } text-white`;
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
}

// Dynamic year
export function setCurrentYear() {
  const el = document.querySelector(".copyright");
  if (el) {
    el.innerHTML = `&copy; ${new Date().getFullYear()} Level Up. All rights reserved.`;
  }
}
