import { useState, useEffect } from "react";

const useKonamiCode = targetKey => {
  // State for keeping track of whether key is pressed
  const [konamiCode, setIsKonami] = useState(false);
  const codes = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
  ];
  let index = 0;

  const onKeyUp = ({ key }) => {
    if (index === codes.length - 1) {
      setIsKonami(true);
    }
    if (
      key != null &&
      codes[index] != null &&
      key.toLowerCase() === codes[index].toLowerCase()
    ) {
      index++;
    } else {
      index = 0;
      setIsKonami(false);
    }
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keyup", onKeyUp);
    };
    // Empty array ensures that effect is only run on mount and unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return konamiCode;
};

export default useKonamiCode;
