import { useState, useEffect } from "react";

const useScrollHandler = (scrollDistance: number) => {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrolledTill = window.scrollY;
      if (scrolledTill < scrollDistance) setScroll(false);
      else setScroll(true);
    });
  }, [scroll, scrollDistance]);

  return scroll;
};

export default useScrollHandler;
