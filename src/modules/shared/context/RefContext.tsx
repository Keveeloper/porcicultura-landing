import { createContext } from "react";
import { refProps } from "./types/types";

export const RefContext = createContext<refProps>({} as refProps);