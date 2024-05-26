// screenSizeUtils.js

import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;

      if (width < 600) {
        setScreenSize("small");
      } else if (width >= 600 && width < 1200) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
