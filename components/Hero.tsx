import { FC } from "react";
import { Python } from "./icons/Python";
import { GoLang } from "./icons/GoLang";
import { Rust } from "./icons/Rust";
import { CPlusPlus } from "./icons/CPlustPlus";
import { JavaScript } from "./icons/JavaScript";
import { TypeScript } from "./icons/TypeScript";

export const Hero: FC = () => {
  return (
    <div>
      <div>
        <div className="font-bold text-7xl">Dominique</div>
        <div>mathematics student at ETHZ zurich</div>
        <div>progamming in my freetime</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="font-bold text-5xl">languages</span>
        <div className="p-4 max-w-[600px]">
          <div className="font-bold text-3xl text-center p-4">using</div>
          <ul className="flex justify-center">
            <li className="p-4">
              <Python className="w-16 dark:fill-white fill-black" />
            </li>
            <li className="p-4">
              <TypeScript className="w-16 dark:fill-white fill-black" />
            </li>
            <li className="p-4">
              <JavaScript className="w-16 dark:fill-white fill-black" />
            </li>
            <li className="p-4">
              <CPlusPlus className="w-16 dark:fill-white fill-black" />
            </li>
          </ul>
        </div>
        <div className="p-4 max-w-[600px]">
          <div className="font-bold text-3xl text-center p-4">learning</div>
          <ul className="flex justify-center">
            <li className="p-4">
              <GoLang className="w-16 dark:fill-white fill-black" />
            </li>
            <li className="p-4">
              <Rust className="w-16 dark:fill-white fill-black" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
