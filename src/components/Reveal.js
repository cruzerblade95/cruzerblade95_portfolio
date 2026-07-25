import React, { useEffect, useRef } from "react";

function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as: Component = "div",
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -60px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={elementRef}
      className={`reveal reveal-${direction} ${className}`.trim()}
      style={{
        "--reveal-delay": `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
}

export default Reveal;