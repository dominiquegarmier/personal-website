import { FC } from "react";
import styles from "../styles/index.module.css";

interface Props {
  children: React.ReactNode;
}

export const Content: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__innner}>{children}</div>
    </div>
  );
};
