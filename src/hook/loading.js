// hook/loading.js
import { useEffect } from "react";

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
