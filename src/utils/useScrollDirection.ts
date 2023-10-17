import { useEffect, useState } from "react";

export const SCROLL_UP = "up";
export const SCROLL_DOWN = "down";

type ScrollDirection = typeof SCROLL_UP | typeof SCROLL_DOWN;

const useScrollDirection = ({
  initialDirection = SCROLL_UP,
  thresholdPixels = 10,
}: {
  initialDirection?: ScrollDirection;
  thresholdPixels?: number;
} = {}) => {
  const [scrollDir, setScrollDir] = useState<ScrollDirection>(initialDirection);

  useEffect(() => {
    const threshold = thresholdPixels || 0;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        // We haven't exceeded the threshold
        ticking = false;
        return;
      }

      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [initialDirection, thresholdPixels]);

  return scrollDir;
};

export default useScrollDirection;
