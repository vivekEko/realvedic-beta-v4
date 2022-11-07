import { atom } from "recoil";

const productPageAtom = atom({
  key: "productPageAtom", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export default productPageAtom;
