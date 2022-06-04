import { useEffect } from "react";

export const useScroll = (action: () => void) => {
  useEffect(() => {
    const handleScroll = () => {
      action();
    };

    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  });
};
