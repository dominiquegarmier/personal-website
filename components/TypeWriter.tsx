import { FC, useState, useEffect, useRef } from "react";
import styles from "../styles/index.module.css";

interface Props {
  text: string;
  timeout: number;
}

export const TypeWriter: FC<Props> = ({ text, timeout }) => {
  const [index, setIndex] = useState(1);
  const [tick, setTick] = useState(0);
  const typeWriter = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeWriter.current) {
        const rect = typeWriter.current.getBoundingClientRect();
        if (rect.bottom < -128 || rect.top > window.innerHeight) {
          setIndex((index) => {
            if (index == 0) {
              return 0;
            }
            return index - 1;
          });
        } else {
          setIndex((index) => {
            if (index == text.length) {
              return text.length;
            }
            return index + 1;
          });
        }
      }
      setTick((tick) => tick + 1);
    }, timeout * 1000);
    return () => clearInterval(interval);
  }, [tick, index, timeout, text]);

  return (
    <div className={styles.typewriter} ref={typeWriter}>
      <div className={styles.typewriter__text}>
        {text.slice(0, index)}
        {index < text.length && (
          <span className={styles.typewriter__carrot}>|</span>
        )}
      </div>
    </div>
  );
};
