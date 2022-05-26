import { FC } from "react";
import React from "react";

export interface IconProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Icon: FC<IconProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
