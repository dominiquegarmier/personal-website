import { FC } from "react";
import { useState } from "react";

interface Props {
  text: string;
}

export const FlashText: FC<Props> = ({ text }) => {
  const [char, setChar] = useState(text[0]);

  return <div></div>;
};
