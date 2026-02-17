import { useEffect, useState } from 'react';

export function SplashOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip animation for users who prefer reduced motion
      const timer = setTimeout(() => {
        setIsVisible(false);
        setShouldRender(false);
      }, 100);
      return () => clearTimeout(timer);
    }

    // Start fade out after pop animation completes
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1500); // Pop animation duration + hold time

    // Remove from DOM after fade completes
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 2500); // Total animation time

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      <div className="animate-splash-pop">
        <img
          src="/assets/IMG_20260211_212234_800.jpg"
          alt="BidArena"
          className="w-32 h-32 md:w-48 md:h-48 object-contain"
        />
      </div>
    </div>
  );
}
