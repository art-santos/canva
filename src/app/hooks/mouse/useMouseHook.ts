import { useState, useEffect } from "react";

/*
    Here's a mousemove hook i've got on github. It basically sets a listener to the window, and, when the mouse moves
    it's going to be update with this axis x and axis y. It showed up to be a little hard to use, as the 
    correct was to update the position based on the delta calculated by the difference between the mouse 
    position and the screen size
*/

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;
