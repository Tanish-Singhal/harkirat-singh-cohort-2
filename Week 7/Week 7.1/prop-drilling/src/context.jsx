import { createContext } from "react";

export const CountContext = createContext(0);
// It is similar to useState, but this will directly teleport to the targeted component without the use of props