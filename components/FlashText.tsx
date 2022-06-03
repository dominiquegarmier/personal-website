import { FC, useState, useEffect, useCallback } from "react";
import styles from "../styles/index.module.css";

interface Props {
  text: string;
  timeout?: number;
}

export const FlashText: FC<Props> = ({ text, timeout = 1 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % text.length);
    }, timeout * 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.flashtext}>
      <div className={styles.flashtext__text}>{text[index]}</div>
    </div>
  );
};
