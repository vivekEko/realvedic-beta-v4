import { atom } from "recoil";

const productImageUploadAtom = atom({
  key: "productImageUploadAtom", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export default productImageUploadAtom;
