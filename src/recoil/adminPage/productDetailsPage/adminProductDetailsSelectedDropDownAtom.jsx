import { atom } from "recoil";

const adminProductDetailsSelectedDropDownAtom = atom({
  key: "adminProductDetailsSelectedDropDownAtom", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export default adminProductDetailsSelectedDropDownAtom;
