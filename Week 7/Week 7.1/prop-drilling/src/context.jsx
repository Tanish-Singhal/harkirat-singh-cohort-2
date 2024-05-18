import { createContext } from "react";

export const CountContext = createContext();
// It is similar to useState, but this will directly teleport to the targeted component without the use of props
// It is a global context, so it will be shared across all the components