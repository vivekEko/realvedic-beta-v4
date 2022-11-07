import { atom } from "recoil";

const nutritionalDataAtom = atom({
  key: "nutritionalDataAtom", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export default nutritionalDataAtom;
