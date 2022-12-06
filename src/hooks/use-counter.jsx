import { useEffect, useState } from "react";

const useCounter = (fowards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) =>
        fowards ? prevCounter + 1 : prevCounter - 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [fowards]);

  return counter;
};

export default useCounter;
