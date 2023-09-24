import { useState, useRef, useEffect } from "react";

const useHover = () => {
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef(null);

  const mouseEnter = () => setIsHovering(true);
  const mouseLeave = () => setIsHovering(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseenter", mouseEnter);
      node.addEventListener("mouseleave", mouseLeave);

      return () => {
        node.removeEventListener("mouseenter", mouseEnter);
        node.removeEventListener("mouseleave", mouseLeave);
      };
    }
  }, []);

  return [isHovering, ref];
};

export default useHover;
