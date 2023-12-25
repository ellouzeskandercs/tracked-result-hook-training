import { useRef } from "react";

export const useNbOfRenders = () => {
  const nbOfRenders = useRef(0);
  nbOfRenders.current = nbOfRenders.current + 1;
  return nbOfRenders.current;
};
