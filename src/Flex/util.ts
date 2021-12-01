import * as React from "react";

interface WindowSizeTypes {
  width: number;
  height: number;
}

export const useWindowResize = (): WindowSizeTypes => {
  const [windowSize, setWindowSize] = React.useState(() => ({
    width: window?.innerWidth,
    height: window?.innerHeight,
  }));

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  React.useEffect(() => {
    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
};
