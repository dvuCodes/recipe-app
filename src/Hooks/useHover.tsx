import { useState, useRef, useMemo } from "react";

const useHover = () => {
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef(null);

  const eventHandlers = useMemo(
    () => ({
      onMouseOver() {
        setIsHovering(true);
      },
      onMouseOut() {
        setIsHovering(false);
      },
    }),
    []
  );

  return [isHovering, eventHandlers];
};

export default useHover;
