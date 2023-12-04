import { useEffect, useRef } from "react";

export const useScrollIntoView = (selector, frequency) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleElementChange = () => {
      const target = container.querySelector(selector);
      if (!target) return;
      const scrollLeft = target.offsetLeft - container.offsetLeft;
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    };
    handleElementChange();
  }, [selector, frequency]);

  return containerRef;
};

export default useScrollIntoView;
