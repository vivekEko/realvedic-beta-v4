import { atom } from "recoil";

const productDetailsApiAtom = atom({
  key: "productDetailsApiAtom", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export default productDetailsApiAtom;
