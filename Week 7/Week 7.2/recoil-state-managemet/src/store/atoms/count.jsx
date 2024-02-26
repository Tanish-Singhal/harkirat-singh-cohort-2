import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom",
  default: 0
});

// TODO: key should be unique
export const evenSelector = selector({
  key: "evenSelector",
  get: ({get}) => {
    const count = get(countAtom);
    return count % 2 === 0;
  }
});