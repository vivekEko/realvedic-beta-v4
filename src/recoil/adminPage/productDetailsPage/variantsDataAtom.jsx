import { atom } from "recoil";

const variantsDataAtom = atom({
  key: "variantsDataAtom", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export default variantsDataAtom;
