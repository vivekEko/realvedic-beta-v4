import { atom } from "recoil";

const categoryPageAtom = atom({
  key: "categoryPageAtom", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export default categoryPageAtom;
