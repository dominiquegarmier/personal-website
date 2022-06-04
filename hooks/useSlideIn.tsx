import { RefObject, useRef, useState } from "react";
import { useScroll } from "./useScroll";

export const useSlideIn: () => [RefObject<HTMLDivElement>, boolean] = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useScroll(() => {
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top;
      if (top - window.innerHeight < -32) {
        setShow(true);
      } else if (top - window.innerHeight > 0) {
        setShow(false);
      }
    }
  });
  return [ref, show];
};
